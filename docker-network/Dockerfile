FROM node

WORKDIR /src

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 2300
CMD ["node","app.js"]