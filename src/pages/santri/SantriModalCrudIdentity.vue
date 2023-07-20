<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nama"
        v-model="santri.nama"
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
        v-model="santri.nisn"
        :rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
        error-color="red-6"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nomor Kartu Keluarga"
        v-model="santri.nkk"
        :rules="[
            (val) =>
                !val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
        ]"
        error-color="red-6"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Nomor Induk Kependudukan"
        v-model="santri.nik"
        :rules="[
            (val) =>
                !val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
        ]"
        error-color="red-6"
    />
    <q-select
        dense
        hint="Kota kelahiran"
        class="q-mt-sm"
        outlined
        label="Tempat Lahir"
        v-model="santri.tmp_lahir"
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
            isDate(santri.tgl_lahir)
                ? formatDateFull(santri.tgl_lahir) +
                  ' | ' +
                  bacaHijri(m2h(santri.tgl_lahir))
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Tanggal Lahir"
        v-model="santri.tgl_lahir"
        type="date"
    />

    <q-select
        dense
        :hint="
            santri.sex == 'L'
                ? 'Laki-Laki'
                : santri.sex == 'P'
                ? 'Perempuan'
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Jenis Kelamin"
        v-model="santri.sex"
        :options="['L', 'P']"
        emit-value
        map-options
        error-color="red-6"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { m2h, isDate, formatDateFull, bacaHijri } from "src/utils/calendar";
import { reactive, ref } from "vue";

const { santri } = santriState();
const props = defineProps({
    title: { type: String, default: "" },
});

const listKotaLahir = reactive([]);
const optionsKotaLahir = ref(listKotaLahir);
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
    const response = await apiTokened.get(`alamat/kota-lahir`);
    Object.assign(listKotaLahir, response.data.kota_lahir);
} catch (error) {
    console.log("Not Found: categories -> list", error.response);
}
</script>
<style></style>
