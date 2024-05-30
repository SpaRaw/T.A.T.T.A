#!/bin/sh

# Das Skript wartet, bis der angegebene Host und Port erreichbar sind
# Beispielnutzung: ./wait-for-it.sh db:3306 -- npm start

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host"; do
  echo "Waiting for $host..."
  sleep 1
done

exec $cmd