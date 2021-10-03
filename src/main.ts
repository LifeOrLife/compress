import { createApp } from 'vue';
import vDrag from './directives/v-drag';
import App from './App.vue';

const app = createApp(App);
app.directive(vDrag.name, vDrag);
app.mount('#app');
