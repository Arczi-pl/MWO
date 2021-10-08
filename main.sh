#!/bin/bash

build() {
    docker-compose build
    
}

up() {
    docker-compose up -d
}

follow() {
    docker-compose logs --follow --tail 50
}

down() {
    docker-compose down
}

start() {
    docker-compose build
    docker-compose up -d
    docker-compose logs --follow --tail 50
}

"$@"