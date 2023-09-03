<template>
    <aside class="basis-[35%] flex-shrink-0 max-w-[400px] hidden lg:flex flex-col gap-[6rem] relative h-full overflow-auto">
        <div class="flex flex-col gap-6 sticky top-0 pb-5 bg-[var(--body-bg)] py-8 px-12">
            <SidebarNavButton :iconSrc="icons.home" title="Home" text="Home" href="/" />
            <SidebarNavButton :iconSrc="icons.search" title="Search" text="Search a song" href="/search"/>
        </div>
        <PlayListGroup class="wrap items-center" groupTitle="Developer Choice" direction="vertical" :tracks="developerChoice"/>
    </aside>
</template>

<script>
import home from '@/assets/icons/home.svg'
import search from '@/assets/icons/search.svg'
import SidebarNavButton from './SidebarNavButton.vue';
import PlayListGroup from './PlayListGroup.vue';

export default {
    name: "SidebarLeft",
    data() {
        return {
            icons: {
                home,
                search
            }, 
            developerChoice: this.$store.state.developerChoice
        };
    },
    components: { SidebarNavButton, PlayListGroup }
}
</script>