<template>
  <div class="hello" v-for="(btn, index) in btn_name" :key="index">
      <FormButton @click="showModal" :class="btn.btn_class" :order_title="btn.name" />
      <br>
      <br>
  </div>
  <Modal ref="modal" />
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
  data(){
    return {
      btn_name: [{
          name: "Заказать в Москву", 
          btn_class: "bg-blue-500 hover:bg-blue-400"
        },
        {
          name: "Заказать в Санкт-Петербург",
          btn_class: "bg-teal-600 hover:bg-teal-500"
        }
      ]
    }
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
.hello {
  display: inline-block;
}
</style>
