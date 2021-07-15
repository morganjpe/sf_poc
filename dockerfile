FROM node:12-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
# Copying source files
COPY . .
EXPOSE 3000/tcp

RUN ["npm", "install",  "yarn", "-g", "-f"]
RUN ["yarn"]
RUN ["yarn", "build"]
CMD ["yarn", "debug"]

# docker build -f dockerfile -t 122323/kingfisher:latest .
# docker push 122323/kingfisher:latest
# docker run -p 3000:3000 122323/kingfisher:latest