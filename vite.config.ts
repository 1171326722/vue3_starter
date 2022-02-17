import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	base: './',
	server: {
		port: 3003, // 端口
		open: true, // 设置服务启动时是否自动打开浏览器
		cors: true, // 允许跨域
		//设置代理，根据我们项目实际情况配置
		proxy: {
			'/api': {
				target: 'http://xxx.xxx.xxx.xxx:8000',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace('/api/', '/'),
			},
		},
	},
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
