FROM node:16

WORKDIR /api/bookapi

ENV API_PORT = 4000
ENV SQLAPIADDRESS = 127.0.0.1

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 5000

# prvide additional running functions to the command by using ","
CMD ["npm", "start"]