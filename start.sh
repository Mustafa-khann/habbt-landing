#!/bin/bash

# Habbt Landing Page - Startup Script

echo "🚀 Starting Habbt Landing Page..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

# Start the development server
echo "✨ Starting development server..."
npm run dev

