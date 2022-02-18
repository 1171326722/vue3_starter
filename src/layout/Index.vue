<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="title">vue3</div>
            <left-menu />
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="my_header" style="background: #001529; padding: 0">
                <TopTab />
                <a-select default-value="zh_CN" style="width: 120px" @change="handleChange">
                    <a-select-option value="en-US"> English </a-select-option>
                    <a-select-option value="zh-CN"> 中文 </a-select-option>
                </a-select>
            </a-layout-header>
            <a-layout-content
                :style="{
                    padding: '24px',
                    background: '#fff',
                    minHeight: 'calc(100vh - 64px)'
                }"
            >
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
import LeftMenu from './leftMenu/Index.vue'
import i18n from '@/locale/index'
import { ref, getCurrentInstance } from 'vue'
import TopTab from './topTab/Index.vue'

const { proxy } = getCurrentInstance()

const clickMenu = (menu) => {
    this.$router.push(menu.path)
}
const handleChange = (value) => {
    proxy.$i18n.locale = value
}
const language = ref(18)
</script>


<style>
.title {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
.my_header {
    display: flex;
    justify-content: space-between;
}
</style>
