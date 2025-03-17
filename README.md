# E-Commerce App

## Introduction

This is a simple ~~todo~~ shopping list application that has all basic CRUD functions of adding, editing, and removing items that are visible on the page.

The app also features a simple generation of list items so that it can be randomly populated with a variety of produce upon initialization (which upon specific request, have been intentionally left to _not_ be persistent via localStorage or any other means)

## Running the app

### From the local environment

This was kept simple with the standard create-react-app template, so the default command will do:

```bash
npm start
```

### From GitHub Pages

[Click the link here to visit the live version of the app!](https://avasconcelos114.github.io/ecommerce_test)

## Considerations

### Libraries Used

The main needs of production applications with regards to their scalability is having a way to gracefully manage more **state**, and avoid running into visual glitches due to conflicting styles or classnames, as such I employed 2 libraries in the simple implementation of this app:

- Redux Toolkit (a very much simplified version of react-redux)
- Emotion

While I could have also used SCSS to have a well-structured way to add scoped values with little efford, I appreciate how easy Emotion (or other CSS-in-JS libraries like styled-components) allow you to have application state affect the visual layer of the application in a seamless way.

### Environment Setup

Given the quick nature of this project, I purposefuly neglected to employ some quality-of-life tooling/configuration like path aliasing or prettier since they can sometimes become a bit of a time sink, so I've chosen to prioritize getting the features done quickly

### Validation

While it was not left explicitly clear on what kinds of input validation would be needed, I made sure that the `amount` inputs could only receive numerical values, while the `name` field is more flexible as many products may contain numbers or a few special characters within them

### Mobile Support?

While stated as not being necessary, I find that using flexbox the right way allows for a design that at least gracefully adapts itself to the sizes of many screens, so I opted to make use of them (in a real scenario, I would have gone as far as establishing defined breakpoints and have the UI adapt more seamlessly with its layouts and certain font sizes)
