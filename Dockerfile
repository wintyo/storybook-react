FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs chromium-browser fonts-ipafont
RUN npm install -g yarn
WORKDIR /root
