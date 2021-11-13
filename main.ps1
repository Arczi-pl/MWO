function build() {
    docker-compose build
}

function up() {
    docker-compose up -d
}

function follow() {
    docker-compose logs --follow --tail 50
}

function down() {
    docker-compose down
}

function start_docker() {
    docker-compose build
    docker-compose up -d
    docker-compose logs --follow --tail 50
}

switch ($args[0]) {
    "build" {build}
    "up" {up}
    "follow" {follow}
    "down" {down}
    "start" {start_docker}
    $null {
        echo "Paremeter needed"
    }
    Default {
        echo "Command unknown"
    }
}