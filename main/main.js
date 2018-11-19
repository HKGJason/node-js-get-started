// Write your cade below:
function caclRemaindar(i,j) {
	return i%j;
};

function caclSum(arr) {
	var count = 0;
	for (var i = 0; i<arr.length;i++){
		count = count + arr[i];
	}
	return count;
	
};

function caclSumInConditon(arr, num) {
	var count = 0;
	for (var i = 0; i<arr.length;i++){
		if (arr[i]<num)
		count = count + arr[i];
	}
	return count;
	
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}