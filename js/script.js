// array nomor
const nomor = [1, 4, 5];

// jumlahkan setiap elemen array nomor
const total = nomor.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// (accumulator = 0) + (currentValue = 1) = 1
// (accumulator = 1) + (currentValue = 4) = 5
// (accumulator = 5) + (currentValue = 5) = 10

// cetak hasil penjumlahan setiap array nomor
console.log(total);
