// array tanggal
const tanggal = ["2018/06/15", "2019/07/21", "2021/06/03"];

// cari tanggal terbaru dari elemen array tanggal
const tglTerbaru = tanggal.reduce(
  (accumulator, currentValue) =>
    currentValue > accumulator ? currentValue : accumulator,
  tanggal[0]
);

// (accumulator = "2018/06/15") > (currentValue = "2018/06/15") = "2018/06/15"
// (accumulator = "2018/06/15") > (currentValue = "2019/07/21") = "2019/07/21"
// (accumulator = "2019/07/21") > (currentValue = "2021/06/03") = "2021/06/03"

// cetak variabel tglTerbaru
console.log(tglTerbaru);
