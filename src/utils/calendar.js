function isDate(dateStr) {
    return dateStr != null && !isNaN(new Date(dateStr).getDate());
}

function m2h(inputMasehi, koreksi = 0) {
    if (!isDate(inputMasehi)) return;

    let mData = new Date(inputMasehi);
    let mThn = mData.getFullYear();
    let mBln = mData.getMonth() + 1;
    let mTgl = mData.getDate();
    let okt15th1582;
    let hasil1;
    let hasil2;
    let hasil3;
    let hThn;
    let hBln;
    let hTgl;
    let hKabisat;
    let mKabisat;

    mData.setDate(mData.getDate() + koreksi);
    mThn = mData.getFullYear();
    mBln = mData.getMonth() + 1;
    mTgl = mData.getDate();

    if (mThn % 4 === 0) {
        if (mThn % 100 !== 0) {
            if (mThn % 400 === 0) {
                mKabisat = 1;
            } else {
                mKabisat = 0;
            }
        } else {
            mKabisat = 1;
        }
    } else {
        mKabisat = 0;
    }

    if (mBln < 3) {
        mThn -= 1;
        mBln += 12;
    }

    if (
        mThn > 1582 ||
        (mThn === 1582 && mBln * 31 - (mKabisat === 1 ? 5 : 6) >= 287)
    ) {
        okt15th1582 =
            2 - Math.floor(mThn / 100) + Math.floor(Math.floor(mThn / 100) / 4);
    } else {
        okt15th1582 = 0;
    }

    hasil1 =
        Math.floor(365.25 * mThn) +
        Math.floor(30.6001 * (mBln + 1)) +
        mTgl +
        okt15th1582 -
        428;
    hasil2 = hasil1 - 227016;
    hThn = Math.round(hasil2 / 354.3671 + 0.5);
    hasil3 = hasil2 + 1 - Math.floor(hasil2 / 354.3671) * 354.3671;

    if (
        hThn % 30 === 2 ||
        hThn % 30 === 5 ||
        hThn % 30 === 7 ||
        hThn % 30 === 10 ||
        hThn % 30 === 13 ||
        hThn % 30 === 15 ||
        hThn % 30 === 18 ||
        hThn % 30 === 21 ||
        hThn % 30 === 24 ||
        hThn % 30 === 26 ||
        hThn % 30 === 29
    ) {
        hKabisat = 1;
    } else {
        hKabisat = 0;
    }
    // console.log("hasil3", hasil3);
    switch (true) {
        case hasil3 <= 30:
            hBln = 1;
            hTgl = Math.round(hasil3 + 0.5);
            break;
        case hasil3 <= 59:
            hBln = 2;
            hTgl = Math.round(hasil3 + 0.5) - 30;
            break;
        case hasil3 <= 89:
            hBln = 3;
            hTgl = Math.round(hasil3 + 0.5) - 59;
            break;
        case hasil3 <= 118:
            hBln = 4;
            hTgl = Math.round(hasil3 + 0.5) - 89;
            break;
        case hasil3 <= 148:
            hBln = 5;
            hTgl = Math.round(hasil3 + 0.5) - 118;
            break;
        case hasil3 <= 177:
            hBln = 6;
            hTgl = Math.round(hasil3 + 0.5) - 148;
            break;
        case hasil3 <= 207:
            hBln = 7;
            hTgl = Math.round(hasil3 + 0.5) - 177;
            break;
        case hasil3 <= 236:
            hBln = 8;
            hTgl = Math.round(hasil3 + 0.5) - 207;
            break;
        case hasil3 <= 266:
            hBln = 9;
            hTgl = Math.round(hasil3 + 0.5) - 236;
            break;
        case hasil3 <= 295:
            hBln = 10;
            hTgl = Math.round(hasil3 + 0.5) - 266;
            break;
        case hasil3 <= 325:
            hBln = 11;
            hTgl = Math.round(hasil3 + 0.5) - 295;
            break;
        default:
            hBln = 12;
            hTgl = Math.round(hasil3 + 0.5) - (325 + hKabisat);
    }

    // case 2023-07-19
    if (hTgl > 30) {
        hTgl = hTgl - 30;
        if (hBln < 12) {
            hBln = hBln + 1;
        } else {
            hBln = 1;
            hThn = hThn + 1;
        }
    }

    if ((hTgl < 1 && hBln < 1) || (hTgl === null && hBln === null)) {
        hTgl = 30;
        hBln = 12;
    }

    // 2007-12-10
    if (hTgl < 1) {
        hTgl = 1;
    }

    return `${hThn.toString().padStart(4, "0")}${hBln
        .toString()
        .padStart(2, "0")}${hTgl.toString().padStart(2, "0")}`;
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

function bulanHijri(inputMonth) {
    let month = "";
    const caseMonth = parseInt(inputMonth);
    switch (caseMonth) {
        case 1:
            month = "Muharram";
            break;
        case 2:
            month = "Shafar";
            break;
        case 3:
            month = "Rabiul Awal";
            break;
        case 4:
            month = "Rabiul Akhir";
            break;
        case 5:
            month = "Jumadal Ula";
            break;
        case 6:
            month = "Jumadal Akhirah";
            break;
        case 7:
            month = "Rajab";
            break;
        case 8:
            month = "Syaban";
            break;
        case 9:
            month = "Ramadan";
            break;
        case 10:
            month = "Syawal";
            break;
        case 11:
            month = "Dzul Qadah";
            break;
        case 12:
            month = "Dzul Hijjah";
            break;
        default:
            month = "";
    }
    return month;
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

function formatDateFull(inputDate) {
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

function formatDateSql(inputDate) {
    if (!isDate(inputDate)) return;

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day} `;
}
function numbersOnly(inputString) {
    // Gunakan ekspresi reguler untuk mencari karakter angka
    const regex = /\d/g;
    // Ambil semua karakter angka dari inputString menggunakan ekspresi reguler
    const numbersOnly = inputString.match(regex);
    // Gabungkan karakter angka menjadi satu string
    const result = numbersOnly ? numbersOnly.join("") : "";
    return result;
}

function bacaHijri(input) {
    const cleanInput = numbersOnly(input);
    let dd = String(cleanInput).substring(6, 8);
    let mm = String(cleanInput).substring(4, 6);
    let yy = String(cleanInput).substring(0, 4);
    if (String(cleanInput).length != 8 || dd < 1 || mm < 1 || yy < 1) {
        return "Format salah!";
    }
    return `${dd} ${bulanHijri(mm)} ${yy}`;
}
export {
    m2h,
    isDate,
    formatDateFull,
    formatDateShort,
    formatDateSql,
    bacaHijri,
};
