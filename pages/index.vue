<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-userbase-starter</h1>
      <h2>Logged in as {{ username }}</h2>
      <div class="links">
        <button class="button--green" @click="handleLogout">Logout</button>
        <nuxt-link class="button--green" to="/update-user"
          >Update user info</nuxt-link
        >
        <a
          href="https://github.com/mujahidfa/nuxt-userbase-starter"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import userbase from 'userbase-js'

export default {
  async asyncData({ $config }) {
    const session = await userbase.init({
      appId: $config.userbaseAppId,
    })
    const username = session.user.username

    return {
      username,
    }
  },
  methods: {
    handleLogout() {
      userbase
        .signOut()
        .then(() => {
          this.$router.push({
            path: '/login',
          })
        })
        .catch((e) => alert(e))
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
