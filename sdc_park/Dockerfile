FROM node:8

RUN mkdir -p /src/sdc

WORKDIR src/sdc

COPY . /src/sdc

RUN npm install

EXPOSE 3333

CMD ["npm", "run", "sdc-server"]