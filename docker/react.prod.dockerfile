FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm install --silent
RUN npm install -g serve

COPY . ./

RUN npm run build

CMD ["serve", "-s", "build", "-C", "--no-etag", "--ssl-cert", "/run/secrets/server.crt", "--ssl-key", "/run/secrets/server.key"]
