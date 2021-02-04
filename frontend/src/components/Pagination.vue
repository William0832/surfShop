<template lang="pug">
nav
  ul.pagination
    li.page-item(v-show='currentPage > 1')
      a.page-link(role='button', @click.prevent.stop='prevPage')
        span(aria-hidden='true') «

    li.page-item(v-for='page in pages')
      a.page-link(
        role='button',
        @click.prevent.stop='setCurrentPage(page)',
        :class='{ "text-dark": currentPage === page }'
      ) {{ page }}

    li.page-item(v-show='currentPage < maxPage')
      a.page-link(role='button', @click.prevent.stop='nextPage')
        span(aria-hidden='true') »
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      currentPage: 1,
      maxNum: 6
    }
  },
  computed: {
    maxPage () {
      if (!this.items) return 1
      return Math.ceil(this.items.length / this.maxNum)
    },
    pages () {
      return Array(this.maxPage).fill().map((e, i) => i + 1)
    }
  },
  created () {
    this.sendPageItems()
  },
  watch: {
    currentPage (nv, ov) {
      console.log('cp', nv)
      this.sendPageItems()
    }
  },
  methods: {
    setCurrentPage (page) {
      console.log('set current page:', page)
      this.currentPage = page
    },
    sendPageItems () {
      if (!this.currentPage) return []
      const cp = this.currentPage
      const start = (cp - 1) * this.maxNum
      let end = cp * this.maxNum - 1
      end = end > this.items.length - 1 ? this.items.length - 1 : end
      const result = this.items.slice(start, end + 1)
      // console.log('emit', result)
      this.$emit('get-page-items', result)
    },
    nextPage () {
      this.currentPage = this.currentPage + 1 > this.maxPage ? this.maxPage : this.currentPage + 1
      console.log('next', this.currentPage)
    },
    prevPage () {
      this.currentPage = this.currentPage - 1 <= 0 ? 1 : this.currentPage - 1
      console.log('prev', this.currentPage)
    }
  }
}
</script>
