<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nama*"
        v-model="nama"
        :rules="[
            (val) => !!val || 'Harus diisi!',
            (val) => val?.length >= 5 || 'Setidaknya 5 huruf!',
        ]"
        error-color="negative"
        autocapitalize="words"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nomor Induk Siswa Nasional"
        v-model="nisn"
        :rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
        error-color="negative"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nomor Kartu Keluarga"
        v-model="nkk"
        :rules="[
            (val) =>
                !val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
        ]"
        error-color="negative"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nomor Induk Kependudukan"
        v-model="nik"
        :rules="[
            (val) =>
                !val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
        ]"
        error-color="negative"
    />
    <q-select
        dense
        hint="Kota kelahiran"
        class="q-mt-sm"
        outlined
        label="Tempat Lahir"
        v-model="tmp_lahir"
        :options="optionsKotaLahir"
        emit-value
        map-options
        error-color="negative"
        @filter="filterTempatLahir"
        :loading="loadingKotaLahir"
        use-input
        new-value-mode="add"
        clearable=""
    />

    <q-input
        dense
        :hint="
            isDate(tgl_lahir)
                ? formatDateFull(tgl_lahir) + ' | ' + bacaHijri(m2h(tgl_lahir))
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Tanggal Lahir"
        v-model="tgl_lahir"
        type="date"
    />

    <q-select
        dense
        :hint="sex == 'L' ? 'Laki-Laki' : sex == 'P' ? 'Perempuan' : ''"
        class="q-mt-sm"
        outlined
        label="Jenis Kelamin"
        v-model="sex"
        :options="['L', 'P']"
        emit-value
        map-options
        error-color="negative"
    />
</template>
<script setup>
import santriState from "src/stores/santri-store";
import { m2h, bacaHijri } from "src/utils/hijri";
import { isDate, formatDateFull } from "src/utils/format-date";
import { onMounted, ref, toRefs } from "vue";
import { filterKotaLahir, fetchKotaLahir } from "src/utils/fetch-alamat";

const props = defineProps({
    title: { type: String, default: "" },
});

const { santri } = santriState();
const { nama, nisn, nkk, nik, tmp_lahir, tgl_lahir, sex } = toRefs(santri);

const loadingKotaLahir = ref(false);
const listKotaLahir = ref([]);
const optionsKotaLahir = ref(listKotaLahir);

const filterTempatLahir = (val, update) => {
    filterKotaLahir(val, update, optionsKotaLahir, listKotaLahir);
};

onMounted(async () => {
    await fetchKotaLahir(listKotaLahir, loadingKotaLahir);
});
</script>
