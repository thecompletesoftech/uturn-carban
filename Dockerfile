FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

COPY default /etc/nginx/conf.d/default.conf
