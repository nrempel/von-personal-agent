FROM node:latest

RUN npm i -g ionic
RUN npm install -g @angular/cli

WORKDIR /app

ADD app/package.json .
ADD app/package-lock.json . 

RUN npm install --quiet

ADD app .