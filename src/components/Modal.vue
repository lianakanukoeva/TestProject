<template>
    <div class="modal__wrapper absolute inset-0 bg-gray-500/75 flex justify-center items-center" v-if="show==true">
        <div class="modal-window max-w-3xl w-3/5 bg-white rounded-md p-5">
            <Title title="Заказать звонок" />
            <FormComponent @submit.prevent="show==true" />
        </div>
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
            show: false
        }
    }
}
</script>