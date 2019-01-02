<template>
	<div>
		<el-container>
			<el-header>
				
			</el-header>
			<el-container>
				<el-aside width="200px" >
						<h5>默认颜色</h5>
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
						>
						<template v-for="(item,key) in menuList">
							<el-submenu :index="toStr(key)"  v-if="item.subs" :key="toStr(key)">
								<template slot="title">
									<i v-bind:class="item.icon"></i>
									<span>{{item.title}}</span>
								</template>
								<!-- <el-menu-item-group> -->
									<template v-for="(childItem,childKey) in item.subs">
										<el-submenu :index="toStr(key)+'-'+toStr(childKey)" :key="toStr(childKey)" v-if="childItem.subs"><!--  -->
										</el-submenu>
										<el-menu-item :index="toStr(key)+'-'+toStr(childKey)" :key="toStr(childKey)" v-else @click='locationchange(childItem.index,childItem)'>
											<i v-bind:class="childItem.icon"></i>
											{{childItem.title}}
										</el-menu-item>
									</template>
								<!-- </el-menu-item-group> -->
							</el-submenu>
							<el-menu-item :index="toStr(key)" :key="toStr(key)" v-else @click='locationchange(item.index,item)'><!-- :index="key" -->
								<i v-bind:class="item.icon"></i>
								<span slot="title">{{item.title}}</span>
							</el-menu-item>
							
						</template>
							
						</el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<div>
							<el-tag
								:key="tag"
								v-for="tag in dynamicTags"
								closable
								:disable-transitions="false"
								@close="handleClose(tag.index)">
								{{tag.title}}
							</el-tag>
						</div>
						<div v-if="dynamicTags != 0"> 
							<router-view></router-view>
						</div>
						<div v-else="dynamicTags.length ==0">
							默认展示界面
						</div>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dynamicTags: [],
				menuList:[
					/* {num: '1', index: '/Home', title: '个人中心', icon: 'icon-userinfo'}, */
					{num:'2',title:'个人中心',icon:'el-icon-menu',subs:[
						{index:'/List',title:'userList',icon:'el-icon-printer'},
						{index:'/Contact',title:'Contact',icon:'el-icon-service'},
						{index:'/Index',title:'Index',icon:'el-icon-sold-out'},
					]},
					{num:'3',title:'员工相关',icon:'el-icon-menu',subs:[
						{index:'/employeeList',title:'员工管理',icon:'el-icon-date'},
						{index:'/departmentList',title:'部门管理',icon:'el-icon-star-off'},
					]},
				],
			};
		},
		methods: {
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
				this.$router.push({path:this.dynamicTags[this.dynamicTags.length-1].index})
			},
			locationchange(index,item){
				if(index != ''){
					this.$router.push({path:index})
					this.dynamicTags.push(item)
				}
				
			},
			toStr (value) {
				return value.toString()
			}
		},
	}
</script>

<style>

</style>
