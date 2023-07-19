<template>
    <q-card class="full-width" style="max-width: 768px">
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
                            @change="changeTglDaftarM"
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
                        <q-input
                            dense
                            hint=""
                            class="q-mt-sm"
                            outlined
                            label="Tahun Ajaran"
                            v-model="id"
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

                    <!-- alamat -->
                    <q-carousel-slide
                        :name="carousel.alamat.button"
                        class="no-wrap flex-center"
                    >
                        <div class="text-subtitle2">
                            {{ carousel.alamat.title }}
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

// form
const nama = ref("");
const id = ref("");
const jl = ref("");

const data = reactive({
    id: null,
    tgl_daftar_m: null,
    tgl_daftar_h: null,
    th_ajaran_h: null,
});

const changeTglDaftarM = () => {
    if (isDate(data.tgl_daftar_m)) {
        data.tgl_daftar_h = m2h(data.tgl_daftar_m);
    }
};

const onSubmit = async () => {
    const data = {
        id: id.value.trim(),
        nama: nama.value.trim(),
        jl: jl.value.trim(),
    };

    return console.log(data);
    try {
        const response = await apiTokened.post(`products`, data);
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
