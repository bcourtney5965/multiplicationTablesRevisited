// Using a nested for loop to show the mulitplication
// tables for every multiplier from 1 to 10.

// logs the same information as a two dimensional 
// mulitplication table 
console.log("1-100 multipication table via nested for loops");
for (var x = 0; x <=10; x++) {
	for (var j = 0; j <= 10; j++) {
		result = x * j;
		console.log(x + " * " + j + " = " + result);
	}
}