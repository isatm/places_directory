FROM node:22-alpine
RUN npm i -g @nestjs/cli
WORKDIR /app 

COPY directory-places/package.json .  
RUN npm install  

COPY directory-places/ .  

EXPOSE 3000
EXPOSE 27017
EXPOSE 3306
CMD ["npm", "run", "start:dev"]