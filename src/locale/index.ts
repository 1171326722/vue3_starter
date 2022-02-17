import { createI18n } from 'vue-i18n'
import enUS from './en_US.json'
import zhCN from './zh_CN.json'

const resources = {
	'en-US': enUS,
	'zh-CN': zhCN
}

const i18n = createI18n({
	locale: 'zh-CN',
	messages: resources
})

export default i18n
