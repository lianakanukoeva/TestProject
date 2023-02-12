<template>
  <div class="py-4 wrapper" v-for="(btn, index) in btn_name" :key="index">
      <FormButton class="ml-4" @click="showModal" :class="btn.btn_class" :order_title="btn.name" />
  </div>
  <Modal ref="modal" @click.self="closeModal" />
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
    },
    closeModal: function () {
        this.$refs.modal.show = false
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  display: inline-block;
}
</style>
