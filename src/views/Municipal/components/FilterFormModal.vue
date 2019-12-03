<template>
  <div class="filter-form-modal">
    <Modal :isActive="isActive" @close="$emit('close')">
      <div class="filter-form-modal__content">
        <FilterForm @close="$emit('close')" />
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import FilterForm from "./FilterForm";

export default {
  components: {
    Modal,
    FilterForm
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }

  // data() {
  //   return {
  //     sheet: {},
  //     month: "",
  //     year: ""
  //   };
  // },

  // methods: {

  //   submit() {
  //     this.$emit("submit", {
  //       sheet: this.sheet,
  //       month: this.month,
  //       year: this.year
  //     });

  //     this.resetFields();
  //     this.$emit("close");
  //   },

  //   resetFields() {
  //     (this.sheet = {}), (this.month = ""), (this.year = "");
  //   }
  // }
};
</script>

<style lang="sass" scoped>
.filter-form-modal
  &__content
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>