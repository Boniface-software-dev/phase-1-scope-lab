// Write your solution in this file!
//customerName: Declare a variable in global scope called customerName using the var
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}   

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}   

const leastFavoriteCustomer = 'bob';    

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'kim';
}