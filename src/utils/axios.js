import axios from 'axios';
import Router from '../router';
import message from 'ant-design-vue/es/message';
axios.interceptors.request.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);
axios.interceptors.response.use(
	(response) => {
		// 检测某种状态进行重定向
		if (response.status == 403) {
			message.error('用户未登录');
			this.Router.push({
				name: 'login',
			});
		}
		return response;
	},
	(error) => {
		console.log(error);
		if (error.response.status == 403) {
			message.error('用户未登录');
			Router.push({
				name: 'login',
			});
		} else {
			message.error(error.response.statusText);
		}
		return Promise.reject(error.response);
	}
);
export default axios;
