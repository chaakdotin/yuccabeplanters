#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull
echo "New changes copied to server !"

echo "Installing Dependencies..."
rm -rf node_modules package-lock.json
npm install --yes

echo "Creating Production Build..."
# For ReactJS VueJS and Nuxt JS
npm run build

# For NextJS
# npm run export

echo "Deployment Finished!"