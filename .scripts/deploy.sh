#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull
echo "New changes copied to server !"
echo "Remove Dependencies..."
rm -rf node_modules package-lock.json
echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
# For ReactJS VueJS and Nuxt JS
npm run build


# npm run export

echo "Deployment Finished!"