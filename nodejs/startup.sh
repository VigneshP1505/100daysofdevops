#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
    echo "Starting in production mode"
    yarn start
else
    echo "Starting in dev mode"
    yarn dev
fi
