<template lang="pug">
.row
  .col
    table.table(v-if='orders.length > 0')
      thead.thead-dark
        tr
          th(scope='col', v-for='colName in colNames') {{ colName }}
          th(scop='col') action
      tbody
        tr(v-for='order in orders', :key='order.id')
          th(scope='row') {{ order.id }}
          td {{ order.orderNumber }}
          td {{ order.amount }}
          td {{ order.paymentMethod }}
          td {{ order.paymentStatus }}
          td {{ order.shippingStatus }}
          td
            .btn-group
              router-link.btn.btn-outline-secondary(
                :to='{ name: "admin-order-edit", params: { id: order.id } }'
              ) Edit
</template>
<script>
const dummyData = {
  orders: [
    {
      id: 0,
      orderNumber: '#000000',
      amount: 10000,
      paymentMethod: 'ATM',
      paymentStatus: 'not paid',
      shippingStatus: 'not shipped'
    },
    {
      id: 1,
      orderNumber: '#000001',
      amount: 12000,
      paymentMethod: 'ATM',
      paymentStatus: 'not paid',
      shippingStatus: 'not shipped'
    },
    {
      id: 2,
      orderNumber: '#000002',
      amount: 5000,
      paymentMethod: 'ATM',
      paymentStatus: 'not paid',
      shippingStatus: 'not shipped'
    }
  ]
}

export default {
  data () {
    return {
      orders: []
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    colNames () {
      return this.orders.length > 0 ? Object.keys(this.orders[1]) : []
    }
  },
  methods: {
    fetchData () {
      this.orders = [...dummyData.orders]
    }
  }
}
</script>
