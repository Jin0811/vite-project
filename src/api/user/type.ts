// 登录请求数据
export interface loginRequestData {
	password: string;
	username: string;
}

// 登录响应数据
export interface loginResponseData {
	token: string;
}
