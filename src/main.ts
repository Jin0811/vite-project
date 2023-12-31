import { createApp } from "vue";
import App from "./App.vue";

// ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

// Svg
import "virtual:svg-icons-register";

// 全局组件
import globalComponents from "@/plugins/globalComponents.ts";

// 全局样式
import "@/assets/style/index.scss";

// 路由
import router from "@/router/index";

// Pinia
import store from "@/store";

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(globalComponents);
app.use(router);
app.use(store);

app.mount("#app");
