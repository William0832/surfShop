<template lang='pug'>
.container-fluid.py-2.px-5
  h1 Skate

  .row
    .col.col-sm-9.col-lg-8
      .row.row-cols-2.row-cols-lg-4
        .col.mb-4(v-for='item in pageItems', :key='item.id')
          ProductCard(:cardItem='item', @add-to-cart='addToCart')

      .row.d-flex.justify-content-center
        Pages(:items='skateboards', @get-page-items='setPageItem')

    .d-none.d-sm-block.col-sm-3.col-lg-4.border-dark.border.rounded.p-0
      Chat(:addItem='addItem')
</template>

<script>
import Chat from '../components/Cart'
import ProductCard from '../components/ProductCard.vue'
import Pages from '../components/Pagination'

const dummyData = {
  skateboards: [
    {
      id: 0,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/379/m/mczh-tw2000x2000_small13068.png',
      info: 'Penny Skateboards - BLACK OUT 22',
      price: 3800
    },
    {
      id: 1,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/777/m/mczh-tw2000x2000_small13748.jpg',
      info: 'Penny Skateboards - BRIGHT LIGHT 22',
      price: 3800
    },
    {
      id: 2,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/415/m/mczh-tw2000x2000_small13753.jpg',
      info: 'Penny Skateboards - STONE FOREST 22',
      price: 3800
    },
    {
      id: 3,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/667/m/mczh-tw2000x2000_small13749.jpg',
      info: 'Penny Skateboards - BURNT OLIVE 22',
      price: 3800
    },
    {
      id: 4,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/841/m/mczh-tw2000x2000_small13751.jpg',
      info: 'Penny Skateboards - HIGH VIBE 22',
      price: 3800
    },
    {
      id: 5,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/136/m/mczh-tw2000x2000_small13752.jpg',
      info: 'Penny Skateboards - OCEAN MIST 22',
      price: 3800
    },
    {
      id: 6,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/149/m/mczh-tw2000x2000_small13750.jpg',
      info: 'Penny Skateboards - CACTUS WANDERLUST 22',
      price: 3800
    },
    {
      id: 7,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/582/m/mczh-tw2000x2000_small13069.png',
      info: 'Penny Skateboards - RISE 22',
      price: 4200
    },
    {
      id: 8,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/609/m/mczh-tw2000x2000_small13073.png',
      info: 'Penny Skateboards - CHEVRON 22',
      price: 4200
    },
    {
      id: 9,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/396/m/mczh-tw2000x2000_small13766.jpg',
      info: 'Penny Skateboards - SWIRL 22',
      price: 4200
    },
    {
      id: 10,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/757/m/mczh-tw2000x2000_small13070.png',
      info: 'Penny Skateboards - FLAME 22',
      price: 4200
    },
    {
      id: 11,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/147/m/mczh-tw2000x2000_small13754.jpg',
      info: 'Penny Skateboards - POSTCARD COASTAL BLUE 22',
      price: 4200
    },
    {
      id: 12,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/550/m/mczh-tw2000x2000_small14340.jpg',
      info: 'Penny Skateboards - BRIGHT LIGHT 27',
      price: 4600
    },
    {
      id: 13,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/11/m/mczh-tw2000x2000_small14344.jpg',
      info: 'Penny Skateboards - STONE FOREST 27',
      price: 4600
    },
    {
      id: 14,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/44/m/mczh-tw2000x2000_small14341.jpg',
      info: 'Penny Skateboards - BURNT OLIVE 27',
      price: 4600
    },
    {
      id: 15,
      img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/333/m/mczh-tw2000x2000_small14343.jpg',
      info: 'Penny Skateboards - HIGH VIBE 27',
      price: 4600
    }
  ]
}
export default {
  data () {
    return {
      skateboards: [],
      addItem: null,
      pageItems: []
    }
  },
  created () {
    this.fetchData()
  },
  components: { Chat, ProductCard, Pages },
  methods: {
    fetchData () {
      this.skateboards = dummyData.skateboards
    },
    addToCart (id) {
      this.addItem = this.skateboards[id]
    },
    setPageItem (pageItems) {
      this.pageItems = pageItems
    }
  }
}
</script>
