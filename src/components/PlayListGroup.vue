<template>
    <div class="">
        <div class="flex items-center justify-between mb-12 px-4">
            <h2 class="uppercase font-bold text-xl">{{ groupTitle }}</h2>
            <router-link to="" class="text-secondary text-base">See All</router-link>
        </div>
        <div class="max-w-[100%] max-y-[100%] overflow-auto">
            <ul class="flex" :class="direction === 'vertical' ? 'flex-col gap-1' : 'gap-10'">
                <li v-for="({ title, artist, thumb }, index) in playlist" :key="index"
                    class="flex gap-8 items-center cursor-pointer group-hover py-4 px-4 rounded-xl"
                    :class="direction === 'vertical' ? 'flex-row' : 'flex-col'">
                    <img :src="thumb" :title="title" alt="" class="rounded-[10%]"
                        :style="direction === 'vertical' ? 'min-width: 80px;' : 'min-width: 200px'" />
                    <div>
                        <div class="font-bold text-xl">{{ title }}</div>
                        <div class="text-lg text-secondary">{{ artist }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlayListGroup',
    props: ['groupTitle', 'link', 'direction'],
    data() {
        return {
            playlist: [
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                },
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                },
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                },
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                },
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                },
                {
                    title: 'Back to Her Men',
                    artist: 'Demien Rice',
                    thumb: 'https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210'
                }
            ]
        }
    }
}
</script>