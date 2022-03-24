FROM node:16


WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/

#RUN node index.js 
#여러번 
CMD node index.js
#한번 입력 