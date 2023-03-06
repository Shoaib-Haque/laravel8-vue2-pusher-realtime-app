<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label>Username:</label>
        <input type="username" v-model="username" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      const admin_auth_data = { username: this.username, password: this.password };
      axios.post(process.env.MIX_API_URL + 'auth/admin/login', admin_auth_data)
        .then(response => {
          const token = response.data.access_token;
          localStorage.setItem('token', token);
          console.log(localStorage.getItem('token'));
          //this.$router.push('/dashboard');
        })
        .catch(error => {
        const user_auth_data = { email: this.username, password: this.password };
          axios.post(process.env.MIX_API_URL + 'auth/user/login', user_auth_data)
            .then(response => {
                const token = response.data.access_token;
                localStorage.setItem('token', token);
                console.log(localStorage.getItem('token'));
                //this.$router.push('/dashboard');
            })
            .catch(error => {
                console.log(error.response);
                this.error = error.response.data.message;
            });
        });
    },
  },
};
</script>
