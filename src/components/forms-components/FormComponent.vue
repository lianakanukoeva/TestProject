<template>
    <form action="" method="post">
        <FormInput
          v-for="(item, index) in field"
          :key="index" 
          :label="item.label"
          :plchold="item.plchold"
          :name="item.name"
          :type="item.type"
         />
        <FormButton class="bg-teal-600 hover:bg-teal-500" order_title="Отправить" />
    </form>
</template>

<script>
import FormButton from '@/components/forms-components/FormButton'
import FormInput from '@/components/forms-components/FormInput'

export default {
    components: {
        FormButton,
        FormInput
    },
    data: function () {
        return {
            field: [
                {
                    label: "Имя*",
                    plchold: "Иван Иванов",
                    name: "name",
                    type: "text"
                },
                {
                    label: "Телефон*",
                    plchold: "+7 (___) ___-__-__",
                    name: "phone",
                    type: "tel"
                },
                {
                    label: "Email*",
                    plchold: "you@example.com",
                    name: "email",
                    type: "email"
                }
            ]
        }
    },
}
</script>