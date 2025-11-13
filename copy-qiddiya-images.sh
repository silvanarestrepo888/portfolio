#!/bin/bash

echo "Copying updated Qiddiya project images..."

BASE_DIR="/Users/silvanarestrepo/Desktop/Design Experience Architect"
SOURCE_DIR="$BASE_DIR/projects/qiddiya/Qiddiya"
TARGET_DIR="$BASE_DIR/portfolio/public/projects/qiddiya"

# Copy gallery images
echo "Copying gallery images..."
cp "$SOURCE_DIR/Project gallery  images/Screenshot 2025-11-12 at 16.15.55.png" "$TARGET_DIR/Project gallery  images/Emergency Management-Unified Alert System.png"
cp "$SOURCE_DIR/Project gallery  images/Screenshot 2025-11-12 at 16.16.19.png" "$TARGET_DIR/Project gallery  images/Guest Search by Digital ID.png"
cp "$SOURCE_DIR/Project gallery  images/Unified Guest Interaction History.png" "$TARGET_DIR/Project gallery  images/Unified Guest Interaction History.png"

# Copy hero image (recommended upgrade)
echo "Copying hero image..."
cp "$SOURCE_DIR/Screenshot 2025-11-12 at 16.15.41.png" "$TARGET_DIR/hero-qiddiya.png"

echo "Qiddiya image copying complete!"
echo "Verifying files:"
echo "Gallery images:"
ls -la "$TARGET_DIR/Project gallery  images"/*.png
echo "Hero image:"
ls -la "$TARGET_DIR/hero-qiddiya.png"