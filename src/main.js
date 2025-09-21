import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import application from '@/com/mixins/application.mixin'
import core from '@/com/mixins/core.mixin'
import game from '@/com/mixins/game.mixin'
import user from '@/com/mixins/user.mixin'
createApp(App)
  .mixin({mixins: [application, core, game, user]})
  .use(store)
  .use(router)
  .mount('#app')
