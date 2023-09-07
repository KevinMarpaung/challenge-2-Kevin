function ceknumber(number) {
  if (typeof number === "number") {
    if (number % 2 === 0) {
      console.log("ini adalah bilangan genap");
    } else {
      console.log("anda memasukkan bilangan ganjil");
    }
  } else if (typeof number === "undefined") {
    console.log("Error: Bro where is the parameter?");
  } else {
    console.log("Error:invalid data type");
  }
}
let number = ceknumber();
