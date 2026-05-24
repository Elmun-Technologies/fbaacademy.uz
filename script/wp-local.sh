#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPOSE_FILE="$ROOT_DIR/docker-compose.wordpress.yml"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker topilmadi. Docker Desktop ornating."
  exit 1
fi

ACTION="${1:-up}"

case "$ACTION" in
  up)
    docker compose -f "$COMPOSE_FILE" up -d
    echo "WordPress ishga tushdi: http://localhost:8080"
    ;;
  down)
    docker compose -f "$COMPOSE_FILE" down
    ;;
  logs)
    docker compose -f "$COMPOSE_FILE" logs -f --tail=100
    ;;
  rebuild)
    docker compose -f "$COMPOSE_FILE" down
    docker compose -f "$COMPOSE_FILE" up -d --build
    ;;
  *)
    echo "Foydalanish: $0 [up|down|logs|rebuild]"
    exit 1
    ;;
esac
