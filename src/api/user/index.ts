import request from "@/utils/request";
import type { loginRequestData, loginResponseData } from "./type";

// 登录
export function login(reqBody: loginRequestData): Promise<loginResponseData> {
	return request({
		method: "post",
		url: "/admin/acl/index/login",
		params: reqBody,
	});
}
