FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm i -g npm-check-updates

COPY . ./

CMD ["npm", "start"]
