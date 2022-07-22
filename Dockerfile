FROM node:16.16

RUN mkdir src

RUN apt update && \
    apt upgrade && \
    apt install git && \
    npm install -g npm@latest nuxi nuxt3