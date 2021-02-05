<template lang="pug">
.row
  .col-md-12.mb-3
    h1 {{ product.name }}
    p.badge.badge-secondary.mr-2 {{ product.type }}
    p.badge.badge-danger {{ product.brand }}
  .col-lg-4
    img.img-responsive.center-block.mb-2(
      style='width: 250px',
      :src='product.img'
    )
    .info-wrap
      ul.list-unstyled
        li
          strong.mr-1 Price:
          | {{ product.price }}
        li
          strong.mr-1 Size:
          | {{ product.size }}
  .col-lg-8
    p {{ product.info }}
    button.btn.btn-outline-dark.mr-2
      i.fas.fa-cart-plus
    button.btn.btn-outline-secondary.mr-2(@click.prevent.stop='$router.go(-1)') Back
</template>
<script>
const dummyData = {
  product: {
    id: 0,
    type: 'Skate',
    img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/379/m/mczh-tw2000x2000_small13068.png',
    name: 'BLACK OUT',
    brand: 'Penny',
    info: 'Penny Skateboards - BLACK OUT 22',
    size: '22"',
    price: 3800,
    inventory: 3
  }
}
export default {
  data () {
    return {
      product: {
        id: null,
        type: '',
        brand: '',
        name: '',
        img: '',
        info: '',
        price: 0,
        inventory: 0,
        size: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    // console.log(id)
    this.fetchData(id)
  },
  methods: {
    fetchData (id) {
      this.product = {
        ...dummyData.product
      }
    }
  }
}
</script>
