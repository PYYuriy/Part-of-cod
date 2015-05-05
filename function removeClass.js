function cN (obj, str) {
	var arr = obj.className.split(' ');

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == str) {
			arr.splice(i, 1) ;
			i--;
		}
	}
	 obj.className = arr.join(" ");

}
var obj = {
	className:'new string exist, every body know it'
}
cN(obj,"string");
cN(obj,"body");
alert(obj.className);