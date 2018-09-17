module.exports =function getZerosCount(number, base) {
	var zeros=0;
	let count = base;
	let myDivider=base;

  var arrAllDeviders= function(base){
		let myArr=[];
		for (let i = 1; i <= base; i++) {
				if (base%i == 0) {
					myArr.push(i)
					}
			}
		return myArr
  };

  var arrMyDeviders= function(base){
		
		var allDeviders=[];
		for (let j = 0; j <= base; j++) {
			allDeviders[j] = 0;
			for (let i = 0; i <= base; i++) {
				if (j%i == 0) {
					allDeviders[i] = allDeviders[i]+1;
					}
			}	
		}
		return allDeviders
  };

  var findMydevider = function(count){

		let myArr=arrAllDeviders(count);
		let allDeviders=arrMyDeviders(count);

		count = count-1;
		for (let i = 0; i < myArr.length-1; i++) {
			
			if(count>allDeviders[myArr[i]]){
				count = allDeviders[myArr[i]];
				myDivider = allDeviders[count];
			}
		}

		for (var i = 2; i < myDivider; i++) {
			if (myDivider%i == 0){
				findMydevider(myDivider);
			}

		}
		return myDivider
   }

	var howManyZeros = function(number, myDivider){

		for (let i = 1; i < 100; i++) {
			let numberDivide = number / Math.pow(myDivider,i);
			
			if (numberDivide >= 1){
				zeros += Math.floor(numberDivide);
			}else{
				break;
			}
		}

	}

	var myDivider1 = findMydevider(count);
	howManyZeros(number, myDivider1);

	return zeros
}