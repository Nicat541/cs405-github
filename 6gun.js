function printDivisors(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

// Məsələn:
printDivisors(12); //1, 2, 3, 4, 6, 12


function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
  }
  
  // Məsələn:
  console.log(countDivisors(12)); // 6


  function upperStr(str) {
    return str.toUpperCase();
  }
  
  // Məsələn:
  console.log(upperStr("salam")); // "SALAM"

  function power(a, b) {
    return Math.pow(a, b); // və ya: a ** b
  }
  
  let base = parseInt(prompt("Birinci ədədi daxil edin:"));
  let exponent = parseInt(prompt("İkinci ədədi daxil edin:"));
  
  console.log(power(base, exponent));



  function convert(str) {
    let result = "";
    for (let char of str) {
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }
  
  // Məsələn:
  console.log(convert("SalamNecesen")); // "SAlAMnECESEN"
  
  

  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

  if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
  }

  if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
  }

  const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}


const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  // 1. Reverse
  countries.reverse();
  console.log("Reversed:", countries);
  
  countries.reverse();
  
  const canadaIndex = countries.indexOf('Canada');
  if (canadaIndex !== -1) {
    countries.splice(canadaIndex, 2, 'Azerbaijan');
  }
  
  console.log("Modified:", countries);

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
  const backEnd = ['Node','Express', 'MongoDB'];
  
  const fullStack = frontEnd.concat(backEnd);
  
  console.log(fullStack);



  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


const firstThree = itCompanies.slice(0, 3);
console.log("First 3:", firstThree);


const lastThree = itCompanies.slice(-3);
console.log("Last 3:", lastThree);


const mid = Math.floor(itCompanies.length / 2);
const middle = itCompanies.length % 2 === 0 
  ? itCompanies.slice(mid - 1, mid + 1) 
  : itCompanies.slice(mid, mid + 1);
console.log("Middle:", middle);


const sortedCompanies = [...itCompanies].sort();
console.log("Sorted:", sortedCompanies);


itCompanies.forEach(company => {
  console.log(company.toUpperCase());
});


if (itCompanies.includes("Google")) {
  console.log("Google mövcuddur");
} else {
  console.log("Google tapılmadı");
}


for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    console.log("2 və ya daha çox 'o' olan:", company);
  }
}



function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }

  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false


  const products = [
    { id: 1, title: "Smartphone", price: 799.99 },
    { id: 2, title: "Laptop", price: 1299.99 },
    { id: 3, title: "Coffee Maker", price: 99.99 },
    { id: 4, title: "Headphones", price: 199.99 },
    { id: 5, title: "Smart TV", price: 699.99 }
  ];
  
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  const average = total / products.length;
  
  console.log("Cəm:", total.toFixed(2));
  console.log("Orta:", average.toFixed(2));