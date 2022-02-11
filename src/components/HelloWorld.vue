<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from "element-plus";
import 'element-plus/es/components/button/style/css'
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
    </el-row>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
