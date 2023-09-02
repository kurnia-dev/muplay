<template>
    <aside class="basis-[30%] flex-shrink-0 max-w-[400px] py-8 px-12 flex flex-col gap-[6rem] relative h-full overflow-auto">
        <div class="flex flex-col gap-6 sticky top-0 bg-[var(--body-bg)] pb-5  ">
            <SidebarNavButton :iconSrc="icons.home" title="Home" text="Home" href="/" />
            <SidebarNavButton :iconSrc="icons.search" title="Search" text="Search a song" href="/search"/>
        </div>
        <PlayListGroup groupTitle="Recently Played" direction="vertical"/>
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
            }
        };
    },
    components: { SidebarNavButton, PlayListGroup }
}
</script>