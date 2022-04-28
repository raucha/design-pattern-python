#! /bin/bash

set -ue

f_ts=$1
f_js=${f_ts/\.ts/\.js}

tsc $f_ts
node $f_js
rm $f_js
