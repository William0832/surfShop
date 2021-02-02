<template lang="pug">
.container.py-5
  form.w-100(@submit.prevent.stop='handleSubmit')
    .text-center.mb-4
      p.h3.mb-3.font-weight-normal Sign in

    .form-label-group.mb-2
      label(for='email') Email
      input#email.form-control(
        v-model='email',
        name='email',
        type='email',
        placeholder='email',
        autocomplete='username',
        required,
        autofocus
      )
    .form-label-group.mb-3
      label(for='password') Password
      input#password.form-control(
        v-model='password',
        name='password',
        type='password',
        placeholder='password',
        autocomplete='current-password',
        required
      )

    button.btn.btn-lg.btn-primary.btn-block.mb-3(type='submit') Submit

    .text-center.mb-3
      p
        router-link(to='/signup') Signup
      p.mt-5.mb-3.text-muted
      | &copy; 2020-2021
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      })
      console.log('data', data)
    }
  }
}
</script>
