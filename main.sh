#!/bin/bash

build() {
    echo "Start building"
    docker-compose build
    
}

up() {
    echo "Start uping"
    docker-compose up -d
}

follow() {
    echo "Start following"
    docker-compose logs --follow --tail 50
}

down() {
    echo "Kill all containers"
    docker-compose down
}

start() {
    docker-compose build
    docker-compose up -d
    docker-compose logs --follow --tail 50
}

"$@"