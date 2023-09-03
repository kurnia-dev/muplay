<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <a class="py-4 px-9 bg-main rounded-[64px]" :href="auth_url">Login</a>
    </div>
</template>
<script>

export default {
    data() {
        return {
            client_id: '9a18f40f9c7a4e659e079864b76f5838',
            redirect_uri: 'http://localhost:8080', 
            scope: 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
        }
    },
    computed: {
        auth_url() {
            return `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_uri}&scope=${this.scope}`
        }
    },
    beforeCreate() {
        if (this.$store.state.isLoggedIn) {
            this.$router.push({ name: 'home'})
        }
    }
}
</script>