function(){
var arr= [3, 'a','a','a', 2, 3, ,'a', 3, 'a', 2, 4, 9, ]; 
var i;
var j;
var counter = 0; 
var element;
for ( i=0 ; i<arr.length; i++ ){
	var counter = 1;
	for (j= i+1 ; j <arr.length-1; j++){
		if ( arr[i] == arr[j]){
			counterA++; 
			var elementA = arr[i];
		}
	}if ( counterInloop > counter ){
		element = elementA
		counter = counterA
	}
}
return{
	element,
	counter
}
}

