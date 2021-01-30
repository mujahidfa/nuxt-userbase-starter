<template>
  <div>
    <div v-if="isResetEmailSent">
      <p>Reset email for {{ username }} is sent!</p>
    </div>
    <div v-else>
      <h1>Forget your password?</h1>
      <p>We will email you with a temporary password.</p>
      <form method="POST" @submit.prevent="handleForgotPassword">
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
        <button type="submit">Reset password</button>
      </form>
    </div>
  </div>
</template>

<script>
import userbase from 'userbase-js'

export default {
  data() {
    return {
      username: '',
      isResetEmailSent: false,
    }
  },
  methods: {
    handleForgotPassword() {
      userbase
        .forgotPassword({
          username: this.username,
        })
        .then(() => {
          // email with temporary password sent
          this.isResetEmailSent = true
        })
        .catch((e) => alert(e))
    },
  },
}
</script>
