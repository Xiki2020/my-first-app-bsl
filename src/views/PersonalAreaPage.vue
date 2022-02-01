<template>
  <div class="account-page">
    <div class="account-page__info-user">
      <img
        src=""
        alt="Photo user"
        class="account-page__photo-user"
      >
      <div>
        <div class="account-page__name-user">
          Yauheni Chekan
        </div>
        <button class="account-page__btn">
          Edit account
        </button>
      </div>
    </div>
    <div class="account-page__menu">
      <div class="account-page__menu-section">
        Account details
      </div>
      <div class="account-page__menu-section">
        Card & offers
      </div>
      <div class="account-page__menu-section">
        Notifications
      </div>
      <div class="account-page__menu-section">
        Delivery information
      </div>
      <div class="account-page__menu-section">
        Payment information
      </div>
      <div class="account-page__menu-section">
        Language
      </div>
      <div class="account-page__menu-section">
        Privacy settings
      </div>
      <div
        class="account-page__menu-section"
        @click="logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "PersonalAreaPage",

  methods: {
    ...mapActions(["changeRole"]),
    logout() {
      this.changeRole("guest")
		localStorage.removeItem("token")
      this.$router.push({ name: "WelcomePage" })
    },
  },
}
</script>

<style lang="scss" scoped>
.account-page__info-user {
  align-items: center;
  display: flex;
  margin-top: 2.875rem;
}
.account-page__photo-user {
  background-color: $secondary;
  border: 0.5px solid $gray;
  border-radius: 14px;
  display: block;
  height: 77px;
  margin-right: 1rem;
  width: 77px;
}

.account-page__name-user {
  color: $fc-gray;
  font-weight: 600;
  font-size: 1.125rem;
}

.account-page__btn {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 7px;
  color: $secondary;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding: 0.65rem 0;
  transition: $transition-base;
  width: 100px;

  &:hover {
    border-color: $fc-gray;
    color: $fc-gray;
  }
}

.account-page__menu {
  border-top: 1px solid $secondary;
  color: $fc-gray;
  font-weight: 600;
  line-height: 3.75rem;
  margin-top: 1.625rem;
}
.account-page__menu-section {
  border-bottom: 1px solid $secondary;
  cursor: pointer;
  transition: $transition-base;

  &:hover {
    opacity: 0.7;
  }
}
</style>