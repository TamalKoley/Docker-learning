FROM node:14

WORKDIR /src

COPY package.json  /src

RUN npm install

COPY . .
ENV PORT 1000
EXPOSE $PORT

CMD ["node","server.js"]

