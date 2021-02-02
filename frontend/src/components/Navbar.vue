<template lang="pug">
nav.navbar.navbar-expand-lg.fixed-to.navbar-dark.bg-dark
  router-link.navbar-brand(to='/') Surf Shop

  button.navbar-toggler(
    type='button',
    data-toggle='collapse',
    data-target='#navbarSupportedContent',
    aria-controls='navbarSupportedContent',
    aria-expanded='false',
    aria-label='Toggle navigation'
  )
    span.navbar-toggler-icon

  #navbarSupportedContent.navbar-collapse.collapse
    .ml-auto.d-flex.align-item-center
      router-link.text-white.mr-3.mt-1(
        to='#',
        v-if='currentUser.role === "admin"'
      ) Admin
      router-link.text-white.mr-3.mt-1(to='#') Cart
      template(v-if='isAuthenticated')
        router-link.text-white.mr-3.mt-1(to='#') Order
        button.btn.btn-sm.btn-outline-success.my-sm-0(type='button') Logout
      router-link.btn.btn-sm.btn-outline-success.my-sm-0(v-else, to='/signin') Login
</template>
<script>
const dummyData = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@test.com',
    role: 'admin'
  },
  isAuthenticated: true
}
export default {
  data () {
    return {
      currentUser: {
        id: null,
        name: '',
        email: '',
        role: ''
      },
      isAuthenticated: false
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.currentUser = {
        ...this.currentUser,
        ...dummyData.currentUser
      }
      this.isAuthenticated = dummyData.isAuthenticated
    }
  }
}
</script>
