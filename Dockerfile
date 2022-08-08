# build environment
FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]