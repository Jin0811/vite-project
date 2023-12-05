<template>
	<svg aria-hidden="true" :style="{ width, height }">
		<use :xlink:href="prefix + name" :fill="color" />
	</svg>
</template>

<script setup lang="ts">
// Props
defineProps({
	// 前缀
	prefix: {
		type: String,
		default: "#icon-",
	},
	// icon名称
	name: {
		type: String,
		required: true,
	},
	// icon颜色
	color: {
		type: String,
		default: "#000",
	},
	// 宽度
	width: {
		type: String,
		default: "16px",
	},
	// 高度
	height: {
		type: String,
		default: "16px",
	},
});
</script>
