
// console.log("javascript connected? test!");

// VOORRAAD ARRAY MET TV'S

const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// console.log(inventory);

// -> Opdracht 1 - Array Methoden

//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

// * option 1

// const tvType = inventory.map((item) => {
//
//   return item.type;
//
// });
// console.log(tvType);




// //* option 2

//
// let allTvTypes = [];
// inventory.forEach(item => {
//
//   allTvTypes.push(item.type);
//
// });
//
// console.log(allTvTypes);


//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.


//* option 1:

// const soldOut = inventory.filter((item) => {
//
//   return item.originalStock === item.sold;
//
// });
//
// console.log(soldOut);


// * option 2: maar wat nou als je bij 2 op voorraad wil bestellen?
//  -> maak een variabele aan en koppel de filter-methode.
//  -> declareer wat je anonieme functie moet doen.
//  -> eerst moet het verschil van de stock uitgerekend worden.
//  -> daarna moeten de tv's die uitverkocht zijn gevonden worden.
//  -> return de array van uitverkochte tv's.
//  -> controleer in de terminal.

//
// const soldOut1 = inventory.filter((stock) => {
//
//   const onStock = stock.originalStock - stock.sold;
//
//   if (onStock === 0) {
//
//     return stock.brand;
//
//   }
//
// });
//
// console.log(soldOut1);



// //* option 3 - hier geeft hij net iets mooier uit? Push?

// let soldOuts = [];
//
// inventory.forEach(item => {
//   if ((item.originalStock - item.sold) === 0) {soldOuts.push(item.type); }
//
// });
//
// console.log(soldOuts);



//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

// 1. find? geeft maar een we hebben meerder met ambilight dus we gaan toch filter gebruiken - denk ik!
// 2.  if (ambilight === true)
  //return ambilight


// const hasAmbilights = inventory.filter((item) => {
//
//   return item.options.ambiLight === true;
//                                                                            // return item.options.ambiLight;
//
// });
//
// console.log(hasAmbilights);



//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.


// * option 1 - short version

// // * low to high
// const priceLowtohigh = inventory.sort ((a, b) => a.price - b.price);
// console.log(priceLowtohigh);


// *high to low
// const priceHightoLow = inventory.sort((a, b) => b.price - a.price);
// console.log(priceHightoLow);


//* option 2 - long version

// inventory.sort((a, b) => {
//   if (a.price < b.price) {
//     return -1;
//   }
//   if (a.price > b.price) {
//     return 1;
//   }
//   return 0;
// })
// console.log(inventory);


//* option 3 - hij geeft net iets beter?

// const sortByPrice = inventory.map((price) => {
//
//   return price.price
//   return price.price +  " " + price.brand + " " + price.type;
//
// });
//
// sortByPrice.sort((a,b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
//   return 0;
// });
//
// console.log (sortByPrice);



// -> Opdracht 2 - Elementen in de DOM plaatsen


//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

//total no of sold tvs = sum of inventory sold


// * option 1 - using function, this is handy as we can reuse it!

// function calculateTotal(banaan){
//
//   let totalSoldTv = 0;
//   for (let i = 0; i < inventory.length; i++) {
//
//     totalSoldTv += inventory[i].sold;
//     //totalSoldTvs = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
//
//   }
//
//   return totalSoldTv;
//
// }
//
// const result = calculateTotal(inventory);
// console.log(result);


// * option 2 - keep it simple!

// let totalSoldTvs = 0;
//
// for (let i = 0; i < inventory.length; i++) {
//
//   totalSoldTvs += inventory[i].sold;
//   //totalSoldTvs = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
//
// }
//
// console.log(totalSoldTvs)



// option 3 - with map function a bit confusing actually!

//   const totalSoldTelevisions = inventory.map((television) => {
//
//   return television.sold
//
// });
//
//   let totalSold = 0;
//   for (let i = 0; i < totalSoldTelevisions.length; i++) {
//
//   let television = totalSoldTelevisions[i];
//
//   totalSold = totalSold + television
//
// }
//
// console.log (totalSold);



//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

//stap 1: div aanroepen
//stap 2: hij moet op de browser komen
//stap 3: css gebruiken om te kleuren

// -> id maken in html en

// const element = document.getElementById("tv");
// // console.log("hallo");
// // element.textContent = `hallo`;
//
// // -> we hebben en variable eerste gemaakt voor h3
// const elementTitle = document.createElement("h3");
//
// elementTitle.setAttribute("class", "tvColor");
// elementTitle.textContent = `${result}`;
// element.appendChild(elementTitle);



//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// * option 1 - simple!

// let purchasedTvQty = 0;
// for (let i = 0; i < inventory.length; i++) {
//   purchasedTvQty += inventory[i].originalStock;
//   //purchasedTvQty = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
// }
// console.log(purchasedTvQty)


//* option 2 - using map function but a bit confusing may be?

// const totalTelevisionsInStock = inventory.map((totalInStock) => {
//   return totalInStock.originalStock
// });
//
// let totalStock = 0;
// for (let i = 0; i < totalTelevisionsInStock.length; i++) {
//
//   //option 1
//   totalStock += totalTelevisionsInStock[i];
//   //totalStock = totalTelevisionsInStock[0] + totalTelevisionsInStock[1] + ......totalTelevisionsInStock[7]
//
//   //option 2
//   // let television = totalTelevisionsInStock[i];
//   // totalStock = totalStock + television
//
// }
// console.log (totalStock);


//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

// const element1 = document.getElementById("tv");
// const elementTitle1 = document.createElement("h4");
//
// elementTitle1.setAttribute("class", "tvColor1");
// elementTitle1.textContent = `${purchasedTvQty}`;
// element1.appendChild(elementTitle1);


//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//
//  inventory.originalStock - inventory.sold;


// let toBeSoldTvQty = 0;
// for (let i = 0; i < inventory.length; i++) {
//   toBeSoldTvQty += inventory[i].originalStock - inventory[i].sold;
//   //tobeSoldTvQty = inventory[0].originalStock + inventory[1].originalStock + ......inventory[7].originalStock - inventory[0].originalStock + inventory[1].originalStock + ......inventory[7].originalStock
// }
//
// console.log(toBeSoldTvQty);
//
//
// const element2 = document.getElementById("tv");
// const elementTitle2 = document.createElement("h45");
//
// elementTitle2.setAttribute("class", "tvColor2");
// elementTitle2.textContent = `${toBeSoldTvQty}`;
// element2.appendChild(elementTitle2);



// Opdracht 3 - Array methoden en functies

// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// * option 1: met map methode

// const getBrands = inventory.map((getBrand) => {
//
//   return getBrand.brand;
//
// });
// console.log(getBrands);



//* option 2: Dit is een voorbeeld zonder(!) map methode:

// let brands = [];
//
// for (let i=0; i<inventory.length; i++) {
//   console.log(inventory[i].brand);
// }


//* option 3: push() - simple!

// let brands1 = [];
//
// for (let i=0; i<inventory.length; i++) {
//
//   brands1.push(inventory[i].brand);
//
// }
//
// console.log(brands1);



//Opdracht 4b: Schrijf de code uit 4a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!


// * option 1: function met push

// function tvBrandNames(input, field) {
//
//   let brand = [];
//   for (let i=0; i < input.length; i++) {
//
//     brand.push(input[i][field]);
//
//   }
//   return brand
// }
//
// const resultTvBrands = tvBrandNames(inventory, "brand");
// console.log(resultTvBrands);


//* option 2:

// function getBrands1(soldTvs){
//   let totalSoldTv = [];
//   for (let i = 0; i < soldTvs.length; i++) {
//
//     totalSoldTv += soldTvs[i].brand;
//
//                                                                       // totalSoldTv.push(input[i][field]);
//
//     // totalSoldTv += soldTvs[i].sold;
//     //totalSoldTvs = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
//
//   }
//
//   return totalSoldTv;
//
// }
// const result = getBrands1(inventory, "brand");
// console.log(result);



// * option 3: van sam goed bekijken, kortere manier!

// const fruit = ['banaan', 'sinaasappel', 'appel'];
// function tvBrand(tvs){
//     return tvs.map((tv) => {
//         return tv;
//     });
// }
// const outcome = tvBrand (fruit);
// console.log(outcome); // geeft banaan, sinaasappel, appel


// option 3 - hij werkt niet helemaal: oplossen?

// function televisionObjects(inventory) {
//   const getObjects = inventory.map((getObject) => {
//     return getObject;
//   });
//   return getObjects;
// }
// const outcome1 = televisionObjects(inventory);
// console.log(outcome1);




// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.


// option 1: simple!

// function tvType(object) {
//   let brand = object.brand;
//   let type = object.type;
//   let name1 = object.name;
//   return brand + ': ' + type + ': ' + name1
// }
//
// const outcome = tvType(inventory[2]) + (tvType(inventory[4]));
// console.log(outcome);


// * option 2: function method, combined with map method!
//
// function namesOfTelevisons (inventory) {
//   const stringOfTelevisions = inventory.map((stringOfTelevision) => {
//
//     return stringOfTelevision.brand + " " + stringOfTelevision.type + " - " + stringOfTelevision.name;
//
//   });
//
//   return stringOfTelevisions;
//
// }
// const result1 = namesOfTelevisons([inventory[2]]);
// const result2 = namesOfTelevisons([inventory[5]]);
// console.log(result1, result2);


//option 3: a bit confusing and very long!
// create function for inventory (tv) and properties (fields)

// function infoAboutTv(tv, fields) {
//   // create new array, which we want to see (for values of properties)
//   let arrValues = []
//   // to loop through array to search required properties (values))
//   fields.forEach(field => {
//     //to add to a new Array arrValues the properties (values) we want to see. Just add a new item to the end of new array.
//     arrValues.push(tv[field])
//   })
//   return '' +arrValues.join(' ')
// }
// //save the result in cost (actually right here we can specify with adding index nr to current array inventory, which TV we want to see all the values of properstie (inventory[0])
// const resultTvBrand = infoAboutTv(inventory[0] , ["brand", "type", "name"])
// console.log(resultTvBrand)




// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

// * option 1: using a function method, simple!

// function tvPrice(priceNumber) {
//
//   let price = '€' + priceNumber + ",-";
//
//   return price;
//
// }
//
// const outcome1 = tvPrice(inventory[0].price);                               // console.log(tvPrice(inventory[0].price))
// console.log(outcome1);
//



// * option 2: using a map method!

// const priceOfTelevisions = inventory.map((priceOfTelevision) => {
//
//   return "€" + priceOfTelevision.price + ",-"
//
// })
//
// console.log (priceOfTelevisions[2]);
//


// * option 3: using a function and a map method combined!

// function listOfPrices (inventory) {
//   const priceOfTelevisions = inventory.map((priceOfTelevision) => {
//     return "€" + priceOfTelevision.price + ",-";
//   });
//   return priceOfTelevisions;
// };
// const outcome4 = listOfPrices(inventory);
// const outcome5 = listOfPrices([inventory[0]]);
// const outcome6 = listOfPrices([inventory[2]]);
// console.log (outcome4, outcome5, outcome6);



// * option 3: using function and push method, a bit long and complicated!

// function priceTv(tv, fields) {
//
//   let arrPrices = [];
//
//   fields.forEach(field => {
//
//     arrPrices.push(tv[field]);
//
//   })
//
//   return "€" + arrPrices.join() + ",-";
//
// }
// const resultTvPrice = priceTv(inventory[0], ["price"]);
// console.log(resultTvPrice);




//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.


// * option 1: using map method, simple!

// const screenSizes = inventory.map ((screenSize) => {
//
//   return screenSize.availableSizes
//
// });
//
// const outcome3 = screenSizes;
// console.log (outcome3);



// * option 2: using function and map method combined!

// function sizesOfTelevisions (inventory) {
//   const screenSizes = inventory.map ((screenSize) => {
//     return screenSize.availableSizes
//   });
//   return screenSizes;
// }
// const outcome6 = sizesOfTelevisions([inventory[0]]);
// const outcome7 = sizesOfTelevisions([inventory[2]]);
// console.log (outcome6, outcome7);


// * option 3
//
// function tvSizes(arrInput){
//   let output = ""
//   for (let i = 0; i < arrInput.length; i++) {
//     const tvSizeInInch = arrInput[i];
//     const tvSizeInCm = tvSizeInInch * 2.54;
//     output = output + `${tvSizeInInch} inch ${tvSizeInCm} cm`
//   }
//   return output;
// }
// console.log(tvSizes(inventory[0].availableSizes))


// * option 4

// for (let i = 0; i < inventory.length; i++) {
//
//   for (let j = 0; j < inventory[i].availableSizes.length; j++) {
//
//     inventory[i].availableSizes[j] = ' ' + (inventory[i].availableSizes[j]) + ' inch ' +
//         '(' + (inventory[i].availableSizes[j] * 2.54) + ' cm)' + " | ";
//
//   }
// }
//
// console.log(inventory[3].availableSizes);





//Opdracht 5d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

// 5a + 5b + 5c

// * option 1: too simple?
// console.log(outcome, outcome1, outcome3);


//option 2: is this good? sam!

// const televisions = document.getElementById("television");
// // console.log(televisionString);
// televisions.textContent = outcome;
//
// const prices = document.getElementById("price");
// // console.log(televisionPrice);
// prices.textContent = outcome1;
//
// const sizes= document.getElementById("size");
// // console.log(televisionSizes);
// sizes.textContent = outcome3;

//Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

//function schrijven - alle tvs!

//option 1: simple - maar hoe kan ik alle tvs pakken? hij geeft undefined? - help sam! :(

function tvName5d (Object) {

  //mappen over je inventory of een voor loop

  let result = "";

  for (let i = 0; i < Object.length ; i++) {

    result = result + `${Object[i].brand} | ${Object[i].type} | ${Object[i].name} | ${Object[i].availableSizes} | ${Object[i].price}`;
    // result = result +  Object[i].brand + Object[i].type + Object[i].name + Object[i].availableSizes + Object[i].price;


  }

  return result;

  // let brand = Object.brand;
  // let type = Object.type;
  // let name = Object.name;
  // let size = Object.availableSizes;
  // let price = Object.price;
  //
  // return brand + " | " + type + " | " + name + " | " + size + " | " + " €" + price;

}

const result = tvName5d(inventory);
console.log(result);

// console.log(tvName5d(inventory[0]));





//option 2:

// -> The array parameter most be declared with the 'inventory' array of existing out of objects. the index parameter is optional! In this parameter you declare the index of the array to get a specified product!


// const printTv = (array, index) => { //empty array to put our product details in!
//
// let tvSets = [];
// // change the value of the before declared arrays with the help of 2 loops!
//
// for (let i = 0; i < array.length; i++) {
//
// tvSets[i] = " -> " + array[i].brand + ' | ' + array[i].type + array[i].name + " | " + '€' + array[i].price;
//
// } //if there is an index number declared we return the specified array with the if statement below.
//
// if (index || index === 0) { return tvSets[index] } // if not we return everything in stock.
//
// else { return tvSets.join(' ') } }
//
//
// const outcome = printTv(inventory)
// console.log(outcome);
//
// const outcome1 = printTv(inventory, 4)
// console.log(outcome1);






// * Bonusopdracht
// -> Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!


//drie knopppen maken in html die geven een id
//buttons aanroepen via get element id
//fucnties scrijven
// buttons event list opzetten -> click dan de funtie moet aangeroep woorden

































// let tvGenerator = [];
// inventory.forEach(item => {
//   tvGenerator.push(item.brand + ': ' + item.type + ': '
//       + item.name + '\n' + '€' + item.price + ',-' + '\n' + item.availableSizes.join(' ') + '\n')
// })
//
// console.log(tvGenerator);
//
//
// // (1) Sorteer op prijs
//
//
// const sortButton = document.getElementById('sort-button');
//
// inventory.sort((a, b) => a.price - b.price)
// let test = document.getElementById("test");
//
// function sortOnPrice() {
//
//   for (let i = 0; i < inventory.length; i++) {
//     test.innerHTML += `
// Prijs: ${inventory[i].price}
// `
//   }
// }
//
// sortButton.addEventListener('click', sortOnPrice);
//
//
// // (2) Ambilight TV's
//
// function myFunction2() {
//   const ambiLightTv = inventory.filter((item) => {
//     return item.options.ambiLight === true
//   })
//
//   for (let i = 0; i < ambiLightTv.length; i++) {
//     document.getElementById("Ambi").innerHTML += `Tv's met Ambilight:
// ${ambiLightTv[i].name}
// ${ambiLightTv[i].brand}
// €${ambiLightTv[i].price},-`;
//
//   }
//
// }
//
// // (3) uitverkochte exemplaren
//
// function myFunction1() {
//   document.getElementById("outOfStock").innerHTML = outOfStock;
// }
//
// let outOfStock = [];
//
// inventory.forEach(item => {if((item.originalStock - item.sold) === 0 )
//
//   outOfStock.push( '' + item.type + ': ' + item.name + ': ' + item.brand + '<br>' +'€' + item.price + ',-' + '<br>' + item.availableSizes + '<br>' + 'refreshrate:' + item.refreshRate + '<br>' + item.screenType + '<br>' + item.screenQuality + '<br>'
//
// );});
//






// * option 2:
//
// let availableSizes = (inventory, index) => {
//   let allSizes = []
//   let sizesPerObject = []
//   for (let i = 0; i < inventory.length; i++) {
//     for (let j = 0; j < inventory[i].availableSizes.length; j++) {
//       sizesPerObject.push((inventory[i].availableSizes[j]) + ' inch ' +
//           '(' + (inventory[i].availableSizes[j] * 2.54) + ' cm)');
//       if (j === inventory[i].availableSizes.length - 1) {
//         allSizes.push(sizesPerObject);
//         sizesPerObject = [];
//       }
//     }
//   }
//   if (index || index === 0) {
//     return allSizes[index]
//   } else {
//     return allSizes
//   }
// }
//
//
// /* The array parameter most be declared with the 'inventory' array of existing out of objects.
//  the index parameter is optional! In this parameter you declare the index of the array to get a specified product!
//  */
// const printTv = (array, index) => {
//   //empty array to put our product details in!
//   let tvSets = [];
//   //change the value of the before declared arrays with the help of 2 loops!
//
//   for (let i = 0; i < array.length; i++) {
//     tvSets[i] = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br><br>";
//
//   }
//   //if there is an index number declared we return the specified array with the if statement below.
//
//   if (index || index === 0) {
//     return tvSets[index]
//   }
//   // if not we return everything in stock.
//   else {
//
//     return tvSets.join(' ')
//
//   }
// }
//
//
// function sortFunction() {
//   document.getElementById("sort").innerHTML = sorted(inventory);
// }
//
// function ambiLightFunction() {
//   document.getElementById("ambilight").innerHTML = ambiLightOption(ambiLight);
// }
//
// function soldOutFunction() {
//   document.getElementById("soldOut").innerHTML = soldOutTelevisions(soldOut);
// }




// const revenueHtml = document.getElementById('revenue');
// revenueHtml.innerHTML = revenue;

// const soldValueHtml = document.getElementById('soldValue');
// soldValueHtml.innerHTML = soldValue;

// const printTelevisions = document.getElementById('printTelevisions');
// printTelevisions.innerHTML = printTv(inventory);




// 0

// const printTvHtml0 = document.getElementById("tvType0");
// printTvHtml0.innerHTML = printTv(inventory, 0)

// const chooseSize0 = availableSizes(inventory, 0);
// const chooseSizeHtml0 = document.getElementById('tvSizeSelect0')
// for(let i = 0; i < chooseSize0.length; i++){
//   chooseSizeHtml0.options.add(new Option(chooseSize0[i])); }


//1

// const printTvHtml1 = document.getElementById("tvType1");
// printTvHtml1.innerHTML = printTv(inventory, 1)
//
// const chooseSize1 = availableSizes(inventory, 1);
// const chooseSizeHtml1 = document.getElementById('tvSizeSelect1')
// for(let i = 0; i < chooseSize1.length; i++){
//   chooseSizeHtml1.options.add(new Option(chooseSize1[i])); }


// // 2
//
// const printTvHtml2 = document.getElementById("tvType2");
// printTvHtml2.innerHTML = printTv(inventory, 2)
//
// const chooseSize2 = availableSizes(inventory, 2);
// const chooseSizeHtml2 = document.getElementById('tvSizeSelect2')
// for(let i = 0; i < chooseSize2.length; i++){
//   chooseSizeHtml2.options.add(new Option(chooseSize2[i])); }
//
// // 3
//
// const printTvHtml3 = document.getElementById("tvType3");
// printTvHtml3.innerHTML = printTv(inventory, 3)
//
// const chooseSize3 = availableSizes(inventory, 3);
// const chooseSizeHtml3 = document.getElementById('tvSizeSelect3')
// for(let i = 0; i < chooseSize3.length; i++){
//   chooseSizeHtml3.options.add(new Option(chooseSize3[i])); }
//
// //4
// const printTvHtml4 = document.getElementById("tvType4");
// printTvHtml4.innerHTML = printTv(inventory, 4)
//
// const chooseSize4 = availableSizes(inventory, 4);
// const chooseSizeHtml4 = document.getElementById('tvSizeSelect4')
// for(let i = 0; i < chooseSize4.length; i++){
//   chooseSizeHtml4.options.add(new Option(chooseSize4[i])); }
//
// //5
// const printTvHtml5 = document.getElementById("tvType5");
// printTvHtml5.innerHTML = printTv(inventory, 5)
//
// const chooseSize5 = availableSizes(inventory, 5);
// const chooseSizeHtml5 = document.getElementById('tvSizeSelect5')
// for(let i = 0; i < chooseSize5.length; i++){
//   chooseSizeHtml5.options.add(new Option(chooseSize5[i])); }
//
// //6
// const printTvHtml6 = document.getElementById("tvType6");
// printTvHtml6.innerHTML = printTv(inventory, 6)
//
// const chooseSize6 = availableSizes(inventory, 6);
// const chooseSizeHtml6 = document.getElementById('tvSizeSelect6')
// for(let i = 0; i < chooseSize6.length; i++){
//   chooseSizeHtml6.options.add(new Option(chooseSize6[i])); }
//
// //6
// const printTvHtml7 = document.getElementById("tvType7");
// printTvHtml7.innerHTML = printTv(inventory, 7)
//
// const chooseSize7 = availableSizes(inventory, 7);
// const chooseSizeHtml7 = document.getElementById('tvSizeSelect7')
// for(let i = 0; i < chooseSize7.length; i++){
//   chooseSizeHtml7.options.add(new Option(chooseSize7[i])); }









