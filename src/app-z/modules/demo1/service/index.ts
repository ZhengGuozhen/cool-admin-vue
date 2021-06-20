import { Service, Permission } from "/@/core";

@Service("demo1")
class Demo1 {
	@Permission("test/1")
	test1() {}

	@Permission("test/2")
	test2() {}

	@Permission("test/3")
	test3() {}

	@Permission("test/4")
	test4() {}
}

export default Demo1;
