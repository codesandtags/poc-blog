# PoC for Microservices in NodeJS and React

## Motivation

This is a Proof of Concept, about how to create microservices using NodeJS, Express and React. This project contains a monorepo which represents the microservices to manage a blog website.

## Features

This project uses:

- [x] Monorepo approach
- [x] Add logger in express with `Winston`
- [x] Manage environment variables with `dotenv` dependency.
- [ ] Add swagger open API v3 definitions.
- [ ] Add postman collections

## Wish list

- [x] Add prettier and eslint
- [ ] Add Husky pre-commit configuration
- [x] Add Docker or Kubernate to manage the Microservices in containers
- [ ] Add a load balancer with nginx to scale up or scale down the number of microservices

## Architecture

@TODO: Add architecture logical view or conceptual diagram.

| Micro Service | Port | Description                                                                      | Technologies |
| :------------ | :--: | :------------------------------------------------------------------------------- | :----------- |
| Post          | 4000 | Represent the microservice to create and list the posts                          | Express      |
| Comments      | 4001 | Represents the microservice to create and list the comments related to the posts | Express      |
| Query         | 4002 | Represents the microservice to collect                                           | Express      |
| Moderation    | 4003 | Represents the microservice to moderate the comments created                     | Express      |
| Event Bus     | 4005 | Handle events and propage them between microservices                             | Express      |

| Web Clients | Port | Description                                            | Technologies |
| :---------- | :--: | :----------------------------------------------------- | :----------- |
| Client      | 3000 | Represents the web client to consume the microservices | React        |

## Technologies

- [x] React 18.x / Create-react-app
- [x] Express
- [x] Axios
- [x] Wiston

## Steps

## Runing images with Docker

For each microservice, you can run the next command

```
docker build -t codesandtags/${MICROSERVICE_NAME}.

# Example in posts

docker build -t codesandtags/posts
```

If you prefer you can run build all docker images by running the next command.

```
sh build-containers.sh
```

## Runing images with Docker Compose

To run this project using Docker compose, only run the next command:

```
docker-compose up
```

## Runing project with Kubernates

## Runing project on AWS

## Runing project on GPC

## Demo

TODO: Add link with demo

## Resources

| Resource | Description |
| :------: | ----------- |

## Contact

Feel free to contact me at:

- [Linkedin](https://www.linkedin.com/in/edwintorresdeveloper/)
- [Gmail](mailto:codesandtags@gmail.com)
- [Github](https://github.com/codesandtags)
