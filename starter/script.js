'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

let arr = ['a','b','c','d','e'];
//slice method without changing the array

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
//shallow copy
console.log(arr.slice());
console.log([...arr]);

//Splice method(mutates the original array)
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1,2); //arr.splice(startingposition, #ofelements wants to delete)
console.log(arr);

//reverse(mutates the original array)
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

//Join
console.log(letters.join(' - '));


//The for each method for looping array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i,movement] of movements.entries()){
  if(movement > 0 )
  console.log(`Movement ${i + 1}: you deposited ${movement}`);
  else
  console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
}
//each iteration of foreach, the callback function is called 
//and each element is passed as argument(curr,curr_index,entrie_array)
movements.forEach(function(movement, i, array){
  if(movement > 0 )
  console.log(`Movement ${i + 1}: you deposited ${movement}`);
  else
  console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
})

//difference(cant break out using continue and break in for each loop)

//for each of map and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});

//Bankist App

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a,b) => a - b):movements;
    movs.forEach(function(mov,i){
    const type = mov > 0 ? 'deposit':'withdrawal';
    //use template literals
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}



///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkage = function(item, i){
  if(item >= 3)
  console.log(`Dog number ${i + 1} is an adult, and is ${item} years old`);
  else
  console.log(`Dog number ${i + 1} is still a puppy 🐶`);
}
const checkDogs = function(dogsJuila, dogsKate){
  const truedogsJulia = dogsJuila.slice(1,-2);
  const truedogKate = dogsKate.slice();
  truedogsJulia.forEach(checkage);
  truedogKate.forEach(checkage);

}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);

//map, filter,reduce

//map loops an array and call function which creates a new array
//filter, filter the elements inside an array
//reduce elements to one single, like snowballing 


const eurtoUsd = 1.1;
const movementsUSD = movements.map(function(mov){
  return mov * eurtoUsd;
})

console.log(movementsUSD);

const movementUSDFOR = [];
for(const mov of movements){
  movementUSDFOR.push(mov * eurtoUsd);
}

console.log(movementUSDFOR);

const movementsUSD2 = movements.map(mov =>
mov * eurtoUsd
)


const temp = movements.map((mov,i,arr) => {
  if(mov > 0)
  return `Movement ${i + 1}: you deposited ${mov}`;
  else
  return`Movement ${i + 1}: you withdraw ${Math.abs(mov)}`;
})

console.log(temp);//this is an array


const usernamegenerator = function(accounts){

  accounts.forEach(acc => {
    const temp = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('');
    acc.username = temp;
  });
}


usernamegenerator(accounts);

const deposits = movements.filter(mov => mov > 0);

console.log(movements);
console.log(deposits);

//reduce

const balance = movements.reduce(function(accumulative, curr, i, arr){
  return accumulative + curr;
},0)// 0 is the initial value for the cumulator

console.log(balance);

let balance_all = [0,0,0,0];
const calPrintBalance = function(movements){
  const balance = movements.reduce(function(accumulative, curr, i, arr){
    return accumulative + curr;
  },0);
  labelBalance.textContent =`${balance} EUR` ;
}



//other stuff of reduce

const max_value = movements.reduce(function(acc,curr){
  if(curr > acc)
    return curr;
  else
    return acc;
},movements[0]);



// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/


const calcAverageHumanAge = function(ages){
  const converted = ages.map(function(age){
    if(age <=2)
      return 2 * age;
    else
      return 16 + age * 4;
  });
  
  const excluded = converted.filter( age => age >= 18);
  
  const average = excluded.reduce(function(acc,item){
      return acc += (item/excluded.length);
  },0);
  console.log(average);
}


//Magic of chaining of these three methods



const calculateSummary = function(movements, ir){
const calsummaryin = movements.filter(mov => mov > 0).reduce((acc,mov) => acc + mov, 0);
labelSumIn.textContent = calsummaryin;

const calsummaryout = movements.filter(mov => mov < 0).reduce((acc,mov) => acc + mov, 0);
labelSumOut.textContent = Math.abs(calsummaryout);

const interest = movements.filter(mov => mov > 0).map( mov => (mov * ir * 0.01)).filter(item => item >= 1).reduce((inter,mov) => inter + mov,0);
console.log(interest);
labelSumInterest.textContent = interest;


};


//finds methods
//return the first such elements satisifies the conditons
//filter returns new array whereas find returns 1 element
movements.find(mov => mov < 0)

const account = accounts.find(acc => acc.owner === 'Jessica Davis');//powerful for arrya of objects

console.log(account);

const refreshpageValue = function(currentAccount){
  displayMovements(currentAccount.movements);
    
  //display summary
  calculateSummary(currentAccount.movements, currentAccount.interestRate);
  calPrintBalance(currentAccount.movements);  
}
let currentAccount;

btnLogin.addEventListener('click', function(e){
  //by default the event listener will just refresh the page, and we want to prevent that
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    console.log('LOGIN');
    //display UI and welcome message

    labelWelcome.textContent = `Welcome to Bankist, ${currentAccount.owner}`;
  //display balance
  containerApp.style.opacity = 100;
  //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();//get ride of the cursal
    refreshpageValue(currentAccount);
  }else{
    console.log('FAILED');
  }//valuie is always a string
  
})

//The reason is because a button inside a form has its type 
//implicitly set to submit. the Spec says that the first button 
//or input with type="submit" is what is triggered in this situation. 
//If you specifically set type="button", then it's removed from consideration by the browser.


//implementing transfering functionality

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const current_user_balance = currentAccount.movements.reduce(function(accumulative, curr, i, arr){
    return accumulative + curr;
  },0);
  console.log(current_user_balance);
  if(inputTransferTo.value === currentAccount.username){
    alert('Invalid username');
    inputTransferTo.value = '';
  }
  if(inputTransferAmount.value <= 0 || inputTransferAmount.value > current_user_balance){
    alert("There is not enough money in your balance");
    inputTransferAmount.value = '';
  }
  const destination_input = inputTransferTo.value;
  const transferred = Number(inputTransferAmount.value);
  currentAccount.movements.push(transferred * -1);
  const destination_account = accounts.find(acc => acc.username === destination_input);
  destination_account?.movements.push(transferred);
  refreshpageValue(currentAccount);
  inputTransferTo.value='';
  inputTransferAmount.value = '';

});

//find index for deleting an account, need an callback function

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(Number(inputClosePin.value) === currentAccount.pin && inputCloseUsername.value === currentAccount.username){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index,1);
    alert("You have successfully deleted your account");
    containerApp.style.opacity = 0;
  }
  else{
    alert("Failed to authenticate the credentials, Please log in again");
    containerApp.style.opacity = 0;
  }
});


//some methods

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every methods(returns true if all values inside the array returns true)

//flat method(flatten the array by unrolling it, but only works for 1 level by default)
//it does take arguemnts to unroll it deeper

/*const arr = [[1,2],[3,4]];
console.log(arr.flat());

const arr2 = [[[1,2]]];
console.log(arr2.flat(2));

//we map and flat the results(combine flat and map methods for better performance)
//you cant go deeper

//rr.flatmap(function());

//built-in sort methods(only works correct for string type!!!)
//need a comparator function
//if call back returns value lkess than 0, a will be put before b

const owners = ['Jonas','Zach'];

movements.sort((a,b) => {
  if(a > b)
    return 1;
  else
    return -1;
})
*/
let state_sorted = false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  if(!state_sorted){
  displayMovements(currentAccount.movements,true);
    state_sorted = true;
}else{
  displayMovements(currentAccount.movements);
  state_sorted = false;
}
});


//creating and filling array
//reserve 7 spots for the array
const x = new Array(7);

//fill the array
//x.fill(1,start,end);//fill(value,start,end)
//this is a constructor
Array.from({length:7}, () => 1);

//[1,1,1,1,1,1]

Array.from({length:7},(_,i) => i + 1);//can also sued like a call back function

//also capable of converting array like structures to array(queryselectorall returns a node list which is not an array at all, but we can use this)



const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

