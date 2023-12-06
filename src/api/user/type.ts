// 登录请求数据
export type loginRequestData = {
	password: string;
	username: string;
};

// 登录响应数据
export type loginResponseData = {
	token: string;
};
