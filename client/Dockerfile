FROM node:15.2.0-alpine AS init

WORKDIR /app
RUN chown -R node:node /app

COPY --chown=node:node package*.json yarn.lock ./
USER node
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

FROM init AS dev
EXPOSE 8080
CMD [ "yarn", "run", "dev" ]