# SAH-challenge-Backend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

## Technologies Used

- **Express**: As a framework for node
- **Typescript**: In order to add types
- **Axios**: To Manage the API calls
- **Cors**: To Enable request from the frontend side
- **nodemon**: In the development to use hot-realoading


## Decisions
As my first time creating a backend for a project I spend less time on that part and more on the Frontend side of the challenge

- As I'm not an expert on what to test or not when working with microservice, the react app or the router I didn't spend any time on researching on that, if I had more time, for sure I test that part.
- In order to manage data in the frontend fastest I cap the houses to 50, probably with more time a better solution can be to making the pagination and sorting in this BFF and implement some type of caching for the json call


## Application Diagram
![sah Backend Diagram](https://github.com/Vergara92/sah-challenge-backend/blob/main/sah-backend-diagram.jpg)
