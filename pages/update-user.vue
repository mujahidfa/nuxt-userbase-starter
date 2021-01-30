<template>
  <div>
    <h1>Update user info</h1>

    <section>
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
      <button @click.prevent="handleUpdateUserInfo">Update user info</button>
    </section>

    <section>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="currentPassword"
          name="password"
          type="password"
          required
          placeholder="Password"
        />
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          v-model="newPassword"
          name="password"
          type="password"
          required
          placeholder="Confirm password"
        />
      </div>
      <button @click.prevent="handleUpdatePassword">Update password</button>
    </section>
    <nuxt-link to="/">Go home</nuxt-link>
  </div>
</template>

<script>
import userbase from 'userbase-js'

export default {
  async asyncData({ $config }) {
    const {
      user: { username, email },
    } = await userbase.init({
      appId: $config.userbaseAppId,
    })

    return {
      username,
      email,
    }
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
    }
  },
  methods: {
    handleUpdateUserInfo() {
      userbase
        .updateUser({
          username: this.username,
          email: this.email,
        })
        .then(() => {
          // user account updated
          alert('User info updated successfully!')
        })
        .catch((e) => alert(e))
    },
    handleUpdatePassword() {
      userbase
        .updateUser({
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        })
        .then(() => {
          // user account updated
          this.currentPassword = ''
          this.newPassword = ''
          alert('Password updated successfully!')
        })
        .catch((e) => alert(e))
    },
  },
}
</script>
