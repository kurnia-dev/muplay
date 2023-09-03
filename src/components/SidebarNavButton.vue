<template>
    <router-link :to="href" class="flex gap-[clamp(16px,5vw,24px)] xl:gap-10 rounded-[16px] sm:rounded-[30px] text-xl text-secondary items-center py-3 sm:py-4 px-7 sm:px-9"
        :class="path == href ? 'active' : ''"
    >
        <img :src="iconSrc" class="h-[20px] sm:h-auto" :title="title" alt="" />
        {{ text }}
    </router-link>
</template>
<script>
export default {
    name: 'SidebarNavButtons',
    props: ['iconSrc', 'title', 'text', 'href'],
    data() {
        return {
            path: location.pathname
        }
    },
    methods: {
        changePath() {
            this.path = location.pathname
            alert(this.path )
        }, 
        // setActive(e) {
        //     e.target.classList.add('active')
        // }
    }
}
</script>

<style>
.active {
    background-color: #1D1725;
    font-weight: 600;
    color: white
}
</style>