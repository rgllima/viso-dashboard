<template>
  <div class="logout-modal">
    <Modal :isActive="isActive" @close="close">
      <div class="logout-modal__content">
        <h1>Você tem certeza que deseja sair da sua conta?</h1>
        <div class="logout-modal__buttons">
          <button class="button is-small is-success" @click="logout">Sim</button>
          <button class="button is-small is-danger" @click="close">Não</button>
        </div>
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
    }
  },

  methods: {
    close() {
      this.$emit("close");
    },

    logout() {
      this.$emit("logout");
    }
  }
};
</script>

<style lang="sass" scoped>
.logout-modal
  &__content
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    h1
      font-size: 1.7rem
      color: #0b1728ff
      font-weight: bold

  &__buttons
    margin-top: 30px

    .button
      width: 90px
      margin: 0 20px
      border-radius: 5px
</style>