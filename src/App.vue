<template>
  <router-view />
</template>
<script>
export default {
  beforeCreate() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
