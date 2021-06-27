<template>
	<div v-loading="loading" class="page-iframe" element-loading-text="拼命加载中">
		<iframe :src="url" frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			url: "http://127.0.0.1:8090/adminer-z.html"
		};
	},

	watch: {},

	mounted() {
		const iframe = this.$el.querySelector("iframe");
		this.loading = true;

		iframe.onload = () => {
			this.loading = false;

			// 向子页面发送数据
			let token = localStorage.getItem("token");
			token = token.slice(1, token.length - 1);
			iframe.contentWindow.postMessage(token, "*");
		};
	}
};
</script>

<style lang="scss" scoped>
.page-iframe {
	iframe {
		height: 100%;
		width: 100%;
	}
}
</style>
