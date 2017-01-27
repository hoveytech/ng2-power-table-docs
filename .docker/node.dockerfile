FROM node
MAINTAINER David Hovey

EXPOSE 8081

COPY . /var/www
WORKDIR /var/www

RUN npm install
RUN npm install -g http-server

ENTRYPOINT ["http-server", "-p", "8081"]