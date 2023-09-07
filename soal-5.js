const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function formatRupiah(angka) {
  const formater = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formater.format(angka);
}

function hitungInformasiPenjualan(dataPenjualan) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let bukuTerlaris = {};
  let penulisTerlaris = {};
  let totalTerjualTerlaris = 0;

  for (const produk of dataPenjualan) {
    const keuntunganPerProduk =
      (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalKeuntungan += keuntunganPerProduk;
    totalModal += produk.hargaBeli * produk.totalTerjual;

    if (produk.totalTerjual > totalTerjualTerlaris) {
      bukuTerlaris = {
        idProduct: produk.idProduct,
        namaProduk: produk.namaProduk,
        penulis: produk.penulis,
        totalTerjual: produk.totalTerjual,
      };
      totalTerjualTerlaris = produk.totalTerjual;
    }
    if (!penulisTerlaris[produk.penulis]) {
      penulisTerlaris[produk.penulis] = 0;
    }
    penulisTerlaris[produk.penulis] += keuntunganPerProduk;
  }

  const penulisTerlarisArray = Object.keys(penulisTerlaris).map((penulis) => ({
    penulis: penulis,
    totalKeuntungan: penulisTerlaris[penulis],
  }));

  penulisTerlarisArray.sort((a, b) => (b.totalKeuntungan = a.totalKeuntungan));

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    bukuTerlaris,
    penulisTerlaris: penulisTerlarisArray[0],
    persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%",
  };
}

const informasiPenjualan = hitungInformasiPenjualan(dataPenjualanNovel);
console.log(informasiPenjualan);
