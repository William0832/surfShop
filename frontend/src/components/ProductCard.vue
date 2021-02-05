<template lang="pug">
.card
  router-link(:to='{ name: "skate", params: { id: cardItem.id } }')
    img.card-img-top(:src='cardItem.img', alt='skate img')
  .card-body
    p.card-text {{ cardItem.info }}
    p.card-text $ {{ cardItem.price }}
    button.btn.btn-outline-dark(type='button', @click.prevent.stop='addToCart')
      i.fas.fa-cart-plus
</template>

<script>
export default {
  props: {
    cardItem: {
      id: null,
      info: '',
      price: 0,
      img: ''
    }
  },
  methods: {
    addToCart (e) {
      // console.log('emit done - child')
      this.$emit('add-to-cart', this.cardItem.id)
    }
  }
}
</script>
