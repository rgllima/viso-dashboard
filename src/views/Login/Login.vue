<template>
  <div class="login">
    <div class="login__title">
      <h1>Bem-Vindo</h1>
      <h2>Acesse o VISO</h2>
    </div>

    <div class="login__form">
      <div class="field">
        <label class="label has-color-secondary">CPF:</label>
        <div class="control">
          <input class="input" type="number" />
        </div>
      </div>

      <div class="field">
        <label class="label has-color-secondary">Senha:</label>
        <div class="control">
          <input class="input" type="password" />
        </div>
      </div>
    </div>

    <div class="login__form__redefinir-senha">
      <a @click="$router.push('/recovery')">Redefinir Senha</a>
    </div>

    <div class="login__form__buttons">
      <button class="button button--primary" @click="doLogin">Entrar</button>
      <button class="button button--secondary" @click="$router.push('/signup')">Cadastrar-se</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: "",
      password: ""
    };
  },

  methods: {
    doLogin() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.login
  width: fit-content
  margin: 0 auto
  &__title
    text-align: center
    margin-bottom: 35px

    h1
      font-size: 2rem
      font-weight: bold
      color: $secondary
      margin-bottom: 5px

    h2
      font-size: 1.6rem
      color: $secondary

  &__form
    width: 300px

    .label
      margin-bottom: 5px
      font-weight: 500

    .input
      background-color: #d7d7d7
      border: solid 1px #bdbdbd
      margin-bottom: 10px

    &__redefinir-senha
      text-align: right

      a
        color: #bdbdbd
        border-bottom: solid 1px #bdbdbd

    &__buttons
      margin-top: 35px
      display: flex
      flex-direction: row
      justify-content: space-between

      button
        width: 120px

      .button--primary, .button--secondary
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