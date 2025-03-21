// const obj1 = {}
// console.log(obj1);

// const fruits = new Object()
// console.log(fruits);
// console.log(typeof fruits);

// const mevalar = {
//     nomi: "Olma", //property key : value
//     narxi: 15000,
//     rangi: "qizil",
//     "shirin mevami": true,
//     2: "ikki",
//     2:"ikki str"
// };

// console.log(mevalar);
// console.log(mevalar.nomi);
// console.log(mevalar["nomi"]);

// console.log(mevalar['shirin mevami']);
// mevalar.narxi = 10000
// mevalar.madeIn = "UZB"
// delete mevalar[2]
// delete mevalar.rangi
// delete mevalar[true]
// console.log(mevalar);

// console.log(box);
// console.log(box.color[1]);
// console.log(box.size.height);
// if("size" in box && "leghth" in box.size) {
//     console.log(box.size.leghth);
// }

// for (const key in box) {
//     console.log(key);
//     console.log(box[key]);
// }

// const box = {
//   material: "paper",
//   color: ["white", "green", "blue"],
//   size: {
//     width: 20,
//     height: 20,
//     leghth: 10,
//   },
// };

// const quti = box
// quti.material = "iron"
// console.log(box);
// console.log(box == quti);

// const box1 = Object.assign( {price:100}, box);
// box1.material = "wood"
// console.log(box);
// console.log(box1)
// console.log(box == box1);

// const box2 = {};
// Object.assign(box2, box);
// console.log(box == box2);

// const box3 = {... box1, ...quti, ...box2};
// console.log(box3);

// const player = {
//   name: "Abbos",
//   number: 21,
//   age: 22,
//   boots: ["nike", "adidas"],
//   aboutPlayer() {
//     console.log(`Ismi: ${this.name}, yoshi: ${this.age}`);
//   },
//   aboutPlayer2() {
//     const inner = () => {
//         console.log(`Ismi: ${this.name}, yoshi: ${this.age}`);
//     }
//     return inner()
//   },
// };

// console.log(player);
// player.aboutPlayer();
// player.aboutPlayer2();

// const newPlayer = {...player};
// newPlayer.name = "Abduqodir";
// newPlayer.age = 21;

// newPlayer.aboutPlayer()

// const car = {
//   marka: "chevrolet",
//   model: "gentra",
//   year: 2019,
//   speed: 220,
//   color: "qora",
// };
// console.log("km" in car);

// for(const key in car) {
//     if(typeof car[key] == "string") {
//         console.log(key, car[key]);
//     }
// }
// for (const key in car) {
//   if (typeof car[key] == "number") {
//     console.log(key, car[key]);
//   }
// }

// const hodimlar = {
//     salim: 21,
//     karim: 25,
//     nodir: 31,
//     qodir: 27,
// };

// let count = 0;
// let summa = 0;
// for(const key in hodimlar) {
//     summa += hodimlar[key];
//     count++;
// }

// console.log(Math.floor(summa/count));

// const user = {
//     last_name: "Komilov",
//     first_name: "Zafar",
//     getFirstName() {
//         return this.first_name;
//     },
//     setFirstName(newName) {
//         this.first_name = newName;
//     },
//     get firstName() {
//         return this.first_name;
//     },
//     set firstName(newName) {
//         this.first_name = newName;
//     },
// };
// console.log(user);
// user.setFirstName("Zafarjon")
// user.firstName = "Zafarella";
// console.log(user.getFirstName());
// console.log(user.first_name)
// console.log(user.firstName)

// const product = {
//     nomi: "shaftoli",
//     miqdori: "20",
//     narxi: 14000,
//     productInfo (){
//         console.log(`name: ${product.nomi}\nquantity: ${product.miqdori} kg\nprice ${product.narxi} so'm`
//         );
//     },
//     set changePrice(newPrise) {
//         this.price = newPrise;
//     },
// };

// const tovar = {...product };
// tovar.changePrice = 20000;
// product.productInfo();
// tovar.productInfo();

