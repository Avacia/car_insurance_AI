FROM node:22-alpine

RUN mkdir /frontend

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm",  "run", "dev"]