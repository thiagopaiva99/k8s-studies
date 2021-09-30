#! /bin/bash

docker build -t simple-web-server . && docker run -p 9000:9000 simple-web-server