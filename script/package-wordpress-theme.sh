#!/usr/bin/env bash
set -euo pipefail

THEME_DIR="wordpress-theme/fbaacademy-spa"
DIST_DIR="dist"
ZIP_PATH="$DIST_DIR/fbaacademy-spa-theme.zip"

npm run build:wp
mkdir -p "$DIST_DIR"
rm -f "$ZIP_PATH"

# zip should contain only the theme folder, ready for WordPress upload
(
  cd "wordpress-theme"
  zip -r "../$ZIP_PATH" "fbaacademy-spa" -x "*.DS_Store"
)

echo "Created: $ZIP_PATH"
