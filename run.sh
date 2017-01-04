#! /usr/bin/env sh

./node_modules/.bin/babel --watch src -d lib -s &
./node_modules/.bin/nodemon --ignore src lib/index.js
