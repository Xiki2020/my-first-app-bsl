<template>
  <AppWrapper style="padding-top: 15px">
    <div class="description">
      Select which contact details should we use to reset your password:
    </div>
    <div class="nav">
      <div class="nav__btn" @click="$router.push({ name: 'RecoveryCodePage' })">
        <div class="nav__icon">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5391 8.96965C13.2722 7.98167 13.5351 6.94043 12.7059 6.02133C10.8453 3.41771 9.59389 1.80765 8.80898 1.03228C7.31675 -0.441798 4.86202 -0.242406 3.56964 1.03102C2.87549 1.71499 2.64049 1.94987 1.92776 2.67381C-2.0423 6.646 0.378843 15.0431 6.81514 21.4857C13.25 27.9268 21.6462 30.3493 25.6246 26.3687C26.2823 25.7347 26.8392 25.1775 27.2784 24.7133C28.5449 23.3747 28.7371 21.0282 27.27 19.5038C26.5179 18.7223 24.9825 17.5313 22.2694 15.5906C21.4384 14.8476 20.4531 15.0086 19.5498 15.6012C19.1153 15.8863 18.7991 16.1746 18.202 16.7723L17.1178 17.8572C16.975 18.0001 15.0358 17.0289 13.1535 15.1447C11.2701 13.2595 10.2996 11.3202 10.4418 11.1781C10.7349 10.885 11.0966 10.5232 11.5268 10.0925C11.7162 9.90288 11.8068 9.81108 11.9229 9.68901C12.1649 9.43469 12.3653 9.20389 12.5391 8.96965ZM19.1178 19.8583L20.2023 18.7732C20.5309 18.4443 20.7439 18.2421 20.9171 18.1026C23.2939 19.8094 24.6704 20.8827 25.2326 21.4668C25.5702 21.8176 25.5177 22.4576 25.2243 22.7677C24.8182 23.197 24.2906 23.7249 23.6431 24.3494C21.0705 26.923 14.2928 24.9676 8.81561 19.485C3.33666 14.0006 1.38215 7.22195 3.93529 4.66739C4.64516 3.94643 4.87006 3.72164 5.5543 3.04743C5.81085 2.79464 6.50968 2.73788 6.82177 3.04617C7.42608 3.64313 8.54705 5.07846 10.1961 7.37553C10.1107 7.48151 10.0041 7.60128 9.87433 7.73765C9.7791 7.83774 9.69976 7.91817 9.5263 8.09179C9.09641 8.52211 8.73509 8.88363 8.44237 9.17632C6.59838 11.0202 8.16879 14.1583 11.153 17.1454C14.1352 20.1305 17.2745 21.7027 19.1178 19.8583Z"
              fill="#3E4958"
            />
          </svg>
        </div>
        <div class="nav__description-btn">
          <div>via sms:</div>
          <div style="font-weight: 700">*** *******61</div>
        </div>
      </div>
      <div class="nav__btn">
        <div class="nav__icon">
          <svg
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.13001 0H31.3001C33.0288 0 34.4302 1.40136 34.4302 3.13001V25.0401C34.4302 26.7688 33.0288 28.1701 31.3001 28.1701H3.13001C1.40136 28.1701 0 26.7688 0 25.0401V3.13001C0 1.40136 1.40136 0 3.13001 0ZM3.12997 10.3574V25.0402H31.3001V10.3581L17.215 17.4006L3.12997 10.3574ZM3.12997 6.8579L17.215 13.9011L31.3001 6.85859V3.13005H3.12997V6.8579Z"
              fill="#3E4958"
            />
          </svg>
        </div>
        <div class="nav__description-btn">
          <div>via email:</div>
          <div style="font-weight: 700">****ic16@gmail.com</div>
        </div>
      </div>
    </div>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
export default {
  name: "ForgotPasswordPage",
  components: {
    AppWrapper,
  },
};
</script>

<style lang="scss" scoped>
.description {
  color: #3e4958;
  font-size: 13px;
  line-height: 24px;
}

.nav {
  margin-top: 70px;
}

.nav__btn {
  border: 0.5px solid #d5dde0;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  height: 113px;
  justify-content: space-between;
  margin-top: 10px;
  padding: 6px;
  transition: all 0.2s linear;
}

.nav__btn:hover {
  border-color: #000000;
}

.nav__btn:hover .nav__icon {
  border-color: #000000;
}

.nav__icon {
  align-items: center;
  border: 0.5px solid #d5dde0;
  border-radius: 7px;
  display: flex;
  height: 100%;
  justify-content: center;
  transition: all 0.2s linear;
  width: 32%;
}

.nav__description-btn {
  align-items: left;
  color: #3e4958;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  padding-left: 23px;
  text-align: left;
  width: 68%;
}
</style>