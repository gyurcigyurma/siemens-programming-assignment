## Siemens Comments Tracker App

### Features

- Comments Tab:
  - Display an AgGrid table with comments, client-side sorting
  - Above the table you can filter (quickfilter) any data
  - Client-side pagination
- Chart Tab:
  - display the words per comment
    - X axis displays the number of the comment
    - X axis display the number of words
    - hover over the dots displays the exact value
  - responsive layout

## Installing

#### Using regular install:

`npm i`

then run

`npm run start`

#### Using Docker-hub

- `docker pull gyurrci/siemens-programming-assignment` or `podman pull docker.io/gyurrci/siemens-programming-assignment:latest`

- `docker run -p 1234:1234 gyurrci/siemens-programming-assignment` or `podman run -p 1234:1234 gyurrci/siemens-programming-assignment`

#### Using docker/podman:

`docker build -t siemens-programming-assignment .` or `podman build -t siemens-programming-assignment .`

then

`docker run -p 1234:1234 siemens-programming-assignment` or `podman run -p 1234:1234 siemens-programming-assignment`

Warning: the docker image is based on node:16-alpine, the bundle is ~600-800MB, so it will take some time to build the image, and **it will not open a browser window automatically**, you HAVE TO open a browser and navigate to http://localhost:1234 manually.

## Tests

To execute tests, just run:
`npm run test`

To run test with coverage:
`npm run coverage`

## Improvement ideas

- in case of ten/hundreds of thousands rows in order to decrease traffic and for best user experince it would good to turn on server-side pagination
- ask a UX designer to create a fancy page design (font-type, sizes, etc.)
- imlement E2E test with Cypress or SuperTest
- improve coverage
- wire in a Sonar instance for code quality

## FYI

- I had to skip Enzyme as it does not officially support React 18. The maintainers of Enzyme are working on adding support for React 18, but it's not yet available. https://hackernoon.com/enzyme-is-dead-heres-how-you-can-migrate
- I used fixed version packages to avoid ie. a nightly build to break my demo app. In a real-world scenario, I would use the (almost) latest versions of the packages, but for demo/presaentation/curriculum purposes, I always used fixed versions. This guarantees that the app will work as expected, even in the future.

#### Used environtment

- Ubuntu 24.04 LTS
- Node v20.9.0
- npm v10.2.3
- tested in Chrome 124.0.6367.78, Firefox 125.0.2 (64-bit), Edge 124.0.2478.51 (64-bit)
