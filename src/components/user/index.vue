<template>
  <div >
    <h1>index</h1>
		<el-table
			:data="indexList"
			style="width: 100%">
			<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="email"
				label="地址">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址">
			</el-table-column>
			<el-table-column
				label="操作">
				<template slot-scope="scope">
						<el-button type="text" size="small" @click="lookScope(scope)">查看</el-button>
						<el-button type="text" @click="deleteScope(scope)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
  </div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		mounted(){
			this.getIndexList()
		},
		computed:{
			...mapState('indexModule',['indexList'])
		},
		methods:{
			...mapActions('indexModule',['getIndexList'])
		}
	}
</script>

<style>

</style>
