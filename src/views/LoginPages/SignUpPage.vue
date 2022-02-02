<template>
  <div class="sign-up-page">
    <form class="sign-up-page__form">
      <InputName />
      <InputEmail class="sign-up-page__input-mail" />
      <InputPassword class="sign-up-page__input-password" />
      <Button
        class="sign-up-page__btn"
        text="Sign Up"
        type="button"
        @click="test"
      />
    </form>
    <LoginWith
      class="sign-up-page__footer"
      title="Sign In"
      to-route-name="SignInPage"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import InputEmail from "@/components/FormComponents/InputEmail.vue"
import InputName from "@/components/FormComponents/InputName.vue"
import InputPassword from "@/components/FormComponents/InputPassword.vue"
import LoginWith from "@/components/LoginWith.vue"

import fakeApiService from '@/services/FakeApiService.js'

export default {
  name: "SignUpPage",

  components: {
    Button,
    InputEmail,
    InputName,
    InputPassword,
    LoginWith,
  },

	methods:{
		test() {
			fakeApiService.getProducts()
				.then(response => {
					console.log(response.data)
					this.$toast.success("Invalid email address and/or password", {position: 'bottom'})
				})
				.catch(error => {
					this.$toast.warning(error, {position: 'bottom'})
				.finally(this.$toast.clear())
		  })
	  },
  }
}
</script>

<style lang="scss" scoped>
.sign-up-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.sign-up-page__form {
  margin-top: auto;
}
.sign-up-page__input-mail {
  margin-top: 1.25rem;
}
.sign-up-page__input-password {
  margin-top: 1.25rem;
}
.sign-up-page__btn {
  margin-top: 2.8rem;
}
.sign-up-page__footer {
  margin-top: 3.125rem;
}
</style>