# Getting Started with Create React App

This project was bootstrapped with

- [CRA v5](https://github.com/facebook/create-react-app) for bootstraping the client
- [MUI v5](https://mui.com/) UI library for react
- [React Router v6](https://reactrouter.com/) for routing

## Adding env variables for application

Create `.env.local` file at the root of the project and add the following lines to run firebase project (you can copy it directly from `.envrc.template`):

```bash
REACT_APP_FIREBASE_API_KEY="<PROJECT_API_KEY>"
REACT_APP_FIREBASE_AUTH_DOMAIN="<PROJECT_ID>.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL="<PROJECT_ID>.<REGION>.firebasedatabase.app"
REACT_APP_FIREBASE_PROJECT_ID="<PROJECT_ID>"
REACT_APP_FIREBASE_STORAGE_BUCKET="<PROJECT_ID>.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID="<FIREBASE_APP_ID>"
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
