FROM node:16

WORKDIR /api/bookapi

COPY package.json ./

# RUN npm install

COPY . ./

EXPOSE 5000

COPY start.sh /start.sh

CMD ["/bin/bash", "/start.sh"]