const bubbleSort = () => {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = 0; i < arr.length; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
		}
	}
	return arr;
};

module.exports = bubbleSort;
