<template>
	<div>
		<el-button type="primary" :icon="Edit">13</el-button>
		<Test />
	</div>
</template>

<script setup lang="ts">
import { Edit } from "@element-plus/icons-vue";
import Test from "@/components/Test.vue";
</script>
