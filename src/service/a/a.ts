import { BaseService, Service, Permission } from "/@/core";

@Service("base/sys/department")
class A extends BaseService {
	@Permission("order")
	order(data: any) {
		return this.request({
			url: "/order",
			method: "POST",
			data
		});
	}
}

export default A;
