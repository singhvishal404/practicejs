// average of an array
const myarr = [1, 2, 3, 4, 5];
sum = 0;

for (let index = 0; index < myarr.length; index++) {
  sum += myarr[index];
}
const average = sum / myarr.length;
console.log(average);
