# e-commerce-site

<!-- TODO -->

### Front-end Development

- [x] Scaffolding e-commerce app with create-react-app
- [x] Create the homepage layout
- [x] Install SASS
- [x] Install React Router Dom
  - Home page
  - Shop page
  - Sign in Page
  - Cart page
  - Checkout page
- [x] Build the sign up page functionality
- [x] Style the sign up page with sass
- [x] Refactor component:
  - [x] Create reusable form-input component
  - [x] Create reusable button component
  - [x] Create reusable custom alert component
- [x] Create authentication functionality with sign in ability
- [x] Create custom error message component
- [x] Adding react context(user context)
  - [x] Navigation component change the sign in link to sign out if user log out
  <!-- Shop page -->
- [x] Added some dummy produtcs data
- [x] Create the route for Shop page
- [x] Created the products context
- [x] Show the products name from the produtcs context onto the Shop page
<!-- Cart -->
- [x] Created the cart context
  - [x] state: isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount
- [x] Build the mini cart
  - [x] cart icon component which will show the total items
  - [x] cart dropdown component which will show, item image, quantity, total price
  <!-- checkout page -->
- [x] create checkout page
  - [x] checkout page will have all the items listed
  - [x] checkout page will have items to increament and decrement
  - [x] checkout page will have the total
- [x] add states to cart context: removeItemFromCart, clearItemFromCart, cartTotal,

### Back-end Development.

- [x] User Sign in/Sign up functionality with Firebase Auth and Firestore Auth

  - [x] Create Firebase project
  - [x] Create Firebase config file
  - [x] Install .env & hide Config info
  - [x] Add firebase Auth
  - [x] Create sign up with GoogleAuthProvider
  - [x] Add firebase DB for user email and password
  - [x] Create sign up with createUserWithEmailAndPassword
  - [x] Sign out a user with Sign out function from firebase
  - [x] Centralized the auth functions

- [x] Set up the firebase database with the shop data

<!-- CRA DEFAULT README -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
