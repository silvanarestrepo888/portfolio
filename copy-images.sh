#!/bin/bash

# Copy Project Snippet Images
echo "Copying project snippet images..."

SOURCE_DIR="/Users/silvanarestrepo/Desktop/Design Experience Architect/projects/Projects Snippets"
TARGET_DIR="/Users/silvanarestrepo/Desktop/Design Experience Architect/portfolio/public/projects/snippets"

# Copy and rename each image
cp "$SOURCE_DIR/C4IR-World Economic Forum Affiliate.png" "$TARGET_DIR/c4ir-colombia.png"
cp "$SOURCE_DIR/WEF & Designit a WIPRO Company.png" "$TARGET_DIR/wef-designit.png"
cp "$SOURCE_DIR/Viva Malls.png" "$TARGET_DIR/viva-malls.png"
cp "$SOURCE_DIR/Grupo Exito-Grupo Casino.png" "$TARGET_DIR/grupo-exito.png"
cp "$SOURCE_DIR/Tigo-Millicom.png" "$TARGET_DIR/tigo-millicom.png"

echo "Image copying complete!"
echo "Verifying files:"
ls -la "$TARGET_DIR"/*.png