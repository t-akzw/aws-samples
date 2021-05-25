#!/bin/sh

cat <<EOS >  ~/.aws/credentials
# Do not modify this file, if this file is modified it will not be updated. If the file is deleted, it will be recreated on Tue May 25 2021 02:13:59 GMT+0000 (Coordinated Universal Time).
# d590c2d0fe4cd82ad2686f5353189d5475ab6e37c40c5e0d3c4a6027e5266e44 #

[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
aws_session_token = ${AWS_SESSION_TOKEN}
region = us-east-1
EOS
