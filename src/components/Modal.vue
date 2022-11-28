<template>
    <div class="modal-window" v-if="show" @click.self="closeModal">
        <Title title="Заказать звонок" />
        <FormComponent @submit.prevent="closeModal" />
    </div>
</template>

<script>
import Title from '@/components/Title'
import FormComponent from '@/components/forms-components/FormComponent'

export default {
    components: {
        Title,
        FormComponent
    },
    data: function () {
        return {
            show: false,
        }
    },
    methods: {
    closeModal: function () {
        this.show = false
    }
  }
}
</script>