function getAngkaTerbesarKedua(arr) {
  if (arr.length < 2) {
    return `array harus memeliki setidaknya 2 elemen`;
  }
  let terbesar = arr[0];
  let terbesarKedua = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesarKedua = terbesar;
      terbesar = arr[i];
    } else if (arr[i] > terbesarKedua && arr[i] !== terbesar) {
      terbesarKedua = arr[i];
    }
  }

  if (terbesarKedua === -Infinity) {
    return "tidak ada nilai terbesar kedua";
  }
  return terbesarKedua;
}

let nilai = getAngkaTerbesarKedua([2, 12, 4, 21, 44, 43]);
console.log(nilai);
