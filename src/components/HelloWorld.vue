<template>
  <div class="hello">
      <FormButton @click="showModal" class="bg-blue-500 hover:bg-blue-400" order_title="Заказать в Москву" />
      <FormButton class="bg-teal-600 hover:bg-teal-500" order_title="Заказать в Санкт-Петербург" />
      <br>
      <br>
      <Modal ref="modal" />
  </div>
</template>

<script>
import FormButton from '@/components/forms-components/FormButton'
import Modal from '@/components/Modal'

export default {
  name: 'HelloWorld',
  props: {},
  components: {
    FormButton,
    Modal
  },
  methods: {
    showModal: function () {
        this.$refs.modal.show = true
    }
  }
}
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
