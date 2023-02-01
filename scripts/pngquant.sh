#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")/.." || exit 1
echo "=> Optimize PNG images with pngquant ..."
echo "=> => Optimizing ..."
echo

cd assets

pngquant -f --skip-if-larger --ext .png --speed 1 *.png