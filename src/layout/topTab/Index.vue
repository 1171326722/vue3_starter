<template>
    <a-tabs
        :activeKey="tabStore.getActiveKey"
        @change="onChange"
        type="editable-card"
        @edit="onEdit"
        hideAdd
    >
        <a-tab-pane v-for="pane in tabStore.getTabList" :key="pane.path" :tab="pane.name">
        </a-tab-pane>
    </a-tabs>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import MyMenuItem from './MyMenuItem.vue'
import { useTabStore } from '@/store/modules/tab'
import { useRouter } from 'vue-router'
const router = useRouter()
const tabStore = useTabStore()

const onEdit = (targetKey) => {
    tabStore.closeTab(targetKey)
}
const onChange = (activeKey) => {
    tabStore.changeActiveKey(activeKey)
    router.push({ path: activeKey })
}
</script>

<style lang='less'>
.ant-tabs-bar {
    margin: 24px 0 0 0 !important;
    border-bottom: none !important;
}
</style>
