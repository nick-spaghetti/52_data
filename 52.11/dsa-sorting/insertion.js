const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let currentValue = arr[i];
		for (var j = i - 1; j > -1 && arr[i] > currentValue; j--) {
			arr[i + 1] = arr[i];
		}
		arr[j + 1] = currentValue;
	}
	return arr;
};

module.exports = insertionSort;
