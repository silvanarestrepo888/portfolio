#!/bin/bash

# Deployment Verification Script
# Comprehensive cache and deployment status checker

echo "🔍 Portfolio Deployment Verification"
echo "=================================="
echo ""

# Check if domain is accessible
echo "1. 🌐 Domain Accessibility Check"
if curl -s --head https://experiencearchitect.design/ | head -n 1 | grep "200" > /dev/null; then
    echo "   ✅ Domain is accessible"
else
    echo "   ❌ Domain is not accessible"
    exit 1
fi
echo ""

# Check cache headers
echo "2. 📊 Cache Headers Analysis"
echo "   Cache-Control:"
curl -s -I https://experiencearchitect.design/ | grep -i cache-control | sed 's/^/     /'
echo "   ETag:"
curl -s -I https://experiencearchitect.design/ | grep -i etag | sed 's/^/     /'
echo "   Age:"
curl -s -I https://experiencearchitect.design/ | grep -i age | sed 's/^/     /'
echo "   X-Vercel-Cache:"
curl -s -I https://experiencearchitect.design/ | grep -i x-vercel-cache | sed 's/^/     /'
echo ""

# Check deployment ID
echo "3. 🚀 Deployment Information"
if command -v npx > /dev/null; then
    echo "   Current Deployment:"
    npx vercel inspect experiencearchitect.design --token=$VERCEL_TOKEN 2>/dev/null | grep -E "(id|url|created)" | sed 's/^/     /'
else
    echo "   ⚠️  Vercel CLI not available"
fi
echo ""

# Performance test
echo "4. ⚡ Performance Test"
LOAD_TIME=$(curl -o /dev/null -s -w '%{time_total}\n' https://experiencearchitect.design/)
echo "   Load Time: ${LOAD_TIME}s"
if (( $(echo "$LOAD_TIME < 1.0" | bc -l) )); then
    echo "   ✅ Excellent performance"
elif (( $(echo "$LOAD_TIME < 3.0" | bc -l) )); then
    echo "   ⚠️  Acceptable performance"
else
    echo "   ❌ Poor performance"
fi
echo ""

# Check API endpoint
echo "5. 🔧 Cache Verification API"
if curl -s https://experiencearchitect.design/api/cache-verify > /dev/null; then
    echo "   ✅ Cache verification API is working"
    curl -s https://experiencearchitect.design/api/cache-verify | jq -r '.cache.status // "unknown"' | sed 's/^/   Status: /'
else
    echo "   ❌ Cache verification API failed"
fi
echo ""

# Check for Phase 3 content
echo "6. 🎨 Phase 3 Content Verification"
if curl -s https://experiencearchitect.design/ | grep -q "curated selection"; then
    echo "   ✅ Phase 3 enhanced descriptions detected"
else
    echo "   ❌ Phase 3 content not found"
fi
echo ""

echo "🏁 Verification Complete"
echo "======================="