export function formatDate(date) {
  // Mendapatkan tanggal, bulan, dan tahun dari objek tanggal
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Mengembalikan tanggal dalam format yang diinginkan
  return `${day} ${month} ${year}`;
}
