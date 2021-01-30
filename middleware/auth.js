import userbase from 'userbase-js'

// Path to navigate after a successful authentication
const REDIRECT_AFTER_AUTHENTICATED_URL = '/'

// Path to navigate after a failed authentication or after logout
const REDIRECT_FAILED_AUTH_URL = '/login'

// These are the paths that you don't want to be guarded behind an auth
// Typically you'd want to put your login, register, and public homepage paths here (if any)
const AUTHLESS_URLS = ['/login', '/register', '/forgot-password']

export default async function ({ $config, route, redirect }) {
  try {
    const session = await userbase.init({
      appId: $config.userbaseAppId,
    })

    // If current session user is authenticated
    if (session.user) {
      // If you're in paths that don't need auth,
      // redirect to url specified in REDIRECT_AFTER_AUTHENTICATED_URL
      if (AUTHLESS_URLS.includes(route.path)) {
        redirect(REDIRECT_AFTER_AUTHENTICATED_URL)
      }
    }

    // If current session user is NOT authenticated
    // and is in authless pages (i.e. all pages not specified under AUTHLESS_URLS),
    // redirect to the default authless page (typically your login page)
    else if (!AUTHLESS_URLS.includes(route.path)) {
      redirect(REDIRECT_FAILED_AUTH_URL)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)

    // If you're in paths that require auth,
    // redirect to the default authless page (typically your login page)
    if (!AUTHLESS_URLS.includes(route.path)) {
      redirect(REDIRECT_FAILED_AUTH_URL)
    }
  }
}
