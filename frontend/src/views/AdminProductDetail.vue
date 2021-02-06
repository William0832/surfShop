<template lang='pug'>
.row
  .col-12.my-4.text-left
    h2(v-if='$route.params.id >= 0') Edit Product [ Id = {{ $route.params.id }} ]
    h2(v-else) Add New Product
  form.col-12.mb-3(@submit.stop.prevent='submitHandler')
    .row
      .col-12.col-lg-8
        .form-group
          label(for='name') Name
          input#name.form-control(
            name='name',
            v-model='item.name',
            placeholder='name',
            type='text',
            required
          )
        .form-group
          label(for='type') Type
          input#type.form-control(
            name='type',
            v-model='item.type',
            placeholder='type',
            type='text',
            required
          )
        .form-group
          label(for='name') Price
          input#name.form-control(
            name='price',
            type='number',
            min=1,
            v-model='item.price',
            placeholder='price',
            required
          )
        .form-group
          label(for='name') Quantity
          input#name.form-control(
            name='quantity',
            min=0,
            type='number',
            v-model='item.quantity',
            placeholder='quantity',
            required
          )
        .form-group
          label(for='description') Description
          textarea#description.form-control(
            name='description',
            rows='2',
            v-model='item.info'
          )
      .col-12.col-lg-4
        .form-group
          label(for='img-file', accept='image/*') Image
          img.d-block.img-thumbnail.mb-3(
            v-if='item.img',
            :src='item.img',
            width='200',
            height='200'
          )
          input#ig-file.form-control-file(
            name='img',
            type='file',
            @change='fileChangeHandler'
          )
    button.btn.btn-dark.mr-3(type='submit') Submit
    button.btn.btn-danger.mr-3(type='button', @click.prevnet.stop='removeItem') Remove
    button.btn.btn-outline-secondary(
      type='button',
      @click.prevnet.stop='$router.go(-1)'
    ) Back
</template>
<script>
const dummyData = {
  item: {
    name: 'Black out',
    type: 'Skate',
    price: 3000,
    quantity: 1,
    info: '一張好滑板',
    img: 'http://www.tigersurfshop.com.tw/ezfiles/741/1741/plugin/ec/pictures/379/m/mczh-tw2000x2000_small13068.png'
  }
}
export default {
  data () {
    return {
      item: {
        name: '',
        type: '',
        price: 0,
        quantity: 0,
        info: '',
        img: ''
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      // get data from API
      const { id } = this.$route.params
      // console.log('id', id)
      if (id === undefined) {
        return null
      } else if (id < 0) {
        this.$router.push({ name: 'not-found' })
        return null
      }
      this.item = { ...dummyData.item }
    },
    fileChangeHandler (e) {
      const { files } = e.target
      this.item.img = files.length === 0 ? '' : window.URL.createObjectURL(files[0])
    },
    submitHandler (e) {
      const form = e.target
      const formData = new FormData(form)
      console.log(...formData)
      // TODOS: Call API to edit item
      console.log('TODOS: Call API to create/edit item')
      this.$router.push('/admin')
    },
    removeItem () {
      // TODOS: Call API to delete item
      console.log('TODOS: Call API to delete item')
      this.$router.push('/admin')
    }
  }
}
</script>
