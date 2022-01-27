<template>
  <div class="forgot-password-page">
    <TitleHeader>
      Select which contact details should we use to reset your password:
    </TitleHeader>
    <div class="forgot-password-page__btns">
      <div
        class="forgot-password-page__btn"
        v-for="(btn, index) in buttons"
        :key="index"
        @click="$router.push({ name: 'RecoveryCodePage' })"
      >
        <div class="forgot-password-page__icon">
          <img :src="btn.icon" />
        </div>
        <div class="forgot-password-page__descr-btn">
          <div>{{ btn.title }}</div>
          <div>{{ btn.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeader from "@/components/TitleHeader.vue";
export default {
  name: "ForgotPasswordPage",

  components: {
    TitleHeader,
  },

  data() {
    return {
      buttons: [
        {
          title: "с помощью СМС",
          value: "+7 (910) ***-**-61",
          icon: require("@/assets/icons/phone.svg"),
        },
        {
          title: "с помощью почты",
          value: "******so@mail.ru",
          icon: require("@/assets/icons/email.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.forgot-password-page__btns {
  color: $fc-gray;
  margin-top: 4.375rem;
}
.forgot-password-page__btn {
  border: 0.5px solid $secondary;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  height: 113px;
  justify-content: space-between;
  margin-top: 0.625rem;
  padding: 0.375rem;
  transition: $transition-base;

  &:hover {
    border-color: #000000;

    .forgot-password-page__icon {
      border-color: #000000;
    }
  }
}
.forgot-password-page__icon {
  align-items: center;
  border: 0.5px solid $secondary;
  border-radius: 7px;
  display: flex;
  height: 100%;
  justify-content: center;
  transition: all 0.2s linear;
  width: 32%;
}
.forgot-password-page__descr-btn {
  align-items: left;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: center;
  overflow: hidden;
  padding-left: 1.375rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 68%;
}
</style>