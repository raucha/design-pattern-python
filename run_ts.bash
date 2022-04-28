#! /bin/bash

f_ts=$1
f_js=${f_ts/\.ts/\.js}

tsc $f_ts
node $f_js
