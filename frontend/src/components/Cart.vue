<template lang="pug">
.py-3
  h1 Cart ({{ cart.length }})
    i.fas.fa-shopping-cart
  h3 $ {{ amount }}
  .w-100.crad-group
    .card.mb-3(v-for='item in cart', :key='item.id')
      .row.no-gutters
        .col-lg-4
          img.card-img(:src='item.img')
        .col-lg-8
          .card-body
            h6.card-title {{ item.info }}
            h5.card-text.text-left.mb-3 $: {{ item.price }}
            .row
              .col-12.col-md-9.p-0.px-1
                .input-group.mb-3
                  .input-group-prepend
                    button.btn.btn-outline-secondary(
                      type='button',
                      @click.prevent.stop='minousOne',
                      :data-id='item.id'
                    ) -
                  input.form-control.text-center(
                    v-model.num='item.quantity',
                    type='number',
                    min=1
                  )
                  .input-group-append
                    button.btn.btn-outline-secondary(
                      type='button',
                      @click.prevent.stop='addOne',
                      :data-id='item.id'
                    ) +
              .col-12.col-md-2.px-1
                button.btn.btn-secondary(
                  :data-id='item.id',
                  type='button',
                  @click.prevent.stop='removeItem'
                )
                  i.fas.fa-trash
</template>

<script>

export default {
  props: {
    addItem: null
  },
  data () {
    return {
      cart: []
    }
  },
  created () {
    this.loadData()
  },
  watch: {
    addItem (nv, ov) {
      if (!nv) return
      if (this.cart.some(e => e.id === nv.id)) {
        // console.log('already has')
        return
      }
      this.cart.push({
        ...nv,
        quantity: 1
      })
      this.saveData()
    }
  },
  computed: {
    amount () {
      return this.cart.reduce((sum, e) => {
        sum += +e.quantity * +e.price
        return sum
      }, 0)
    }
  },
  methods: {
    loadData () {
      const result = localStorage.getItem('myCart')
      if (!result) {
        localStorage.setItem('myCart', '[]')
        return
      }
      this.cart = JSON.parse(result)
    },
    saveData () {
      localStorage.setItem('myCart', JSON.stringify(this.cart))
      // console.log('set in stroage')
    },
    addOne (e) {
      const { id } = e.target.dataset
      const target = this.cart.find(e => e.id === +id)
      if (target) target.quantity++
      this.saveData()
    },
    minousOne (e) {
      const { id } = e.target.dataset
      const target = this.cart.find(e => e.id === +id)
      target.quantity--
      if (target.quantity < 1) {
        target.quantity = 1
      }
      this.saveData()
    },
    removeItem (e) {
      const { id } = e.target.closest('button').dataset
      // console.log(e.target)
      this.cart = this.cart.filter(e => e.id !== +id)
      this.saveData()
    }
  }
}
</script>
