import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 创建store实例
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
