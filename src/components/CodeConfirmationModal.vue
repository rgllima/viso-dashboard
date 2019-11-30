<template>
  <div class="code-confirm-modal">
    <Modal :isActive="isActive" @close="$emit('close')">
      <div class="code-confirm-modal__content">
        <h1>Digite seu código de verificação</h1>
        <h2>Por favor, verifique seu email</h2>

        <div class="field">
          <div class="control">
            <input class="input" type="password" />
          </div>
        </div>

        <button
          class="button is-small is-success"
          :class="{'is-loading': confirming}"
          @click="confirm"
        >Finalizar</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    confirming: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    confirm() {
      this.$emit("confirm");
    }
  }
};
</script>

<style lang="sass" scoped>
.code-confirm-modal
  &__content
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    h1, h2
      margin: 5px 0

    h1
      font-size: 1.6rem
      color: #0b1728ff
      font-weight: bold

    h2
      font-size: 1.4rem
      color: #0b1728ff

    .input
      background-color: #d7d7d7
      border: solid 1px #bdbdbd
      margin-bottom: 5px
      height: 35px

    .button
      width: 90px
      margin: 0 20px
      border-radius: 5px
</style>