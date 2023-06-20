FROM node:16.20.0-alpine3.18

ARG NODE_ENV="production"

RUN mkdir ./server

RUN mkdir -p /var/www/html/


WORKDIR /server

COPY package*.json ./

RUN npm install -g sequelize-cli

RUN npm install

COPY . .

EXPOSE 3000

CMD sequelize db:migrate && npm start
