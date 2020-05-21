listPhone = [
  {
    name: "Samsung Galaxy S20+",
    brand: "Samsung",
    price: 2149e4,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-400x460-fix-400x460.png",
    dataLink: "https://www.thegioididong.com/dtdd/samsung-galaxy-s20-plus",
  },
  {
    name: "iPhone 8 Plus",
    brand: "Apple",
    price: 1499e4,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png",
    dataLink: "https://www.thegioididong.com/dtdd/iphone-8-plus",
  },
  {
    name: "OPPO A12",
    brand: "Oppo",
    price: 369e4,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/221414/oppo-a12-4gb-den-400x460-400x460.png",
    dataLink: "https://www.thegioididong.com/dtdd/oppo-a12-4gb",
  },
  {
    name: "Samsung Galaxy A71",
    brand: "Samsung",
    price: 979e4,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-400x460-400x460-1-400x460.png",
    dataLink: "https://www.thegioididong.com/dtdd/samsung-galaxy-a71",
  },
  {
    name: "Vivo U10",
    brand: "Oppo",
    price: 379e4,
    image: "https://cdn.tgdd.vn/Products/Images/42/211156/vivo-u10-400x460.png",
    dataLink: "https://www.thegioididong.com/dtdd/vivo-u10",
  },
];

// for (let i = 0; i < listPhone.length; i++) {
//   const element = listPhone[i];
//   const name = element.name;
//   const brand = element.brand;
//   const price = element.price;
//   const image = element.image;
//   const link = element.dataLink;
//   let htmlPhone = `<td>${i + 1}</td>
//                      <td>${name}</td>
//                      <td>${brand}</td>
//                      <td>${price}</td>
//                      <td><img src='${image}'></img></td>
//                      <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

//   tgdd.innerHTML += htmlPhone;
// }

// let findBrand = prompt("Nhap ten hang ban muon tim:");
// let lowerFindBrand = findBrand.toLowerCase();
// let count = 0;

//     for (let i = 0; i < listPhone.length; i++) {
//         const element = listPhone[i];
//         const name = element.name;
//         const brand = element.brand;
//         let lowerBrand = brand.toLowerCase();
//         const price = element.price;
//         const image = element.image;
//         const link = element.dataLink;
//          if (lowerBrand.search(lowerFindBrand) >= 0) {
//            count++;
//         let htmlPhone = `<td>${count}</td>
//                            <td>${name}</td>
//                            <td>${brand}</td>
//                            <td>${price}</td>
//                            <td><img src='${image}'></img></td>
//                            <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

//         tgdd.innerHTML += htmlPhone;
//       }
//   }

//tim dien thoai trong khoang gia
// let startPrice = parseInt(prompt("Nhap gia thap nhat:"));
// let endPrice = parseInt(prompt("Nhap gia cao nhat:"));
// let count = 0;
// for (let i = 0; i < listPhone.length; i++) {
//   const element = listPhone[i];
//   const name = element.name;
//   const brand = element.brand;
//   const price = element.price;
//   const image = element.image;
//   const link = element.dataLink;
//   if (price >= startPrice && price <= endPrice) {
//     count++;
//     let htmlPhone = `<td>${count}</td>
//                      <td>${name}</td>
//                      <td>${brand}</td>
//                      <td>${price}</td>
//                      <td><img src='${image}'></img></td>
//                      <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

//     tgdd.innerHTML += htmlPhone;
//   }
// }

//sap xep theo brand
// displayPhones();
// function sortByBrand(list) {
//   list.sort(function (a, b) {
//     var x = a.brand.toLowerCase();

//     var y = b.brand.toLowerCase();
//     return x.localeCompare(y);
//   });
//   return list;
// }
// function displayPhones() {
//   let tgdd = document.getElementById("bodyContent");
//   listPhone = sortByBrand(listPhone);
//   listPhone.reverse();
//   for (let i = 0; i < listPhone.length; i++) {
//     const element = listPhone[i];
//     const name = element.name;

//     const brand = element.brand;
//     const price = element.price;
//     const image = element.image;
//     const link = element.dataLink;

//     let htmlPhone = `<td>${i + 1}</td>
//                      <td>${name}</td>
//                      <td>${brand}</td>
//                      <td>${price}</td>
//                      <td><img src='${image}'></img></td>
//                      <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

//     tgdd.innerHTML += htmlPhone;
//   }
// }

//sap xep theo price
// displayPhones();
// function sortByBrand(list) {
//   list.sort(function (a, b) {
//     var x = a.price;

//     var y = b.price;
//     return x - y;
//   });
//   return list;
// }
// function displayPhones() {
//   let tgdd = document.getElementById("bodyContent");
//   listPhone = sortByBrand(listPhone);
//   listPhone.reverse();
//   for (let i = 0; i < listPhone.length; i++) {
//     const element = listPhone[i];
//     const name = element.name;

//     const brand = element.brand;
//     const price = element.price;
//     const image = element.image;
//     const link = element.dataLink;

//     let htmlPhone = `<td>${i + 1}</td>
//                      <td>${name}</td>
//                      <td>${brand}</td>
//                      <td>${price}</td>
//                      <td><img src='${image}'></img></td>
//                      <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

//     tgdd.innerHTML += htmlPhone;
//   }
// }

let tgdd = document.getElementById("bodyContent");
function sortByName(list) {
  list.sort(function (a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x.localeCompare(y);
  });
  return list;
}
function sortName() {
  for (let i = 0; i < listPhone.length; i++) {
  listPhone = sortByName(listPhone);
  const element = listPhone[i];
  const name = element.name;
  const brand = element.brand;
  const price = element.price;
  const image = element.image;
  const link = element.dataLink;
  let htmlPhone = `<td>${i + 1}</td>
                      <td>${name}</td>
                      <td>${brand}</td>
                      <td>${price}</td>
                     <td><img src='${image}'></img></td>
                     <td><button><a href='${link}' target='_blank' style="margin:auto padding:auto">Click here baby</a></button></td>`;

  tgdd.innerHTML += htmlPhone;
}
}
sortName();
