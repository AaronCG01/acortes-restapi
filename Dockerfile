#Usar linux debian version 8 (jessie)
FROM debian:jessie
#Updata
RUN apt-get update
#Install curl g++
RUN apt-get install -y curl make g++
#Download nodejs
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
#Add package.json
ADD package.json /package.json
RUN npm install

WORKDIR /src

EXPOSE 8091

CMD ["node", "/src/index.js"]