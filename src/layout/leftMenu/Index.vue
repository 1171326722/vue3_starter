<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="clickMenuItem">
        <template v-for="(element, num) in menuList" :key="element.name + num">
            <MyMenuItem :menuInfo="element" />
        </template>
    </a-menu>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import MyMenuItem from './MyMenuItem.vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const menuList = userStore.menuList

const clickMenuItem = ({ key }) => {
    router.push({ name: key })
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
