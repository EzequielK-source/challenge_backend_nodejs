

FROM node:16-alpine
ENV NODE_ENV=production
ENV NODE_PATH=.
ENV PORT=8990

WORKDIR /app
COPY . .
RUN npm install 

EXPOSE $PORT

CMD [ "node", "src/bin/www.js" ]