FROM nginx

MAINTAINER David Hovey

EXPOSE 8080

COPY ./.docker/nginx.conf /etc/nginx/nginx.conf