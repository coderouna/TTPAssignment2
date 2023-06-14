//myEach
function myEach(array, callback){
	for(let i=0; i< array.length; i++){
		callback(array[i]);
	}
	
}

//myMap
function myMap(array, callback){
	const newMap = [];

	for(let i=0; i< array.length; i++){
		newMap.push(callback(array[i]));
	}

	return newMap; 
}

const array1 = [1, 2, 3];
const array2 = [2, 4, 6];


//myFilter
function myFilter(array, callback){
	const result = [];
	for(let i=0; i< array.length; i++){
		if(callback(array[i])===true){
			result.push(array[i]);
		}
	}
	return result;
}


//mySome
function mySome(array, callback){
	for(let i=0; i< array.length; i++){
		if(callback(array[i])===true){
			return true;
		}else{
			return false;
		}
	}
}


//myEvery
function myEvery(array, callback){
	let boolean = true;
	for(let i=0; i< array.length; i++){
		if(callback(array[i])!==true){
			boolean = false;
		}
	}
	return boolean;
}


//myReduce
function myReduce(array, callback, initial){
	const acc = 0; const curr = 0;
	for(let i=0; i<array.length; i++){
		if(typeof initial){
			acc = callback(initial, curr);
		}
	}
	
}


//myIncludes
function myIncludes(array, target){
	for(let i=0; i< array.length; i++){
		if(array[i]===target){
			return true;
		}
		
	}
	return false;
}


//myIndexOf
function myIndexOf(array, target){
	for(let i=0; i< array.length; i++){
		if(array[i]===target){
			return i;
		}
	}
	return -1;
}

//myPush
function myPush(array, elementToAdd){
	array[array.length] = elementToAdd;
	return array.length;
}

//unshift / lastindexof
function myUnshift(array, target){
	for(let i=array.length-1; i>=0; i--){
		if(array[i]===target){
			return i;
		}
	}
	return -1;
}


//grabkeys
function grabKeys(object){
	const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

//grab values
function grabValues(object){
	const result = [];
  	for (let key in object) {
    	if (object.hasOwnProperty(key)) {
      		result.push(object[key]);
    	}
  	}
  	return result;
}


//sum of a range: 
function range(start, end){
	let array = [];
	for(let i=start; i<=end; i++){
		array.push(i);
	}
	return array;
}

function sum(array){
	let sum = 0;
	for(let i=0; i<array.length; i++){
		sum+= array[i];
	}
	return sum;
}


//reverse orders:
function reverseArray(array){
	const newArray = [];
	for(let i=array.length-1; i>=0; i++){
		newArray.push(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace(array){
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }
}


//zeroes 
function moveZeros(nums){
 	let count = 0; 
   
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
          }
        }

    while (count < nums.length) {
        nums[count] = 0;
        count++;
    }
      
    return nums;
      
}

const array3 = [0,1,0,3,12];
// console.log(array3.sort());
console.log(moveZeros(array3));
// console.log(array3);













// function sum()