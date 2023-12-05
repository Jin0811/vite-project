import SvgIcon from "@/components/svg-icon/index.vue";
import { App, Component } from "vue";

export default {
	install(app: App) {
		// 注册全局组件
		const globalComponents: { [k: string]: Component } = { SvgIcon };
		Object.keys(globalComponents).forEach((key: string) => {
			app.component(key, globalComponents[key]);
		});
	},
};
