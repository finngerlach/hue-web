FROM node:16-alpine AS init

WORKDIR /app
RUN chown -R node:node /app

COPY --chown=node:node package*.json yarn.lock ./
USER node
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

FROM init AS prod-preprocessing
RUN yarn run build

FROM nginx AS prod
RUN mkdir /app
COPY --from=prod-preprocessing --chown=nginx:nginx /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

FROM init AS dev
EXPOSE 8080
CMD [ "yarn", "run", "dev" ]