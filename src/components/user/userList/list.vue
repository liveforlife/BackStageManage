 <template>
    <div class="listClass">
			<el-table
				:data="tableData"
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
					prop="address"
					label="地址">
				</el-table-column>
				<el-table-column
					label="地址">
					<template slot-scope="scope">
						<span v-bind:style="{color:scope.row.index % 2 === 0 ? fontColor : '#0000FF'}">{{scope.row.address}} {{scope.row.index % 2}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="操作">
					<template slot-scope="scope">
							<el-button type="text" size="small" @click="lookScope(scope)">查看</el-button>
							<el-button type="text" @click="deleteScope(scope)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog
				title="提示"
				:visible.sync="dialogVisible"
				width="30%">
				<list-info :childInfo="childInfo" v-model="lovingVue">
					<template v-slot:header>
						<h1>there is a header</h1>
					</template>
					<template v-slot:default="slotProps">
						{{slotProps.childInfo.date}}
					</template>
					<template >
						<el-row>
							<el-col :span="8">日期:{{this.childInfo.date}}</el-col>
							<el-col :span="8">姓名:{{this.childInfo.name}}</el-col>
							<el-col :span="8">地址:{{this.childInfo.address}}</el-col>
						</el-row>
					</template>
					
					<template v-slot:footer>
						<h1>there is a footer</h1>
					</template>
					<template>
						there is no name
					</template>
				</list-info>
				</span>
			</el-dialog>
		
		</div>
  </template>

  <script>
		//require('../mock/list-mock.js') 
		require('@/mock/index.js') 
		import listInfo from './listInfo'
    export default {
			components:{'list-info':listInfo},
      data() {
        return {
					fontColor:'#FF0000',
					lovingVue:true,
					dialogVisible:false,
					childInfo:{},
					dataInfo:'datainfo for some time',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
			created() {
				this.init()
			},
			mounted() {
			},
			methods:{
				init(){
					this.$axios.get('/list').then((err)=>{
						console.log(err)
						this.tableData=err.data
					}).catch(err=>{
						console.log(err)
					})
				},
				lookScope(item){
					this.childInfo=item.row
					this.dialogVisible=true
					console.log(this.childInfo)
				},
				deleteScope(item){
					this.$confirm('确定删除此条信息', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
					this.tableData.splice(item.$index,1)
				}).then(()=>{
					
				});
				}
			}
    }
  </script>
	<style lang="less">
		@import './list.less';
		.listClass{
			.el-table__body{
				color: @fontColorRed;
				font-size: @fontSize;
			}
		}
	</style>
