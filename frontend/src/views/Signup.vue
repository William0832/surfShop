<template lang="pug">
.container.py-5
  form.w-100.text-left(@submit.prevent.stop='handleSubmit')
    .text-center.mb-4
      p.h3 Sign UP

    .form-label-group.text-left.mb-2
      label(for='name') Name
      input#name.form-control(
        v-model='name',
        type='text',
        name='name',
        placeholder='Name',
        autofocus,
        required
      )

    .form-label-group.mb-2
      label(for='email') Email
      input#email.form-control(
        type='email',
        v-model='email',
        name='email',
        placeholder='Email',
        required
      )

    .form-label-group.mb-2
      label(for='password') Password
      input#password.form-control(
        type='password',
        v-model='password',
        name='password',
        placeholder='Password',
        required
      )

    .form-label-group.mb-4
      label(for='password2') Password Check
      input.form-control(
        type='password',
        v-model='password2',
        placeholder='Password Check',
        name='password2',
        required
      )

    button.btn.btn-primary.btn-lg.btn-block.mb-3(type='submit') Submit
    .text-center.mb-3
      p
        router-link(to='/signin') Signin
      p.mt-5.mb-3.text-muted
      | &copy; 2020-2021
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    handleSubmit () {
      const data = JSON.stringify({
        name: this.name,
        email: this.email,
        psw: this.password,
        pwd2: this.password2
      })
      console.log(data)
    }
  }
}
</script>
