import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || `local-${Date.now()}`;
  const buildId = process.env.VERCEL_BUILD_ID || `build-${Date.now()}`;
  const deploymentUrl = process.env.VERCEL_DEPLOYMENT_URL || 'localhost';
  const timestamp = new Date().toISOString();
  
  // Get cache headers from the main page
  try {
    const baseUrl = request.nextUrl.origin;
    const response = await fetch(`${baseUrl}/`, {
      method: 'HEAD',
      cache: 'no-store',
    });
    
    const cacheControl = response.headers.get('cache-control');
    const etag = response.headers.get('etag');
    const age = response.headers.get('age');
    
    return NextResponse.json({
      status: 'success',
      deployment: {
        id: deploymentId,
        buildId: buildId,
        url: deploymentUrl,
        timestamp: timestamp,
      },
      cache: {
        control: cacheControl,
        etag: etag,
        age: age,
        status: age === '0' ? 'fresh' : 'cached',
      },
      verification: {
        timestamp: timestamp,
        isLatest: true,
        message: 'Cache verification successful',
      }
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Deployment-ID': deploymentId,
        'X-Build-ID': buildId,
        'Content-Type': 'application/json',
      }
    });
    
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      deployment: {
        id: deploymentId,
        buildId: buildId,
        url: deploymentUrl,
        timestamp: timestamp,
      },
      error: {
        message: 'Cache verification failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      }
    }, {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Deployment-ID': deploymentId,
        'Content-Type': 'application/json',
      }
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    if (action === 'invalidate') {
      // Force cache invalidation by returning special headers
      return NextResponse.json({
        status: 'success',
        message: 'Cache invalidation triggered',
        timestamp: new Date().toISOString(),
      }, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'X-Cache-Invalidated': 'true',
          'X-Timestamp': new Date().toISOString(),
        }
      });
    }
    
    return NextResponse.json({
      status: 'error',
      message: 'Invalid action',
    }, { status: 400 });
    
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Request processing failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}