<template>
    <div :class="direction === 'vertical' ? 'py-8 px-10' : ''">
        <div class="flex items-center justify-between mb-10 sm:mb-12">
            <h2 class="uppercase font-bold text-xl">{{ groupTitle }}</h2>
            <router-link to="" class="text-secondary text-base">See All</router-link>
        </div>
        <div class="max-w-[100%] max-y-[100%] overflow-auto">
            <ul class="flex" :class="direction === 'vertical' ? 'flex-col gap-1' : 'gap-[clamp(26px,2vw,32px)]'">
                <li v-for="({ title, artist, thumb }, index) in playlist" :key="index"
                    class="flex gap-8 cursor-pointer group-hover rounded-xl"
                    :class="direction === 'vertical' ? 'flex-row py-[clamp(8px,3vw,16px)] items-center' : 'flex-col'">
                    <img :src="thumb" :title="title" alt="" class="rounded-[10%]"
                        :style="direction === 'vertical' ? 'width: clamp(60px,5vw,80px);' : 'min-width: clamp(160px,5vw,200px)'" />
                    <div>
                        <div class="font-bold text-[clamp(16px,4vw,20px)]">{{ title }}</div>
                        <div class="text-[clamp(14px,4vw,18px)] text-secondary">{{ artist }}</div>
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