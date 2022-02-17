<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="title">vue3</div>
            <left-menu />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #001529; padding: 0">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                    v-else
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
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
const clickMenu = (menu) => {
    this.$router.push(menu.path)
}
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
