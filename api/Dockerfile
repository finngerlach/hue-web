FROM node:17-alpine AS build

WORKDIR /app
RUN chown -R node:node /app

COPY --chown=node:node package*.json yarn.lock ./
USER node
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 3030

FROM build AS dev
CMD ["yarn", "run", "dev"]