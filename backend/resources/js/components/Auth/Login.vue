<template>
  <div class="login-form-container">
    <div style="width:300px" class="ant-card ant-card-bordered css-1me4733">
        <div class="ant-card-head">
            <div class="ant-card-head-wrapper">
                <div class="ant-card-head-title">Login</div>
            </div>
        </div>
        <div class="ant-card-body">
            <a-form ref="form" :model="form" :rules="rules" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-form-item label="Username" prop="username">
                    <a-input v-model="form.username" placeholder="Username" />
                </a-form-item>
                <a-form-item label="Password" prop="password" :colon="false">
                    <a-input v-model="form.password" type="password" placeholder="Password" />
                </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
    </div>
  </div>
</template>

<script>
import { Form, Input, Button, message } from 'ant-design-vue';
import axios from 'axios';

export default {
  name: 'Login',
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      error: '',
      rules: {
        username: [{ required: true, message: 'Please enter your username address' }, { type: 'username', message: 'Please enter a valid username address' }],
        password: [{ required: true, message: 'Please enter your password' }],
      },
    };
  },
  methods: {
    handleSubmit() {
        if(this.isEmail(this.form.username)) {
            if(this.validateEmail(this.form.username)) {
                const user_auth_data = { email: this.form.username, password: this.form.password };
                axios.post(process.env.MIX_API_URL + 'auth/user/login', user_auth_data)
                    .then(response => {
                        const token = response.data.access_token;
                        localStorage.setItem('token', token);
                        console.log(localStorage.getItem('token'));
                        //this.$router.push('/dashboard');
                    })
                    .catch(error => {
                        console.log(error.response.data.message);
                        //this.error = error.response.data.message;
                    });
            } else {
                console.log("Invalid Login!");
            }
        } else {
            const admin_auth_data = { username: this.form.username, password: this.form.password };
            axios.post(process.env.MIX_API_URL + 'auth/admin/login', admin_auth_data)
            .then(response => {
                const token = response.data.access_token;
                localStorage.setItem('token', token);
                console.log(localStorage.getItem('token'));
                //this.$router.push('/dashboard');
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
        }
    },
    validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    isEmail(email) {
        return (email.indexOf('@') > -1);
    },
  },
};
</script>

<style scoped>
.login-form-container {
  width: 400px;
  margin: 0 auto;
}
</style>
