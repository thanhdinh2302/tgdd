
displayPhones();
function sortByBrand(list) {
  list.sort(function (a, b) {
    var x = a.price;

    var y = b.price;
    return x - y;
  });
  return list;
}
function displayPhones() {
  let tgdd = document.getElementById("bodyContent");
  listPhone = sortByBrand(listPhone);
  listPhone.reverse();
  for (let i = 0; i < listPhone.length; i++) {
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
                     <td><button><a href='${link}' target='_blank' >Click here baby</a></button></td>`;

    tgdd.innerHTML += htmlPhone;
  }
}
