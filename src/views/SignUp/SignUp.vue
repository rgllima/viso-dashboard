<template>
  <div class="signup">
    <CodeConfirmationModal
      :isActive="showConfirmModal"
      :confirming="confirmingEmail"
      @close="closeConfirmModal"
      @confirm="confirmCode"
    />

    <Modal :isActive="showSuccessModal" @close="closeSuccessModal">
      <h1 class="title has-color-secondary has-text-centered">Cadastro realizado com sucesso!</h1>
    </Modal>

    <div class="signup__title">
      <h1>Cadastre-se</h1>
    </div>

    <div class="signup__form">
      <div class="field">
        <label class="label has-color-secondary">Nome Completo:</label>
        <div class="control">
          <input class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">CPF:</label>
        <div class="control">
          <input class="input" type="number" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">Email:</label>
        <div class="control">
          <input class="input" type="email" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">Confirmar Email:</label>
        <div class="control">
          <input class="input" type="email" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">Senha:</label>
        <div class="control">
          <input class="input" type="password" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">Confirmar Senha:</label>
        <div class="control">
          <input class="input" type="password" />
        </div>
      </div>
    </div>

    <button
      class="button button--primary"
      :class="{'is-loading': sendingData}"
      @click="doSignUp"
    >Cadastrar</button>
  </div>
</template>

<script>
import CodeConfirmationModal from "@/components/CodeConfirmationModal";
import Modal from "@/components/Modal";

export default {
  components: {
    CodeConfirmationModal,
    Modal
  },

  data() {
    return {
      showConfirmModal: false,
      showSuccessModal: false,
      sendingData: false,
      confirmingEmail: false
    };
  },

  methods: {
    doSignUp() {
      this.sendingData = true;
      setTimeout(() => {
        this.sendingData = false;
        this.openConfirmModal();
      }, 1000);
    },

    confirmCode(code) {
      this.confirmingEmail = true;
      setTimeout(() => {
        this.confirmingEmail = false;
        this.closeConfirmModal();
        this.openSuccessModal();
      }, 1000);
    },

    openConfirmModal() {
      this.showConfirmModal = true;
    },

    closeConfirmModal() {
      this.showConfirmModal = false;
    },

    openSuccessModal() {
      this.showSuccessModal = true;
      setTimeout(() => {
        this.closeSuccessModal();
      }, 2000);
    },

    closeSuccessModal() {
      this.showSuccessModal = false;
      this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/general"

.signup
  width: fit-content
  margin: 0 auto

  &__title
    text-align: center
    margin-bottom: 30px

    h1
      font-size: 2rem
      font-weight: bold
      color: $secondary
      margin-bottom: 5px

  &__form
    width: 300px

    .label
      margin-bottom: 5px
      font-weight: 500

    .input
      background-color: #d7d7d7
      border: solid 1px #bdbdbd
      margin-bottom: 5px

  .button--primary, .button--secondary
    width: 100px
    margin: 0 auto
    margin-top: 15px
    display: block
    color: white
    font-weight: bold

  .button--primary
    background-color: $primary

  .button--secondary
    background-color: $secondary

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0
</style>