<template>
    <a-sub-menu :key="menuInfo.path" v-if="menuInfo.children">
        <template #title>
            <span>
                <a-icon :type="menuInfo.icon" />
                <span>{{ menuInfo.name }}</span>
            </span>
        </template>
        <template v-for="(item, index) in menuInfo.children" :key="index">
            <MyMenuItem :menuInfo="item" />
        </template>
    </a-sub-menu>
    <a-menu-item :key="menuInfo.path" v-else @click="clickMenuItem(menuInfo)">
        <a-icon :type="menuInfo.icon" />
        <span>{{ menuInfo.name }}</span>
    </a-menu-item>
</template>

<script lang="ts">
export default {
    name: 'MyMenuItem'
}
</script>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { useTabStore } from '@/store/modules/tab'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const tabStore = useTabStore()

const props = defineProps({
    menuInfo: {
        type: Object,
        require: true
    }
})
const clickMenuItem = (menuInfo) => {
    router.push({ path: menuInfo.path })
    tabStore.addTab({ name: menuInfo.name, path: menuInfo.path })
}
</script>

<style scoped></style>
