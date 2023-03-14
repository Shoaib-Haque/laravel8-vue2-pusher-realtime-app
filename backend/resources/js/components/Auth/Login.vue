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
                            'email',
                            { rules: [{ required: true, message: 'Please input your email!' }],
                                validateTrigger: 'onSubmit'
                            },
                            ]"
                            placeholder="Email"
                        >
                            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input-password
                            v-decorator="[
                            'password',
                            { rules: [{ required: true, message: 'Please input your Password!' }],
                                validateTrigger: 'onSubmit'
                            },
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
      this.error = "";
      this.form.validateFields((err, values) => {
        if (!err) {
            const auth_data = { email: this.form.getFieldValue('email'), password: this.form.getFieldValue('password') };
            if(this.form.getFieldValue('email').includes("@realtime.com")) {
                axios.post(process.env.MIX_API_URL + 'auth/admin/login', auth_data)
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('token', token);
                    this.$router.push('/admin/dashboard');
                })
                .catch(error => {
                    this.error = error.response.data.message;
                });
            } else {
                axios.post(process.env.MIX_API_URL + 'auth/user/login', auth_data)
                .then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('token', token);
                    //console.log(localStorage.getItem('token'));
                    this.$router.push('/user/dashboard');
                })
                .catch(error => {
                    this.error = error.response.data.message;
                });
            }
        }
      });
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
