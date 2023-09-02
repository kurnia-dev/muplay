<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <a v-if="!isLoggedIn" class="py-4 px-9 bg-main rounded-[64px]" :href="auth_url">Login</a>
        <a v-else class="py-4 px-9 bg-main rounded-[64px]" href="/">Home</a>
    </div>
</template>
<script>

export default {
    data() {
        return {
            client_id: '9a18f40f9c7a4e659e079864b76f5838',
            redirect_uri: 'https://kurnia-dev.github.io/muplay/'
        }
    },
    computed: {
        auth_url() {
            return `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_uri}`
        },
        code() {
            return new URLSearchParams(window.location.search).get('code')
        }
    },
    beforeCreate() {
        if (this.$store.state.isLoggedIn) {
            this.$router.push({ name: 'home'})
        }
    }
}
</script>