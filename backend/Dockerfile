FROM node:22-alpine

RUN mkdir /backend

WORKDIR /backend

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]