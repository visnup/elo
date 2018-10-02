FROM node:8-slim

RUN apt-get update && \
    apt-get install -y python build-essential

#ENV TZ=America/Los_Angeles
#RUN apk add -U tzdata
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json* /app/
RUN npm install

COPY . /app
CMD npm start
