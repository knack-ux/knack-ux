FROM node:8.15.0-alpine
COPY ./docz/.docz/dist ./projects/docz
WORKDIR /projects/docz
RUN ls -la
RUN npm install -g http-server
ENV PORT 80
EXPOSE ${PORT}
CMD http-server . -p 80
