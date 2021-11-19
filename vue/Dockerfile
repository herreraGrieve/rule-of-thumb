FROM node:14-stretch

RUN mkdir -p /app/vue
WORKDIR /app/vue

COPY ./package*.json ./
RUN yarn install

ENV PATH /app/vue/node_modules/.bin:$PATH

COPY . .
EXPOSE 8080
CMD [ \
    "bash", \
    "-c", \
    "yarn serve --port 8080" \
]