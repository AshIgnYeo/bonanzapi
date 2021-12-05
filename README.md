# BonanzApi

Exercises for working with APIs!

## Challenge 1

#### Handling multiple API calls

<details>
<summary>Read more</summary>

The first challenge! A simple exercise to learn how to handle multiple API calls in a single function call. Also some training on thinking of scalability and **DRY** coding.

### ❗️Read First

To begin the challenge:

```
cd 01-multiple-apis
yarn
yarn start
```

> **assets/js/main.js**

1. We should not need to change anything in this file.
2. From a single function call `fetchBonanzApi()` we should be able to get all our data and pass to the callback function `populateDashboard`.

> **assets/js/modules/api.js**

1. We are immediately receiving an error in our console when we start our app, we need to update something in this file to clear the error.
2. `fetchBonanzApi()` should return the right data to pass along to our callback function in `main.js`.

> **assets/js/modules/dashboard.js**

1. We export a single function here used as a `callback function`.
2. A helper function was created for us to use to quickly update the DOM.
3. _(optional)_ If this file seems lengthy, _it means you can refactor this way more!_ Try think about scalability. What if more API's are to be added over time. How would we prepare for that?

> **index.html**

1. Feel free to change the html markup to better suit your strategy to update the information.
2. There's no css in the file. We're just using bootstrap's utility classes. That's why everything looks so ugly. 🤮
</details>

## Challenge 2

#### Working with long API calls

<details>
<summary>Read more</summary>
Upcoming
</details>

## Challenge 3

#### Authenticated APIs

<details>
<summary>Read more</summary>
Upcoming
</details>
