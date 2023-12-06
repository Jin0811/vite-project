import { RouteRecordRaw } from "vue-router";

// 静态路由
export const constantRoute: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
];

// 异步路由
export const asnycRoute: RouteRecordRaw[] = [];
