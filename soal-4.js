const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 76000,
    kategori: "Sepatu Sport",
    totalTerjual: "98",
  },
  {
    namaProduct: "Sepatu warrior tristan  black brown highs",
    hargaSatuan: 96000,
    kategori: "Sepatu Sneaker",
    totalTerjual: "37",
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon high",
    hargaSatuan: 36000,
    kategori: "Sepatu Sneaker",
    totalTerjual: "37",
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca corduroy",
    hargaSatuan: 12000,
    kategori: "Sepatu Sneaker",
    totalTerjual: "90",
  },
];

function getTotalPenjualan(dataPenjualan) {
  let totalpejualan = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const produk = dataPenjualan[i];
    const totalTerjual = parseInt(produk.totalTerjual, 10);
    if (!isNaN(totalTerjual)) {
      totalpejualan += totalTerjual;
    }
  }
  return totalpejualan;
}

const totalSeluruhPenjualanpakadi = getTotalPenjualan(dataPenjualanPakAldi);
console.log("total seluruh sepatu yang terjual", totalSeluruhPenjualanpakadi);
