<template>
	<div>
		<el-row>
			<el-col :span="8">日期:{{childInfo.date}}</el-col>
			<el-col :span="8">姓名:{{childInfo.name}}</el-col>
			<el-col :span="8">地址:{{childInfo.address}}</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		props:["childInfo"],
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
