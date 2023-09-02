<template>
  <router-view />
</template>
<script>
export default {
  beforeCreate() {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      this.$store.dispatch('setLoggedIn')
      window.history.pushState({}, null, '/')
    } else {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
