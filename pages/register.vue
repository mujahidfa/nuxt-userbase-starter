<template>
  <div>
    <h1>Create an account</h1>

    <form method="POST" @submit.prevent="handleRegister">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          name="username"
          type="text"
          required
          placeholder="Username"
        />
      </div>
      <div>
        <label for="email-address">Email address</label>
        <input
          id="email-address"
          v-model="email"
          name="email"
          type="email"
          required
          placeholder="email@address.com"
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
          placeholder="Password"
        />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
    <nuxt-link to="/login">Go to Login</nuxt-link>
  </div>
</template>

<script>
import userbase from 'userbase-js'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleRegister() {
      userbase
        .signUp({
          username: this.username,
          password: this.password,
          email: this.email,
        })
        .then((user) => {
          alert('Account created!')
          this.$router.push({
            path: '/',
          })
        })
        .catch((e) => alert(e))
    },
  },
}
</script>
