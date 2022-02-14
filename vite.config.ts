import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		// css预处理器
		modules: {
			// css模块化 文件以.module.[css|less|scss]结尾
			generateScopedName: '[name]__[local]___[hash:base64:5]',
			hashPrefix: 'prefix',
		},

		preprocessorOptions: {
			less: {
				charset: false,
			},
		},
	},
});
