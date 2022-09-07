<template>
	<!--  -->
	<el-container style="height: 100%; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1', '3']">
				<el-submenu index="1">
					<template slot="title"></i>后台管理系统</template>
					<el-menu-item-group>
						<template class="tabs" slot="title"></template>
						<el-menu-item index="1-1">用户管理</el-menu-item>
						<el-menu-item index="1-2">商品分类</el-menu-item>
					</el-menu-item-group>
					<user></user>
				</el-submenu>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>查看</el-dropdown-item>
						<el-dropdown-item>新增</el-dropdown-item>
						<el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span>admin</span>
			</el-header>
			<el-main>
				<el-table :data="tableData">
					<el-table-column prop="date" label="日期" width="140">
					</el-table-column>
					<el-table-column prop="id" label="id" width="120">
					</el-table-column>
					<el-table-column prop="userName" label="用户名">
					</el-table-column>
					<el-table-column prop="phone" label="手机号">
					</el-table-column>
					<el-table-column prop="ni_name" label="昵称">
					</el-table-column>
					<el-table-column prop="job" label="用户权限">
					</el-table-column>
					<el-table-column prop="status" label="状态">
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<!--                        <el-button type="text" @click="open">删除</el-button>-->
							<el-button type="primary text" icon="el-icon-delete" @click="open"></el-button>
							<el-button type="primary" icon="el-icon-edit" @click="deitUser()"></el-button>
							
						</template>
					</el-table-column>
				</el-table>
			</el-main>
		</el-container>
	</el-container>
</template>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>

<script>
	export default {
		data() {
			return {
				//死数据添加条数
				tableData: [{
						date: '2022-9-5',
						id: '1',
						userName: 'admin',
						phone: '13766666666',
						ni_name: '麻子',
						job: '超级管理员',
						status: '已登录'
					},
					{
						date: '2022-9-5',
						id: '1',
						userName: 'admin',
						phone: '13766666666',
						ni_name: '麻子',
						job: '超级管理员',
						status: '未登录'
					},
				]
			}
		},
		methods: {
			//编辑
			deitUser() {
				this.isShow = true
			},
			//删除
			open() {
				this.$confirm('此操作将删除该客户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			deleteUser() {

			},
			//编辑表单
			onSubmit() {
				console.log('submit!');
			},
			//显示
			deitUserShow() {
				this.isShow = false
			},

			//删除勾选 选中模块
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			}
		},

	}
</script>
