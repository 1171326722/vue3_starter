<template>
    <a-tabs
        :activeKey="tabStore.getActiveKey"
        hideAdd
        type="editable-card"
        @change="onChange"
        @edit="onEdit"
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
import { message } from 'ant-design-vue'

const router = useRouter()
const tabStore = useTabStore()

const onEdit = (targetKey) => {
    if (tabStore.getTabList.length === 1) {
        return message.warning('这已经是最后一页，不能再关闭了！')
    }
    tabStore.closeTab(targetKey)
    if (tabStore.getActiveKey == targetKey) {
        const currentPath = tabStore.getTabList[tabStore.getTabList.length - 1].path
        router.push({ path: currentPath })
        tabStore.changeActiveKey(currentPath)
    }
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
