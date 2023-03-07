FROM node:16

WORKDIR /emailmicroservice

# ENV API_PORT = 3051
# ENV SQLAPIADDRESS = 127.17.0.2

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 3069

# prvide additional running functions to the command by using ","
CMD ["npm", "start"]