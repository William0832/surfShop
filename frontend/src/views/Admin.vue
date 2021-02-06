<template lang="pug">
.container
  h1.mb-4 Admin
  .row.mb-4
    ul.list-group.list-group-horizontal
      li.list-group-item(:class='{ active: !IsOrdersPath }')
        router-link.text-dark(:to='{ name: "admin-products" }') Products
      li.list-group-item(:class='{ active: IsOrdersPath }')
        router-link.text-dark(:to='{ name: "admin-orders" }') Order
  router-view
</template>
<script>
export default {
  computed: {
    IsOrdersPath () {
      const path = this.$route.path
      return path === '/admin/orders'
    }
  }
}
</script>
