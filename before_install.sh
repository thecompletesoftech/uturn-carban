#!/usr/bin/env bash

IMAGE_TAG=$1

service="website"
container=$(sudo docker ps --format "{{.Names}}" | grep -w "$service")

if [ "$container" != "$service" ]; then
  echo "test-service container not running !!!"
else
  # shellcheck disable=SC2046
  sudo docker rm -f $(sudo docker ps -a | grep "$service" | awk '{print $1}')
fi

echo "Login ECR ..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 209111322573.dkr.ecr.us-east-1.amazonaws.com

sudo docker run -d --restart=always --name website -p 80:80 209111322573.dkr.ecr.us-east-1.amazonaws.com/website:$IMAGE_TAG
