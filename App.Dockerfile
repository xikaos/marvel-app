FROM node:current-alpine as before-deps-install

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

ENV PATH /home/node/app/node_modules/.bin:$PATH

COPY --chown=node:node . .

CMD [ "npm", "run", "start" ]

FROM node:current-alpine AS production

COPY --from=before-deps-install --chown=root:root /home/node/app /home/node/app

RUN npm install && chown -R root:root /home/node/app/node_modules

CMD [ "npm", "run", "start" ]
