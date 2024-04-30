export function formatDate(date) {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const day = days[date.getDay()];
    const currentDate = date.getDate();
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Mengembalikan tanggal dalam format yang diinginkan
    return `${day}, ${currentDate} ${month} ${year}`;
}

export function formatHours(date) {
    const hours = formatNumber(date.getHours());
    const minutes = formatNumber(date.getMinutes());
    const seconds = formatNumber(date.getSeconds());

    return { hours, minutes, seconds };
}

export const formatNumber = (num) => (num < 10 ? "0" + num : num);
