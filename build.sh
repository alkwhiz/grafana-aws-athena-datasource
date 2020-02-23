#!/usr/bin/env bash

npm run build
make build
npx grafana-toolkit plugin:ci-package
