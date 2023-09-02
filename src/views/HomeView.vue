<template>
    <div class="overflow-y-auto overflow-hidden">
        <div class="py-8 px-12 flex flex-col gap-16">
            <TrendingPlaylist />
            <PlayListGroup groupTitle="Recommended" />
            <PlayListGroup groupTitle="Recommended" />
            <PlayListGroup groupTitle="Recommended" />
        </div>
    </div>
</template>

<script>
import PlayListGroup from '@/components/PlayListGroup.vue';
import TrendingPlaylist from '@/components/TrendingPlaylist.vue';

export default {
    components: {
        TrendingPlaylist,
        PlayListGroup
    }
}
</script>