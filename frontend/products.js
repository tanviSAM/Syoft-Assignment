let url = `http://localhost:5000/product`;

async function getProduct() {
  let res = await fetch(`http://localhost:5000/product`);
  //     renderProduct(data);
  let data = await res.json();
  renderProduct(data);
  // console.log(data);
}
getProduct();

function renderProduct(data) {
  console.log(data);
  let container = document.getElementById("dataProd");
  container.innerHTML = "";

  data.forEach(function (el) {
    console.log(el);
    let prodcart = document.createElement("div");
    prodcart.setAttribute("class", "prodcart");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Product Name : " + el.prodnm;
    let p = document.createElement("p");
    p.innerHTML = "Brand : " + el.brandName;
    let h4 = document.createElement("h4");
    h4.innerHTML = "Price : " + "Rs " + el.price + "/- ";
    prodcart.append(h3, p, h4);
    document.querySelector("#dataProd").append(prodcart);
  });
}
