FROM node:8.10-alpine as before-deps-install

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

ENV PATH /home/node/app/node_modules/.bin:$PATH

CMD ["yarn", "start"]

FROM node:8.10-alpine as production

USER node

COPY --from=before-deps-install --chown=root:root /home/node/app /home/node/app

RUN yarn && chown -R node:node /home/node/app/node_modules/

COPY --chown=node:node . .

CMD [ "yarn", "start" ]
