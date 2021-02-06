<template lang="pug">
.row
  .col-12.text-left.mb-3
    router-link.btn.btn-outline-secondary(:to='{ name: "admin-product-new" }') Add new Product
  .col
    table.table
      thead.thead-dark
        tr
          th id
          th(scope='col') img
          th(scope='col') name
          th(scope='col') type
          th(scope='col') price
          th(scope='col') quantity
          th(scope='col') action
      tbody
        tr(v-for='item in products', :key='item.id')
          th(scope='row') {{ item.id }}
          td
            img.img-thumbnail(
              :src='item.img',
              :alt='item.info',
              width='150',
              height='150'
            )
          td {{ item.info }}
          td {{ item.type }}
          td {{ item.price }}
          td {{ item.quantity }}
          td
            .btn-group
              router-link.btn.btn-outline-secondary(
                :to='{ name: "admin-product-edit", params: { id: item.id } }'
              ) Edit
</template>
<script>
const dummyData = {
  products: [
    {
      id: 0,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/379/m/mczh-tw2000x2000_small13068.png',
      info: 'Penny Skateboards - BLACK OUT 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 1,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/777/m/mczh-tw2000x2000_small13748.jpg',
      info: 'Penny Skateboards - BRIGHT LIGHT 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 2,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/415/m/mczh-tw2000x2000_small13753.jpg',
      info: 'Penny Skateboards - STONE FOREST 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 3,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/667/m/mczh-tw2000x2000_small13749.jpg',
      info: 'Penny Skateboards - BURNT OLIVE 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 4,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/841/m/mczh-tw2000x2000_small13751.jpg',
      info: 'Penny Skateboards - HIGH VIBE 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 5,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/136/m/mczh-tw2000x2000_small13752.jpg',
      info: 'Penny Skateboards - OCEAN MIST 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 6,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/149/m/mczh-tw2000x2000_small13750.jpg',
      info: 'Penny Skateboards - CACTUS WANDERLUST 22',
      type: 'skate',
      brand: 'penny',
      price: 3800,
      quantity: 2
    },
    {
      id: 7,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/582/m/mczh-tw2000x2000_small13069.png',
      info: 'Penny Skateboards - RISE 22',
      type: 'skate',
      brand: 'penny',
      price: 4200,
      quantity: 2
    },
    {
      id: 8,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/609/m/mczh-tw2000x2000_small13073.png',
      info: 'Penny Skateboards - CHEVRON 22',
      type: 'skate',
      brand: 'penny',
      price: 4200,
      quantity: 2
    },
    {
      id: 9,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/396/m/mczh-tw2000x2000_small13766.jpg',
      info: 'Penny Skateboards - SWIRL 22',
      type: 'skate',
      brand: 'penny',
      price: 4200,
      quantity: 2
    },
    {
      id: 10,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/757/m/mczh-tw2000x2000_small13070.png',
      info: 'Penny Skateboards - FLAME 22',
      type: 'skate',
      brand: 'penny',
      price: 4200,
      quantity: 2
    },
    {
      id: 11,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/147/m/mczh-tw2000x2000_small13754.jpg',
      info: 'Penny Skateboards - POSTCARD COASTAL BLUE 22',
      type: 'skate',
      brand: 'penny',
      price: 4200,
      quantity: 2
    },
    {
      id: 12,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/550/m/mczh-tw2000x2000_small14340.jpg',
      info: 'Penny Skateboards - BRIGHT LIGHT 27',
      type: 'skate',
      brand: 'penny',
      price: 4600,
      quantity: 2
    },
    {
      id: 13,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/11/m/mczh-tw2000x2000_small14344.jpg',
      info: 'Penny Skateboards - STONE FOREST 27',
      type: 'skate',
      brand: 'penny',
      price: 4600,
      quantity: 2
    },
    {
      id: 14,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/44/m/mczh-tw2000x2000_small14341.jpg',
      info: 'Penny Skateboards - BURNT OLIVE 27',
      type: 'skate',
      brand: 'penny',
      price: 4600,
      quantity: 2
    },
    {
      id: 15,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/333/m/mczh-tw2000x2000_small14343.jpg',
      info: 'Penny Skateboards - HIGH VIBE 27',
      type: 'skate',
      brand: 'penny',
      price: 4600,
      quantity: 2
    }
  ]
}

export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.products = [...dummyData.products]
    }
  }
}
</script>
