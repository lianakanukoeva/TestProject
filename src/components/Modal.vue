<template>
    <div class="modal__wrapper absolute inset-0 bg-gray-500/75 flex justify-center items-center" v-if="show==true">
        <div class="modal-window max-w-3xl w-3/5 bg-white rounded-md p-5">
            <h2 class="text-gray-900 text-2xl">
                Заказать звонок
            </h2>
            <FormComponent @submit.prevent="show==true" />
        </div>
    </div>
</template>

<script>
import FormComponent from '@/components/forms-components/FormComponent'

export default {
    components: {
        FormComponent
    },
    data: function () {
        return {
            show: false
        }
    }
}
</script>