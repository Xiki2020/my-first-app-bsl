<template>
  <div class="container">
    <div class="info">
      <svg
        width="174"
        height="119"
        viewBox="0 0 174 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="40" y="8" width="110" height="110" rx="55" fill="#00D455" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M86.8783 73.5608L118.815 41.8461L123.675 46.6725L86.8783 83.2137L67.2649 63.7365L72.1251 58.9101L86.8783 73.5608Z"
          fill="white"
        />
        <circle cx="49" cy="5" r="4" stroke="#00D455" stroke-width="2" />
        <circle cx="47" cy="117" r="2" fill="#00D455" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M168.054 11.6787L166.157 15.8904L164.769 15.2654L166.666 11.0538L162.455 9.15682L163.08 7.76938L167.291 9.66636L169.188 5.45473L170.576 6.07965L168.679 10.2913L172.89 12.1883L172.265 13.5757L168.054 11.6787Z"
          fill="#00D455"
          stroke="#00D455"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.37264 71.3829L1.30579 71.5536L1.24957 70.5432L4.31642 70.3726L4.14576 67.3057L5.15607 67.2495L5.32673 70.3164L8.39358 70.1457L8.4498 71.156L5.38295 71.3267L5.55362 74.3935L4.5433 74.4497L4.37264 71.3829Z"
          fill="#D5DDE0"
          stroke="#D5DDE0"
          stroke-width="0.664972"
        />
      </svg>
      <div class="info__header">Password reset successful</div>
      <div class="info__body">
        You have successfully reset your password.Please use your new password
        when logging in
      </div>
    </div>
    <div class="container-btn">
      <BigBtn text="Login" @click="$router.push({ name: 'WelcomeBackPage' })" />
    </div>
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";
export default {
  name: "NewPasswordPage",
  components: {
    BigBtn,
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.container-btn {
  bottom: 7vh;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: 80%;
}

.info {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  svg {
    transform: translateX(-5%);
  }
}

.info__header {
  color: #3e4958;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}

.info__body {
  color: #d5dde0;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}
</style>