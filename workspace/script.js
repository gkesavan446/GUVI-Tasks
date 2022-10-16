
//Anonymous Function
//IIFE Function
// 8. Rotate an array by k times

//Anonymous Function
var Rotate=function(a, n, k)
{ k = k % n;
	for (let i = 0; i < n; i++) {
		if (i < k) {
			console.log(a[n + i - k] + " ");
		}
		else {
			console.log((a[i - k]) + " ");
		}
	}
	}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 3;
Rotate([1, 2, 3, 4, 5], N, K);

//IIFE Function

(function(a, n, k)
{ k = k % n;
	for (let i = 0; i < n; i++) {
		if (i < k) {
			console.log(a[n + i - k] + " ");
		}
		else {
			console.log((a[i - k]) + " ");
		}
	}
	})([1, 2, 3, 4, 5], N, K);

 