#!/bin/bash


#For time

for((;;))
do

#tail -n 2 from_srv | awk '{print $1}' | awk -F "." '{print $1}' >> time.txt
date +"%H:%M %d/%m/%Y" >> time.txt


#For usg_gpu

tail -n 2 from_srv | awk '{print $2}' | head -n 1 >> gpu_usg.txt

sleep 5

done
