# nuxt-userbase-starter

A [NuxtJS](https://nuxtjs.org/) + [Userbase](https://userbase.com/) starter with authentication flows such as login, create account, update password and update user info.

To start, clone this repo, and create a `.env` file in the project's root directory and put in your Userbase App ID:

```.env
# In .env
USERBASE_APP_ID=your_userbase_app_id
```

Then, install dependencies and start the dev server:

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev
```

## How does this work?

This app uses a [middleware](https://nuxtjs.org/docs/2.x/directory-structure/middleware) that checks for an active session every time a page request is made.

You can check out [middleware/auth.js](/middleware/auth.js) for implementation details.

```js
export default async function ({ $config, ... }) {
  const session = await userbase.init({
    appId: $config.userbaseAppId,
  })

  // If current session user is authenticated
  if (session.user) {
    // allow access to authenticated pages
    ...
  } else {
    // redirect to login page
    ...
  }
}
```

## Building for production

```bash
# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```
