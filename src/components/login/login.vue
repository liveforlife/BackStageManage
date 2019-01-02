<template>
	<div v-bind:style="{height:containDivHeight}" 
		style="text-align: center;width: 100%;background: #f7f7f7;min-height: 100%;display: block;display: flex; align-items: center ">
		<el-form ref="loginForm" :model="loginForm" label-width="60px" 
			style="width: 300px;border: 1px solid #eee;padding: 50px 100px;border-radius: 5px;margin: 0 auto;background-color: #FFF;">
			<el-form-item label="用户名">
				<el-input type="text" v-model="loginForm.userName"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="loginForm.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				containDivHeight:'',
				loginForm:{
					userName:'',
					password:''
				}
			};
		},
		created(){
			this.init()
		},
		methods:{
			init(){
				this.containDivHeight=document.documentElement.clientHeight-16+'px'
				console.log(this.containDivHeight)
			},
			login(){
				this.$axios.post('/login',this.loginForm).then(res=>{
					this.$message({
					dangerouslyUseHTMLString: true,
					message: res.data.message
					});
					if(res.data.code == 200){
						this.$nextTick(()=>{
							sessionStorage.setItem('user',JSON.stringify(res.data.data))
							this.$router.push('/')
						})
					}
					
				}).catch(err=>{
						console.log(err)
				})
			}
		}
	}
</script>

<style>

</style>
