import { defineStore } from "pinia";
export default defineStore("santri", {
    state: () => {
        return {
            santri: {
                id: null,
                tgl_daftar_m: null,
                tgl_daftar_h: null,
                th_ajaran_h: null,
                nama: null,
                nisn: null,
                nkk: null,
                nik: null,
                tmp_lahir: null,
                tgl_lahir: null,
                sex: "L",
                provinsi: "Jawa Timur",
                kabupaten: "Bangkalan",
                kecamatan: null,
                desa: null,
                rt: 1,
                rw: 1,
                jl: null,
                kode_pos: null,
            },
        };
    },
    persist: {
        storage: sessionStorage,
    },
});
