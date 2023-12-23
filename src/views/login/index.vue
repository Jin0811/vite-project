<template>
	<div class="login_container">
		<el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
			<h1>Hello</h1>
			<h2>欢迎来到硅谷甄选</h2>
			<el-form-item prop="username">
				<el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :loading="loading" class="login_btn" type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { ref } from "vue";

const loginForm = ref({ username: "", password: "" });
const rules = ref([]);
const loading = ref(false);

const login = () => {
	console.log("登录");
};
</script>

<style lang="scss" scoped>
.login_container {
	width: 100%;
	height: 100vh;
	background: url("@/assets/images/background.jpg") no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	.login_form {
		background: url("@/assets/images/login_form.png") no-repeat;
		background-size: cover;
		padding: 40px;
		margin-right: 100px;
		width: 500px;
		h1 {
			color: white;
			font-size: 40px;
		}
		h2 {
			font-size: 20px;
			color: white;
			margin: 20px 0px;
		}
		.login_btn {
			width: 100%;
		}
	}
}
</style>
