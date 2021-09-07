
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store'
import zh from '../assets/i18n/zh'
import en from '../assets/i18n/en'
Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
    zh_CN: zh, // 中文语言包
    en_US: en // 英文语言包
}

const i18n = new VueI18n({
    locale: store.getters.language, // set locale
    messages: messages, // set locale messages
})


export default (i18n)