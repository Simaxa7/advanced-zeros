module.exports = function getZerosCount(number, base) {
	let myBase = base;
	let myNumber = number;
	// console.log("number",number);
	// console.log("base",base);

// находим все простые делители и их количество
   var allMyDeviders= function(myBase){
		let myArrSimple = [];
		let theNewBase = 0;

		for (let i = myBase; i >= 2; i--) {
			// console.log("i=",i);
			if (myBase % i == 0) {
				theNewBase = myBase / i;
				let unick = 0;

				for (let j = 2; j <= theNewBase ; j++) {
					if (theNewBase%j == 0){
						unick++;
					}
				}

				if(unick==1){
					myArrSimple.push(theNewBase);
				}
			}
		}
			// console.log(myArrSimple.length);
		if(myArrSimple.length==0){myArrSimple.push(myBase)}
			// console.log(myArrSimple.length);

		return myArrSimple
  };

	var myDividers = allMyDeviders(myBase);

  function powInAllMyDeviders(myBase){
		const pow=[];
		for (let i = 0; i < myDividers.length; i++) {
		let count = 0

  		let changeBase = myBase;
			while(changeBase%myDividers[i]==0){
				changeBase=changeBase/myDividers[i];
				count++;
			}
			pow.push(count);
			// console.log("pow=",pow);
			}	
		
		return pow
  };

// console.log("allMyDeviders(myBase)", myDividers);

var myPow = powInAllMyDeviders(myBase);
// console.log("myPow",myPow)


function myWhile(number1, el, pow) {

				let zeros = 0;

				while(number1 >= el){
					number1 = number1 / el;
					zeros += Math.floor(number1);
					// console.log("zeros",zeros)
				}
				zeros= Math.floor(zeros/pow);

				return zeros
	
}





	var howManyZeros = function(number, myDividers, myPow){
			
		let answerArr = [];
			for (let i = 0; i < myDividers.length; i++){
				let el = myDividers[i];
				let pow = myPow[i];
				let number1=number;
				answerArr.push(myWhile(number1, el, pow));
			}
			return answerArr
		}

		let arr =  howManyZeros(number, myDividers, myPow);
	// console.log("answerArr", arr);

let Yes=arr[0];
 for (let k = 0; k < arr.length; k++) {
 	
 	if(Yes>arr[k]){Yes=arr[k]} 	
 }

// console.log("********",Yes)
	return Yes
}

// const zerosCount = getZerosCount(700, 120);




 // it('9', () => {
    // const zerosCount = getZerosCount(60559525, 147);
    // assert.equal(zerosCount, 5046624);


  // it('8', () => {
    // const zerosCount = getZerosCount(47815664, 104);
    // assert.equal(zerosCount, 3984635);
  // });

  // it('7', () => {
    // const zerosCount = getZerosCount(93443454, 194);
    // assert.equal(zerosCount, 973368);


  // it('6', () => {
    // const zerosCount = getZerosCount(98707942, 218);
    // assert.equal(zerosCount, 913961);


  // it('5', () => {
    // const zerosCount = getZerosCount(71398757, 12);
    // assert.equal(zerosCount, 35699370);

// const zerosCount = getZerosCount(14423541, 193);
    // assert.equal(zerosCount, 75122);


 // const zerosCount = getZerosCount(82557730, 84);
    // assert.equal(zerosCount, 13759618);

// getZerosCount(46899647, 232);
    // assert.equal(zerosCount, 1674985);

// getZerosCount(10, 10);
 // assert.equal(zerosCount, 2);











