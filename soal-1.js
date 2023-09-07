function chageWordl(pilihKata, ubahKata, kalimat) {
  let newText = kalimat.replace(pilihKata, ubahKata);
  return newText;
}

let kalimat1 = "andini sangat mencintai kamu selamanya";
let tes = chageWordl("mencintai", "membenci", kalimat1);
console.log(tes);
