<template lang="pug">
.bg-secondary.position-relative.overflow-hidden(style='max-height: 350px')
  ol.carousel-indicators
    li(
      v-for='item in list',
      :key='item.id',
      :class='{ active: item.id === activeId }',
      @click='indicatorHandler(item.id)'
    )
  .carousel-inner
    .carousel-item(
      v-for='item in list',
      :key='item.id',
      :class='{ active: item.id === activeId }'
    )
      img.d-block.w-100(:src='item.img')
  a.carousel-control-prev(@click='prevHandler()', role='button')
    span.carousel-control-prev-icon
    span.visually-hidden Previous
  a.carousel-control-next(@click='nextHandler()', role='button')
    span.carousel-control-next-icon
    span.visually-hidden Next
</template>

<script>
export default {
  data () {
    return {
      activeId: 0,
      list: [
        {
          id: 0,
          img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/img/82/04-01.png'
        },
        {
          id: 1,
          img: 'https://www.worldsurfaris.com/sites/default/files/styles/slideshow-xlarge/public/IMG_3082.JPG?itok=Bk51s5vm'
        },
        {
          id: 2,
          img: 'https://www.worldsurfaris.com/sites/default/files/styles/slideshow_image_wide/public/feature_articles/Surf-Camp-Surfing-Holidays-Sri-Lanka-Longboard-Waves-Sea-Beach.jpg?itok=j59_odu1'
        }
      ]
    }
  },
  methods: {
    nextHandler () {
      // console.log('next', this.activeId)
      this.activeId++
      this.activeId = this.activeId % 3
    },
    prevHandler () {
      // console.log('prev', this.activeId)
      this.activeId--
      if (this.activeId < 0) {
        this.activeId = 2
      }
    },
    indicatorHandler (id) {
      this.activeId = id
    }
  }
}
</script>
