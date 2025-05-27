# Base
FROM node:22 AS base
EXPOSE 3000

# Install dependencies Stage
FROM base AS dev
WORKDIR /react-app
COPY package*.json yarn.lock ./
RUN yarn --frozen-lockfile

# Builder Stage
FROM base AS devbuilder
WORKDIR /react-app
COPY --from=dev /react-app/node_modules ./node_modules
COPY . .
RUN yarn build && yarn --frozen-lockfile --production && yarn cache clean


# Serve Nginx Stage
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=devbuilder /react-app/dist /usr/share/nginx/html
COPY --from=devbuilder /react-app/nginx/nginx.conf /etc/nginx/conf.d/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]