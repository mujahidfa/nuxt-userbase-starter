<template>
  <div>
    <h1>Login to your account</h1>

    <form method="POST" @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          name="username"
          type="text"
          required
          auto-complete
          placeholder="Username"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          required
          autocomplete="current-password"
          placeholder="Password"
        />
      </div>

      <div>
        <input
          id="remember_me"
          v-model="rememberMe"
          name="remember_me"
          type="checkbox"
        />
        <label for="remember_me"> Remember me </label>
      </div>

      <div>
        <nuxt-link to="forgot-password">Forgot your password?</nuxt-link>
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>

    <nuxt-link to="/register">Create an account</nuxt-link>
  </div>
</template>

<script>
import userbase from 'userbase-js'

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
    }
  },
  methods: {
    handleLogin() {
      userbase
        .signIn({
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe ? 'local' : 'session',
        })
        .then((user) => {
          alert('Logged in!')
          this.$router.push({
            path: '/',
          })
        })
        .catch((e) => alert(e))
    },
  },
}
</script>
