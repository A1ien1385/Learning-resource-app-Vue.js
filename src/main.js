import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheResources from './components/learning-resource/TheResources.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('the-resources', TheResources);
app.component('base-dialog', BaseDialog);

app.mount('#app');
