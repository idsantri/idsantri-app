<template>
    <q-card class="full-width" style="max-width: 425px">
        <q-form @submit.prevent="onSubmit">
            <q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
                <div class="text-subtitle1">Input Data Santri</div>
            </q-card-section>
            <q-card-section class="no-padding">
                <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    animated
                    control-color="primary"
                    class="full-width"
                    style="height: 60vh"
                >
                    <!-- registrasi -->
                    <q-carousel-slide
                        :name="carousel.registrasi.button"
                        class="no-wrap flex-center"
                    >
                        <div class="text-subtitle2">
                            {{ carousel.registrasi.title }}
                        </div>
                        <q-input
                            dense
                            hint="Kosongkan jika ingin diisi otomatis!"
                            class="q-mt-sm"
                            outlined
                            label="ID"
                            v-model="data.id"
                        />

                        <q-input
                            dense
                            :hint="
                                isDate(data.tgl_daftar_m)
                                    ? formatDateFull(data.tgl_daftar_m)
                                    : ''
                            "
                            class="q-mt-sm"
                            outlined
                            label="Tanggal Daftar (M)"
                            v-model="data.tgl_daftar_m"
                            type="date"
                            @change="
                                isDate(data.tgl_daftar_m)
                                    ? (data.tgl_daftar_h = m2h(
                                          data.tgl_daftar_m
                                      ))
                                    : ''
                            "
                        />
                        <q-input
                            dense
                            :hint="
                                data.tgl_daftar_h?.length
                                    ? bacaHijri(data.tgl_daftar_h)
                                    : ''
                            "
                            class="q-mt-sm"
                            outlined
                            label="Tanggal Daftar (H)"
                            v-model="data.tgl_daftar_h"
                            mask="####-##-##"
                        />
                        <q-select
                            dense
                            :hint="
                                data.th_ajaran_h?.length == 9
                                    ? listThAjaran.find(
                                          (item) =>
                                              item.val0 === data.th_ajaran_h
                                      )?.val1
                                    : ''
                            "
                            class="q-mt-sm"
                            outlined
                            label="Tahun Ajaran"
                            v-model="data.th_ajaran_h"
                            :options="listThAjaran"
                            option-value="val0"
                            option-label="val0"
                            emit-value
                            map-options
                            :rules="[(val) => !!val || 'Harus diisi!']"
                            error-color="red-6"
                        />
                    </q-carousel-slide>

                    <!-- identitas -->
                    <q-carousel-slide
                        :name="carousel.identitas.button"
                        class="no-wrap flex-center"
                    >
                        <div class="text-subtitle2">
                            {{ carousel.identitas.title }}
                        </div>
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Nama"
                            v-model="data.nama"
                            :rules="[(val) => !!val || 'Harus diisi!']"
                            error-color="red-6"
                            autocapitalize="words"
                        />
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Nomor Induk Siswa Nasional"
                            v-model="data.nisn"
                            :rules="[
                                (val) => !val || !isNaN(val) || 'Hanya angka!',
                            ]"
                            error-color="red-6"
                        />
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Nomor Kartu Keluarga"
                            v-model="data.nkk"
                            :rules="[
                                (val) =>
                                    !val ||
                                    (val?.length == 16 && !isNaN(val)) ||
                                    '16 digit angka!',
                            ]"
                            error-color="red-6"
                        />
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Nomor Induk Kependudukan"
                            v-model="data.nik"
                            :rules="[
                                (val) =>
                                    !val ||
                                    (val?.length == 16 && !isNaN(val)) ||
                                    '16 digit angka!',
                            ]"
                            error-color="red-6"
                        />
                        <q-select
                            dense
                            hint="Kota kelahiran"
                            class="q-mt-sm"
                            outlined
                            label="Tempat Lahir"
                            v-model="data.tmp_lahir"
                            :options="optionsKotaLahir"
                            emit-value
                            map-options
                            error-color="red-6"
                            use-input
                            @filter="filterKotaLahir"
                        />
                        <q-input
                            dense
                            :hint="
                                isDate(data.tgl_lahir)
                                    ? formatDateFull(data.tgl_lahir) +
                                      ' | ' +
                                      bacaHijri(m2h(data.tgl_lahir))
                                    : ''
                            "
                            class="q-mt-sm"
                            outlined
                            label="Tanggal Lahir"
                            v-model="data.tgl_lahir"
                            type="date"
                        />

                        <q-select
                            dense
                            :hint="
                                data.sex == 'L'
                                    ? 'Laki-Laki'
                                    : data.sex == 'P'
                                    ? 'Perempuan'
                                    : ''
                            "
                            class="q-mt-sm"
                            outlined
                            label="Jenis Kelamin"
                            v-model="data.sex"
                            :options="['L', 'P']"
                            emit-value
                            map-options
                            error-color="red-6"
                        />
                    </q-carousel-slide>

                    <!-- alamat -->
                    <q-carousel-slide
                        :name="carousel.alamat.button"
                        class="no-wrap flex-center"
                    >
                        <div class="text-subtitle2">
                            {{ carousel.alamat.title }}
                        </div>
                        <q-select
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Provinsi"
                            v-model="data.provinsi"
                            :options="optionsKotaLahir"
                            emit-value
                            map-options
                        />
                        <q-select
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Kabupaten"
                            v-model="data.kabapaten"
                            :options="listThAjaran"
                            option-value="val0"
                            option-label="val0"
                            emit-value
                            map-options
                        />

                        <q-input
                            dense
                            hint="Kosongkan jika ingin diisi otomatis!"
                            class="q-mt-sm"
                            outlined
                            label="ID"
                            v-model="data.id"
                        />
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Tanggal Daftar (M)"
                            v-model="data.id"
                        />
                    </q-carousel-slide>

                    <!-- pendidikan -->
                    <q-carousel-slide
                        :name="carousel.pendidikan.button"
                        class="no-wrap flex-center"
                    >
                        <div class="text-subtitle2">
                            {{ carousel.pendidikan.title }}
                        </div>
                        <q-input
                            dense
                            hint="Kosongkan jika ingin diisi otomatis!"
                            class="q-mt-sm"
                            outlined
                            label="ID"
                            v-model="id"
                        />
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Tanggal Daftar (M)"
                            v-model="id"
                        />
                    </q-carousel-slide>
                </q-carousel>
            </q-card-section>
            <q-card-section class="q-pa-sm">
                <div class="row justify-center">
                    <q-btn-toggle
                        toggle-color="teal-10"
                        text-color="text-teal-11"
                        no-caps=""
                        glossy
                        v-model="slide"
                        :options="toggleOptions"
                    />
                </div>
            </q-card-section>
            <q-card-actions class="flex bg-teal-6">
                <q-btn label="Hapus" class="bg-red text-red-1" no-caps="" />
                <q-space />
                <q-btn
                    label="Tutup"
                    v-close-popup
                    class="bg-teal-11"
                    no-caps=""
                />
                <q-btn
                    type="submit"
                    label="Simpan"
                    class="bg-teal-10 text-teal-11"
                    no-caps=""
                />
            </q-card-actions>
        </q-form>
    </q-card>
</template>
<script setup>
import { reactive, ref } from "vue";
import { apiTokened } from "src/config/api";
import { m2h, isDate, formatDateFull, bacaHijri } from "src/utils/calendar";

const carousel = {
    registrasi: {
        title: "Data Registrasi",
        button: "1",
    },
    identitas: {
        title: "Identitas Diri",
        button: "2",
    },
    alamat: {
        title: "Data Alamat",
        button: "3",
    },
    pendidikan: {
        title: "Riwayat Pendidikan",
        button: "4",
    },
};
const slide = ref(carousel.registrasi.button);

const toggleOptions = [
    {
        label: carousel.registrasi.button,
        value: carousel.registrasi.button,
    },
    {
        label: carousel.identitas.button,
        value: carousel.identitas.button,
    },
    {
        label: carousel.alamat.button,
        value: carousel.alamat.button,
    },
    {
        label: carousel.pendidikan.button,
        value: carousel.pendidikan.button,
    },
];

const listThAjaran = reactive([]);
const listKotaLahir = reactive([]);
const optionsKotaLahir = ref(listKotaLahir);

// form
const data = reactive({
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
    provinsi: null,
    kabapaten: null,
    kecamatan: null,
    desa: null,
    rt: 1,
    rw: 1,
    jl: null,
    kode_pos: null,
});

const filterKotaLahir = (val, update) => {
    if (val === "") {
        update(() => {
            optionsKotaLahir.value = listKotaLahir;
        });
        return;
    }

    update(() => {
        const needle = val.toLowerCase();
        optionsKotaLahir.value = listKotaLahir.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
        );
    });
};

try {
    // tahun ajaran
    const { data } = await apiTokened.get(`lists/key/tahun-ajaran`);
    const th = data.tahun_ajaran;
    th.sort((a, b) => {
        if (a.val0 > b.val0) {
            return -1;
        }
    });
    Object.assign(listThAjaran, th);
    // kota lahir
    const response = await apiTokened.get(`alamat/kota-lahir`);
    Object.assign(listKotaLahir, response.data.kota_lahir);
} catch (error) {
    console.log("Not Found: categories -> list", error.response);
}

const onSubmit = async () => {
    const form = JSON.parse(JSON.stringify(data));

    return console.log(form);
    try {
        const response = await apiTokened.post(`products`, form);
        const id = response.data.data.product.id;
        notifySuccess(response.data.message);
        router.push(`/products/${id}`);
    } catch (error) {
        toArray(error.response.data.message).forEach((message) => {
            notifyError(message);
        });
    }
};
</script>
<style></style>
