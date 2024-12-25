#!/bin/bash

num=`cat file.txt | wc -l`

if [ $num -gt 9 ]; then
  cat file.txt | head -10 | tail -1
fi
