<template>
	<div class="c-0">
		<div class="c-1">
			<el-input v-model="dbName" placeholder="请输入数据库名称" />
			<el-input v-model="tableName" placeholder="请输入表名称" />
			<el-button type="primary" @click="refresh">刷新iframe</el-button>
		</div>
		<div v-loading="loading" class="c-2" element-loading-text="拼命加载中">
			<iframe :src="url" frameborder="0"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			url: "http://127.0.0.1:8090/adminer-z.html",
			dbName: "test",
			tableName: "aaa"
		};
	},

	watch: {},

	mounted() {
		this.iframe = this.$el.querySelector("iframe");

		this.loading = true;
		this.iframe.onload = () => {
			this.loading = false;
			this.send();
		};
	},

	methods: {
		refresh() {
			this.iframe.src = this.url;
		},
		send() {
			// 向子页面发送数据
			let token = localStorage.getItem("token");

			if (!token) {
				console.error("token错误，检查登录状态");
				return;
			}

			token = token.slice(1, token.length - 1);

			let data = {
				token: token,
				dbName: this.dbName,
				tableName: this.tableName
			};

			let d = JSON.stringify(data);

			this.iframe.contentWindow.postMessage(d, "*");
		}
	}
};
</script>

<style lang="scss" scoped>
.c-0 {
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;

	.c-1 {
		display: flex;
		flex-direction: row;
	}

	.c-2 {
		flex-grow: 1;

		iframe {
			height: 100%;
			width: 100%;
		}
	}
}
</style>
