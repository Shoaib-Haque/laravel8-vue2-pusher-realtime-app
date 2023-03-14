<template>
    <a-row type="flex" justify="center">
        <a-col :xs="{ span: 20 }" :sm="{ span: 18 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <a-card title="Registration">
                <a-alert
                    v-if="error !== undefined && error !== ''"
                    :message="error"
                    type="error"
                />
                <a-alert
                    v-if="success !== undefined && success !== ''"
                    :message="success"
                    type="success"
                />
                <a-form
                    id="components-form-demo-normal-registration"
                    :form="form"
                    class="registration-form"
                    @submit="handleSubmit"
                >
                    <a-form-item
                    :class="errors.username ? 'has-error' : ''"
                    :style="errors.username ? { 'margin-bottom': '5px' } : ''">
                        <a-input
                            :maxLength="30"
                            v-decorator="[
                            'username',
                            {
                              rules: [
                                    { validator: validateUsername },
                                ],
                                validateTrigger: 'onSubmit'
                            },
                            ]"
                            placeholder="Username"
                        >
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                        <div v-if="errors.username">
                            <div class="ant-form-explain">{{ errors.username[0] }}</div>
                        </div>
                    </a-form-item>
                    <a-form-item :class="errors.email ? 'has-error' : ''"
                    :style="errors.email ? { 'margin-bottom': '5px' } : ''">
                        <a-input
                            :maxLength="255"
                            v-decorator="[
                            'email',
                            {
                                rules: [
                                    { validator: validateEmail },
                                ],
                                validateTrigger: 'onSubmit'
                            },
                            ]"
                            placeholder="Email"
                        >
                            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                        <div v-if="errors.email">
                            <div class="ant-form-explain">{{ errors.email[0] }}</div>
                        </div>
                    </a-form-item>
                    <a-form-item :class="errors.password ? 'has-error' : ''"
                    :style="errors.password ? { 'margin-bottom': '5px' } : ''">
                        <a-input-password
                            :maxLength="20"
                            v-decorator="[
                            'password',
                            {
                                rules: [
                                    { validator: validatePassword },
                                ],
                                validateTrigger: 'onSubmit'
                            },
                            ]"
                            type="password"
                            placeholder="Password"
                        >
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input-password>
                        <div v-if="errors.password">
                            <div class="ant-form-explain">{{ errors.password[0] }}</div>
                        </div>
                    </a-form-item>
                    <a-form-item :class="errors.confirm_password ? 'has-error' : ''"
                    :style="errors.confirm_password ? { 'margin-bottom': '5px' } : ''">
                        <a-input-password
                            :maxLength="20"
                            v-decorator="[
                            'confirm_password',
                            { rules: [
                                { validator: validateConfirmPassword },
                            ],
                            validateTrigger: 'onSubmit'
                            },
                            ]"
                            type="password"
                            placeholder="Confirm Password"
                        >
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input-password>
                        <div v-if="errors.confirm_password">
                            <div class="ant-form-explain">{{ errors.confirm_password[0] }}</div>
                        </div>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" class="registration-form-button">
                            Submit
                        </a-button>
                        Already Registered?
                        <a href="login">
                            Login
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
  name: 'Registration',
  data() {
    return {
      error: '',
      success: '',
      errors: {},
      isConfirmPasswordRequired: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'Registration' });
  },
  created () {
    document.title = "Registration"
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.error = "";
      this.form.getFieldValue('username') !== undefined ? this.form.setFieldsValue({'username': this.form.getFieldValue('username').trim()}) : null;
      this.form.getFieldValue('email') !== undefined ? this.form.setFieldsValue({'email': this.form.getFieldValue('email').trim()}) : null;
      this.form.validateFields((err, values) => {
        if (!err) {
            const user_auth_data = { username: this.form.getFieldValue('username'), email: this.form.getFieldValue('email'), password: this.form.getFieldValue('password'), confirm_password: this.form.getFieldValue('confirm_password') };
            axios.post(process.env.MIX_API_URL + 'auth/user', user_auth_data)
            .then(response => {
                this.success = response.data.message;
            })
            .catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                } else if (error.response.status === 500) {
                    this.error = error.response.data.message;
                }
            });
        }
      });
    },
    validateUsername(rule, value, callback) {
      if(value === undefined || value === '') {
        callback(new Error('Username is required'))
      } else if(value.length < 2) {
        callback(new Error('Username must be at least 2 characters'))
      } else if(value.length > 30) {
        callback(new Error('Username cannot be longer than 30 characters'))
      } else if (!(/^[A-Z].*$/.test(value))) {
        callback(new Error('Username starts with capital letter'))
      } else if (!(/^[a-zA-Z0-9\s.]*$/.test(value))) {
        callback(new Error('Username can contain letters, digits, space or dot'))
      } else {
        callback()
      }
    },
    validateEmail(rule, value, callback) {
      if(value === undefined || value === '') {
        callback(new Error('Email is required'))
      } else if(value.length > 255) {
        callback(new Error('Email cannot be longer than 255 characters'))
      } else if(!(/^(?!\.)[a-zA-Z0-9._%+-]+@(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\d{1,3})$/
.test(value))) {
        callback(new Error('Email format is not correct'))
      } else {
        callback()
      }
    },
    validatePassword(rule, value, callback) {
      if(value === undefined || value === '') {
        callback(new Error('Password is required'))
      } else if(value.length < 6) {
        callback(new Error('Password must be at least 6 characters'))
      } else if(value.length > 20) {
        callback(new Error('Password cannot be longer than 20 characters'))
      } else {
        callback()
      }
    },
    validateConfirmPassword(rule, value, callback) {
      if(this.form.getFieldValue('password') === undefined || this.form.getFieldValue('password') === ''){
        callback()
      } else if(value === undefined || value === '') {
        callback(new Error('Confirm Password is required'))
      } else if (value !== this.form.getFieldValue('password')) {
        callback(new Error('Confirm password must match password'))
      } else {
        callback()
      }
    },
  },
};
</script>
<style>
#components-form-demo-normal-registration .registration-form-forgot {
  float: right;
}
#components-form-demo-normal-registration .registration-form-button {
  width: 100%;
}
</style>
