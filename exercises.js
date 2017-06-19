//Do not change any of the function names

function getBiggest(x, y) {
	if (x === y){
		return x;
	}
	else if (x > y){
		return x;
	}
	else return y;
}

function greeting(language) {
	if (language === 'German'){
		return 'Guten Tag!';
	}
	else if (language === 'English'){
		return 'Hello!';
	}
	else if (language === 'Spanish'){
		return 'Hola!';
	}
	else return 'Hello!';
}

function isTenOrFive(num) {
	if (num === 10 || num === 5){
		return true;
	}
	else return false;
}

function isInRange(num) {
	if (num < 50 && num > 20){
		return true;
	}
	else
		return false;
}

function isInteger(num) {
	if (num % 1 === 0){
		return true;
	}
	else
		return false;
}

function fizzBuzz(num) {
	if (num % 15 === 0){
		return 'fizzbuzz';
	}
	else if (num % 3 === 0){
		return 'fizz';
	}
	else if (num % 5 === 0){
		return 'buzz';
	}
	else return num;
}

function isPrime(num) {
	if (num < 2){
		return false;
	}

	for (var i = 2; i < num; i++){
		if (num % i === 0){
			return false;
		}
		return true;
	}


  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
	return arr[arr.length - 1];
 }

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
	for (var i = 0; i < arr.length; i++){
			arr[i] += 1;
	}

	return arr;
  //arr is an array of integers
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
	arr.push(item);
	return arr;
}

function addItemToFront(arr, item) {
	arr.unshift(item);
	return arr;
}

function wordsToSentence(words) {
	return words.join(' ');
}

function contains(arr, item) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === item){
			return true;
		}
	}

	return false;
}

function addNumbers(numbers) {
	var addedNumbers = 0;

	for (var i = 0; i < numbers.length; i++){
		addedNumbers += numbers[i];
	}

	return addedNumbers;
}

function averageTestScore(testScores) {
	var total = 0;

	for (var i = 0; i < testScores.length; i++){
		total += testScores[i];
	}
	return total /= testScores.length;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
	return Math.max.apply(null, numbers);

  //numbers is an array of integers
  //return the largest integer
}

function makeCat(name, age) {
	var cat = {
		name: name,
		age: age,
		meow: function() {
			return 'Meow!';
			}
		};
	return cat;

  //create a new object with a name property with the value set to the name argument
  //add an age property to the object with the value set to the age argument
  //add a method called meow that returns the string 'Meow!'
  //return the object
}

function addProperty(object, property) {
	object[property] = null;
	return object;
  //add the property to the object with a value of null
  //return the object
  //note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
	object[method]();
  //method is a string that contains the name of a method on the object
  //invoke this method
  //nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
	return mysteryNumberObject.mysteryNumber * 5;
  //mysteryNumberObject has a property called mysteryNumber
  //multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
	delete object[property];
	return object;
}

function newUser(name, email, password) {
	var user = {
		name: name,
		email: email,
		password: password
	};

	return user;
  //create a new object with properties matching the arguments passed in.
  //return the new object
}

function hasEmail(user) {
	if (user.email){
		return true;
	}
	else {
		return false;
	}
  //return true if the user has a value for the property 'email'
  //otherwise return false
}

function hasProperty(object, property) {
	if (object[property]){
		return true;
	}

	else {
		return false;
	}


  //return true if the object has the value of the property argument
  //property is a string
  //otherwise return false
}

function verifyPassword(user, password) {
	if (user.password === password){
		return true;
	}

	else {
		return false;
	}
  //check to see if the provided password matches the password property on the user object
  //return true if they match
  //otherwise return false
}

function updatePassword(user, newPassword) {
		user.password = newPassword;
		return user;
  //replace the existing password on the user object with the value of newPassword
  //return the object
}

function addFriend(user, newFriend) {
	user.friends.push(newFriend);
	return user;
  //user has a property called friends that is an array
  //add newFriend to the end of the friends array
  //return the user object
}

function setUsersToPremium(users) {
	for (var i = 0; i < users.length; i++){
		users[i].isPremium = true;
	}

	return users;
  //users is an array of user objects.
  //each user object has the property 'isPremium'
  //set each user's isPremium property to true
  //return the users array
}

function sumUserPostLikes(user) {
	var sum = 0;

	for (var i in user.posts){
		sum += user.posts[i].likes;
	}

	return sum;

  //user has an array property called 'posts'
  //posts is an array of post objects
  //each post object has an integer property called 'likes'
  //sum together the likes from all the post objects
  //return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
	storeItem.calculateDiscountPrice = function() {
		return storeItem.price - (storeItem.price * storeItem.discountPercentage);
	};
	return storeItem;
}
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  //example:
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)



//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};