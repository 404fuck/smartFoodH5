const app = {
    state: {
        // 中英文
        language: localStorage.getItem('language') || 'en_US',
    },
    mutations: {
        // 中英文
        SET_LANGUAGE: (state, language) => {
            state.language = language
            localStorage.setItem('language', language)
        },

    },
    actions: {
        // 中英文
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language)
        },


    }

}

export default app