FROM node:18.13-bullseye as build
COPY . .
RUN ["npm", "clean-install"]
RUN ["npx", "sanity", "build"]
