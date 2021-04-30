#!/bin/bash

ssh time4 ls /home/taka/www/html | grep -v -E "^portfolio$|^standings$" | xargs rm -rf
scp -pr ./public/* time4:/home/taka/www/html/