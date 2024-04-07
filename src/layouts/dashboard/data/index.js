export function dataMaster(count) {
  return [
    {
      color: "dark",
      icon: "person",
      title: "Jumlah Siswa",
      count: count ? count.students : 0,
      footer: {
        icon: "check",
        label: "Terdaftar",
      },
    },
    {
      color: "info",
      icon: "star",
      title: "Jumlah Kelas",
      count: count ? count.classes : 0,
      footer: {
        icon: "",
        label: "SMK 12369 HONGKONG",
      },
    },
    {
      color: "primary",
      icon: "settings",
      title: "Jumlah Petugas",
      count: count ? count.operators : 0,
      footer: {
        icon: "",
        label: "Petugas & Administrator",
      },
    },
  ];
}

export function dataReport(total) {
  return [
    {
      title: {
        text: "telat",
        color: "dark",
      },
      count: total ? total.telat : 0,
    },
    {
      title: {
        text: "hadir",
        color: "success",
      },
      count: total ? total.hadir : 0,
    },
    {
      title: {
        text: "sakit",
        color: "warning",
      },
      count: total ? total.sakit : 0,
    },
    {
      title: {
        text: "izin",
        color: "info",
      },
      count: total ? total.izin : 0,
    },
    {
      title: {
        text: "alpa",
        color: "error",
      },
      count: total ? total.alpa : 0,
    },
  ];
}

export function dataCharts(charts) {
  return [
    {
      color: "success",
      title: "Statistik kehadiran siswa",
      description: "Jumlah catatan dalam 7 hari terakhir.",
      path: "/",
      chart: charts ? charts.presences : {},
    },
    {
      color: "error",
      title: "Statistik dysphoria siswa",
      description: "Jumlah catatan dalam 7 hari terakhir.",
      path: "/",
      chart: charts ? charts.dysphoria : {},
    },
  ];
}
