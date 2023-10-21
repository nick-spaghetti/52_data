const a = () => {
	console.log("hello");
	b();
	console.log("coding");
};

const b = () => {
	console.log("world");
	c();
	console.log("love");
};

const c = () => {
	console.log("i");
};

const count = () => {
	// let n = 1;
	// while (n <= 3) {
	// 	console.log(n);
	// 	n += 1;
	// }
	if (n > 3) return;
	console.log(n);
	count(n + 1);
};

count();

const sum = (nums) => {
	if (nums.length === 0) return 0;
	return nums[0] + sum(nums.slice(1));
};

data = [1, 2, 3];
const doubler = (nums) => {
	for (let n of nums) {
		console.log(n * 2);
	}
};

const doubler = (nums) => {
	for (let n of nums) {
		if (Array.isArray(n)) {
			for (let o of n) console.log(o * 2);
		} else {
			console.log(n * 2);
		}
	}
};

const doubler = (nums) => {
	for (let n of nums) {
		if (Array.isArray(n)) {
			for (let o of n) {
				if (Array.isArray(o)) {
					for (let p of o) {
						console.log(o * 2);
					}
				} else {
					console.log(o);
				}
			}
		} else {
			console.log(n * 2);
		}
	}
};

const doubler = (nums) => {
	stack = nums.reverse();
	while (stack.length > 0) {
		let n = stack.pop();
		if (Array.isArray(n)) {
			for (let inner of n.reverse()) {
				stack.append(inner);
			}
		} else {
			console.log(n * 2);
		}
	}
};

const doubler = (nums) => {
	for (let n of nums) {
		if (Array.isArray(n)) {
			doubler(n);
		} else {
			console.log(n * 2);
		}
	}
};

const sum = (nums) => {
	if (nums.length === 0) return 0;
	return nums[0] + sum(nums.slice(1));
};

const sum = (nums, i = 0) => {
	if (i === nums.length) return 0;
	return nums[i] + sum(nums, i + 1);
};
