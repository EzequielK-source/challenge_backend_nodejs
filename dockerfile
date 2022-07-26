FROM node:16-alpine
ENV NODE_ENV=production
ENV NODE_PATH=.
ENV PORT=8990
USER node
RUN mkdir /opt/app
WORKDIR /opt/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

EXPOSE $PORT
CMD [ "node", "src/bin/www.js" ]