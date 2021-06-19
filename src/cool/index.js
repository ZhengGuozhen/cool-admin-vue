import Crud from "cl-admin-crud";
import Theme from "cl-admin-theme";

export default {
	modules: [
		// 基础模块
		"base",
		// 文件上传
		{
			name: "upload",
			options: {
				icon: "el-icon-picture",
				text: "选择图片"
			}
		},
		{
			name: "crud",
			value: Crud,
			options: {
				crud: {
					dict: {
						sort: {
							prop: "order",
							order: "sort"
						}
					}
				}
			}
		},
		// 客服聊天
		"chat",
		// 任务管理
		"task",
		// 复制指令
		"copy",
		// 省市区选择
		"distpicker",
		// 示例页
		"demo",
		// 主题切换
		{
			name: "theme",
			value: Theme
		},
		// @zgz 外部模块，配置后，权限组件会自动添加相关元素
		"z-module"
	]
};
