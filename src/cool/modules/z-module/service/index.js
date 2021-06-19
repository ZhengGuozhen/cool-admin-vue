import { Service, Permission } from "cl-admin";

@Service("")
class Test {
	@Permission("test/1")
	test1() {}

	@Permission("test/2")
	test2() {}

	@Permission("test/3")
	test3() {}

	@Permission("test/4")
	test4() {}
}

export default {
	test: new Test()
};
