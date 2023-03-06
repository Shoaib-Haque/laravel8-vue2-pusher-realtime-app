<template>
  <div class="login-form-container">
    <a-form ref="form" :model="form" :rules="rules" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="username" prop="username">
        <a-input v-model="form.username" placeholder="Username" />
      </a-form-item>
      <a-form-item label="Password" prop="password">
        <a-input v-model="form.password" type="password" placeholder="Password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { Form, Input, Button, message } from 'ant-design-vue';
import axios from 'axios';

export default {
  name: 'LoginForm',
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
      rules: {
        username: [{ required: true, message: 'Please enter your username address' }, { type: 'username', message: 'Please enter a valid username address' }],
        password: [{ required: true, message: 'Please enter your password' }],
      },
    };
  },
  methods: {
    handleSubmit() {
    //   this.$refs.form[0].validate((valid) => {
    //     if (valid) {
          axios.post(process.env.MIX_API_URL + 'auth/admin/login', this.form)
            .then((response) => {
              //message.success(response.data.message);
              console.log(response.data);
            })
            .catch((error) => {
              //message.error(error.response.data.message);
              console.log(error.response.data.message);
            });
        // } else {
        //   message.error('Please correct the errors in the form');
        // }
      //});
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
