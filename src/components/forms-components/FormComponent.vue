<template>
  <form method="post" @submit.prevent="sendDatas">
    <div class="grid grid-cols-4 gap-3 mt-5">
      <div class="input-field w-full" 
        v-for="(item, index) in field" 
        :key="index">
        <label class="text-gray-700">{{ item.label }}</label>
          <input 
            v-if="item.type=='tel'"
            v-mask="'+7 (###) ###-##-##'" 
            v-model="inputPhoneModel" 
            :placeholder="item.plchold" 
            :type="item.type" 
            class="w-full px-3 py-1.5 rounded-md border-2 border-gray-300" />
          <input v-else
            :type="item.type"
            :placeholder="item.plchold"
            required
            :name="item.name"
            class="w-full px-3 py-1.5 rounded-md border-2 border-gray-300"
          />
      </div>
      <div class="input-field w-full">
        <label class="text-gray-700">Город*</label>
        <br>
        <select class="px-2.5 py-1.5 rounded-md border-2 border-gray-300">
          <option
            v-for="(city, index) in this.$store.state.cities"
            :key="index"
            :value="city.id"
            :name="city.id"
          >
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>
    <FormButton class="w-40 float-right mt-4 bg-teal-600 hover:bg-teal-500" 
      order_title="Отправить" />
  </form>
</template>

<script>
import FormButton from "@/components/forms-components/FormButton";
import { mapActions } from "vuex";
import {mask} from 'vue-the-mask'

export default {
  components: {
    FormButton
  },
  directives: {
    mask
  },
  data: function () {
    return {
      field: [
        {
          label: "Имя*",
          plchold: "Иван Иванов",
          name: "name",
          type: "text",
        },
        {
          label: "Телефон*",
          plchold: "+7 (___) ___-__-__",
          name: "phone",
          type: "tel",
        },
        {
          label: "Email*",
          plchold: "you@example.com",
          name: "email",
          type: "email",
        },
      ],
      inputPhoneModel: '',
    };
  },
  methods: {
    ...mapActions(["sendFormDatas"]),
    sendDatas() {
      this.sendFormDatas({
        field: this.field.name
      })
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
input, select {
  border-width: 1px;
}
</style>