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

- [ ] Add Husky pre-commit configuration

## Architecture

@TODO: Add architecture logical view or conceptual diagram.

| Micro Service | Port | Description                                                                      | Technologies |
| :------------ | :--: | :------------------------------------------------------------------------------- | :----------- |
| Post          | 4000 | Represent the microservice to create and list the posts                          | Express      |
| Comments      | 4001 | Represents the microservice to create and list the comments related to the posts | Express      |
| Query         | 4002 | Represents the microservice to collect                                           | Express      |

| Web Clients | Port | Description                                            | Technologies |
| :---------- | :--: | :----------------------------------------------------- | :----------- |
| Client      | 3000 | Represents the web client to consume the microservices | React        |

## Technologies

- [ ] React 17.x / Create-react-app
- [ ] Express

## Steps

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
