<template>
  <div class="footer">
    <div class="footer__delimiter">
      <div class="footer__delimiter-text">
        Or {{ $route.meta.title.toLowerCase() }} with
      </div>
    </div>
    <div class="footer__nav-log">
      <BigBtn variant="secondary" style="width: 47%">
        <svg
          width="15"
          height="28"
          viewBox="0 0 15 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4351 0.00582587L10.8373 0C6.7953 0 4.18317 2.70466 4.18317 6.89084V10.068H0.565722C0.253132 10.068 0 10.3237 0 10.6392V15.2425C0 15.558 0.253421 15.8134 0.565722 15.8134H4.18317V27.4291C4.18317 27.7445 4.4363 28 4.74889 28H9.46863C9.78122 28 10.0343 27.7442 10.0343 27.4291V15.8134H14.264C14.5766 15.8134 14.8297 15.558 14.8297 15.2425L14.8314 10.6392C14.8314 10.4877 14.7717 10.3427 14.6658 10.2355C14.5598 10.1283 14.4155 10.068 14.2654 10.068H10.0343V7.37468C10.0343 6.08017 10.34 5.42301 12.0109 5.42301L14.4346 5.42214C14.7469 5.42214 15 5.16638 15 4.8512V0.576761C15 0.261873 14.7472 0.00640846 14.4351 0.00582587Z"
            fill="white"
          />
        </svg>
      </BigBtn>
      <BigBtn variant="secondary" style="width: 47%">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1667 11.3333V17H22.1822C21.012 20.298 17.8613 22.6667 14.1667 22.6667C9.48033 22.6667 5.66667 18.853 5.66667 14.1667C5.66667 9.48033 9.48033 5.66667 14.1667 5.66667C16.1982 5.66667 18.1532 6.39483 19.6718 7.718L23.3948 3.44533C20.8448 1.224 17.5695 0 14.1667 0C6.35517 0 0 6.35517 0 14.1667C0 21.9782 6.35517 28.3333 14.1667 28.3333C21.9782 28.3333 28.3333 21.9782 28.3333 14.1667V11.3333H14.1667Z"
            fill="white"
          />
        </svg>
      </BigBtn>
    </div>
    <div class="footer__bottom">
      Already have an account?
      <span
        @click="$router.push({ name: title.split(' ').join('') + 'Page' })"
        >{{ title }}</span
      >
    </div>
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";
export default {
  name: "FooterLogin",
  components: {
    BigBtn,
  },
  props: {
    title: {
      type: String,
      default: () => "Sign Up",
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer__delimiter {
  background-color: #d5dde0;
  height: 1px;
  text-align: center;
}
.footer__delimiter-text {
  background-color: #ffffff;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  transform: translateY(-0.6rem);
}

.footer__nav-log {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.footer__bottom {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 50px;
  text-align: center;

  span {
    cursor: pointer;
    font-weight: 600;
  }
}
</style>