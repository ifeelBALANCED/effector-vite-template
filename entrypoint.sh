#!/bin/sh

pnpm rebuild esbuild

exec "$@"