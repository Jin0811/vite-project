import { createApp } from "vue";
import App from "./App.vue";

// ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

// Svg
import "virtual:svg-icons-register";

// 注册全局组件
import globalComponents from "@/plugins/globalComponents.ts";

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(globalComponents);

app.mount("#app");
