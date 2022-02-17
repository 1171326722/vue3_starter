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
    <a-menu-item :key="menuInfo.path" v-else>
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
const props = defineProps({
    menuInfo: {
        type: Object,
        require: true
    }
})
</script>

<style scoped></style>
