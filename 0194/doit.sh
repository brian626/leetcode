#! /bin/bash

cols=`awk '{print NF}' file.txt | tail -n 1`

for i in $(seq 1 $cols)
do
    cat file.txt | awk "{print \$$i}" | tr '\n' ' ' | sed 's/ $//'
    echo ''
done
