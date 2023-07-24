function isDate(dateStr) {
    return dateStr != null && !isNaN(new Date(dateStr).getDate());
}

function formatDateSql(inputDate) {
    if (!isDate(inputDate)) return;

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day} `;
}

function hari(inputDay) {
    let day = "";
    const caseDay = parseInt(inputDay);
    switch (caseDay) {
        case 0:
            day = "Ahad";
            break;
        case 1:
            day = "Senin";
            break;
        case 2:
            day = "Selasa";
            break;
        case 3:
            day = "Rabu";
            break;
        case 4:
            day = "Kamis";
            break;
        case 5:
            day = "Jumat";
            break;
        case 6:
            day = "Sabtu";
            break;
        default:
            day = "";
    }
    return day;
}

function bulanMasehi(inputMonth) {
    let month = "";
    const caseMonth = parseInt(inputMonth);
    switch (caseMonth) {
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Maret";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Mei";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Agustus";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "Desember";
            break;
        default:
            month = "";
    }
    return month;
}

function formatDateFull(inputDate) {
    if (!isDate(inputDate)) return;

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = bulanMasehi(date.getMonth() + 1);
    const day = String(date.getDate()).padStart(2, "0");
    return `${day} ${month} ${year}`;
}

function formatDateFullDay(inputDate) {
    if (!isDate(inputDate)) return;

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = bulanMasehi(date.getMonth() + 1);
    const day = String(date.getDate()).padStart(2, "0");
    const Day = date.getDay();
    return `${hari(Day)}, ${day} ${month} ${year}`;
}

function formatDateShort(inputDate) {
    if (!isDate(inputDate)) return;

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
}

export {
    isDate,
    formatDateSql,
    formatDateShort,
    formatDateFull,
    formatDateFullDay,
};
