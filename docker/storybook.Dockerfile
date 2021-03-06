FROM node:8.15.0-alpine
COPY ./storybook/storybook-static ./projects/storybook
WORKDIR /projects/storybook
RUN ls -la
RUN yarn global add http-server
ENV PORT 80
EXPOSE ${PORT}
CMD http-server . -p ${PORT}
