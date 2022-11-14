// let number1, number2;
// let arr = [100, 200, 300, 400];
// //destructing öncesi
// // number1 = arr[0];
// // number2 = arr[1];

// //sonrası
// [number1, number2] = arr;
// console.log(number1, number2);

// [number1, number2, ...kalanlar] = arr;
// console.log(kalanlar);

// const numbers = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   e: 50,
// };

// // const {a:n1,c:n2,e:n3} = numbers;
// // console.log(n1 + n2 + n3); //90

const person = {
  name: "varol",
  year: 1985,
  salary: 10000,
  showInfos: () => console.log("bilgiler gösteriliyor..."),
};

const {
  name: isim,
  year: yil,
  salary: maas,
  showInfos: bilgilerigoster,
} = person;

console.log(isim, yil, maas);
bilgilerigoster();
