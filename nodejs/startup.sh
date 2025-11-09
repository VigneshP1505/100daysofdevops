#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
    echo "Starting in production mode"
    yarn start
elif [ "$NODE_ENV" = "pm2" ]; then
    echo "staring pm2 mode"
    yarn start:prod
else
    echo "Starting in dev mode"
    yarn dev
fi
