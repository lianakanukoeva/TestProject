<template>
  <form>
    <div class="input-field" v-for="(item, index) in field" :key="index">
      <label for="">{{ item.label }}</label>
      <div class="input" v-if="item.type=='tel'">
        <input v-mask="'+7 (###) ###-##-##'" v-model="inputPhoneModel" :placeholder="item.plchold" :type="item.type" />
      </div>
      <div class="input" v-else>
        <input
          :type="item.type"
          :placeholder="item.plchold"
          required
          :name="item.name"
        />
        <!-- v-model!!!! -->
      </div>
    </div>
    <select>
      <option
        class="w-100"
        v-for="(city, index) in this.$store.state.cities"
        :key="index"
        :value="city.id"
        :name="city.id"
      >
        {{ city.name }}
      </option>
    </select>
    <FormButton class="bg-teal-600 hover:bg-teal-500" order_title="Отправить" />
  </form>
</template>

<script>
import FormButton from "@/components/forms-components/FormButton";
import FormInput from "@/components/forms-components/FormInput";
import { mapActions } from "vuex";
import {mask} from 'vue-the-mask'

export default {
  components: {
    FormButton,
    FormInput,
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
    ...mapActions(["GET_NAME"]),
  },
  mounted() {
    this.GET_NAME();
  },
};
</script>