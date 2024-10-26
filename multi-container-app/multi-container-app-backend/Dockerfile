FROM node

WORKDIR /src

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 1500

CMD ["npm","start"]