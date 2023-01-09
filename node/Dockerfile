FROM node:15-alpine

WORKDIR /usr/src/app

RUN apk add wget && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY package.json ./
RUN yarn install
COPY . . 

EXPOSE 3000