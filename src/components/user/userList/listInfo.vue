<template>
	<div>
		<slot name="header"></slot>
		<!-- <slot name="default"></slot> -->
		<el-row>
			<input type="checkbox" v-on:focus.native="onfocus" v-bind:checked="isFlag" @change="$emit('change', $event.target.isFlag)" />
		</el-row>
		<el-button @click="observerCLi">第一次修改</el-button>
		<el-button @click="observerCLiT">第二次修改</el-button>
		<el-row>
			<el-col :span="8">日期:{{childInfo.date}}</el-col>
			<el-col :span="8">姓名:{{childInfo.name}}</el-col>
			<el-col :span="8">地址:{{childInfo.address}}</el-col>
		</el-row>
		<slot v-bind:childInfo="childInfo">
			{{childInfo.name}}
		</slot>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
	let getterProp={}
	Object.defineProperty(getterProp,'getterPropA',{
		enumerable:true,
		configurable:true,
		set(newVal){
			this.val=newVal
		},
		get(){
			return {
				a:'1'
			}
		}
	})
	export default {
		model:{
			prop:'isFlag',
			event:'change'
		},
		props:["childInfo","isFlag"],
		render:function(createElement){
			return createElement('h1',"aaaa")
		},
		created(vm){
			console.log(Vue.globalUtil)
			this.$util.printToday()
		},
		data(){
			return {
				getterProp,
				list:{
					name:'cli'
				}
			}
		},
		watch:{
			'list.name':() => {
				console.log('list.name')
			},
			'getterProp':()=>{
				console.log('geter,geter')
			},
			'getterProp.getterPropA':()=>{
				console.log('getterPropA,getterPropA')
			},
			'getterProp.getterPropA.a':()=>{
				console.log('getterPropA.a,getterPropA.a')
			},
		},
		methods:{
			observerCLi(){
				console.log(this.getterProp,'3333')
				this.getterProp=3
				this.list.name='zli'
				//this.getterProp.getterPropA=3
				//this.getterProp.getterPropA.a=3
				console.log(this.getterProp,'3333')
			},
			observerCLiT(){
				console.log(this.getterProp,'3333')
				//this.getterProp=3
				this.getterProp.getterPropA=10
				//this.getterProp.getterPropA.a=3
				console.log(this.getterProp,'3333')
			},
			onfocus(){}
		}
	}
</script>

<style>

</style>
