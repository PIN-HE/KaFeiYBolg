import { createApp }  from "vue";
import App from "./App.vue";
import process from "process"
import router from "@/router/index.js"
import 'animate.css';
import './output.css'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { initIdentityRoleState } from "./store/identity";


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");


async function initApp() {
    try {
        const identity = initIdentityRoleState()
        await identity.verityIdentity()
    } catch (error) {
        console.log(error);
    }
}

initApp()

