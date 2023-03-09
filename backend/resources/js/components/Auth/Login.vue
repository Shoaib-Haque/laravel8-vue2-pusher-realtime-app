<template>
    <a-row type="flex" justify="center">
        <a-col :xs="{ span: 20 }" :sm="{ span: 18 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <a-card title="Login">
                <a-alert
                    v-if="error !== undefined && error !== ''"
                    :message="error"
                    type="error"
                />
                <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit"
                >
                    <a-form-item>
                        <a-input
                            v-decorator="[
                            'username',
                            { rules: [{ required: true, message: 'Please input your username!' }] },
                            ]"
                            placeholder="Username"
                        >
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input-password
                            v-decorator="[
                            'password',
                            { rules: [{ required: true, message: 'Please input your Password!' }] },
                            ]"
                            type="password"
                            placeholder="Password"
                        >
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input-password>
                    </a-form-item>
                    <a-form-item>
                        <a class="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <a-button type="primary" html-type="submit" class="login-form-button">
                            Log in
                        </a-button>
                        Or
                        <a href="registration">
                            register now!
                        </a>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import axios from 'axios';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'Login' });
  },
  created () {
    document.title = "Login"
  },
  name: 'Login',
  data() {
    return {
      error: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            this.error = "";
            if(this.isEmail(this.form.getFieldValue('username'))) {
                if(this.validateEmail(this.form.getFieldValue('username'))) {
                    const user_auth_data = { email: this.form.getFieldValue('username'), password: this.form.getFieldValue('password') };
                    axios.post(process.env.MIX_API_URL + 'auth/user/login', user_auth_data)
                        .then(response => {
                            const token = response.data.access_token;
                            localStorage.setItem('token', token);
                            //console.log(localStorage.getItem('token'));
                            this.$router.push('/user/dashboard');
                        })
                        .catch(error => {
                            this.error = error.response.data.message;
                        });
                } else {
                    this.error = "Invalid Login!";
                }
            } else {
                const admin_auth_data = { username: this.form.getFieldValue('username'), password: this.form.getFieldValue('password') };
                axios.post(process.env.MIX_API_URL + 'auth/admin/login', admin_auth_data)
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('token', token);
                    this.$router.push('/admin/dashboard');
                })
                .catch(error => {
                    this.error = error.response.data.message;
                });
            }
        }
      });
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
<style>
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
