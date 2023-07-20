<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>
    <q-input
        dense
        hint="Kosongkan jika ingin diisi otomatis!"
        class="q-mt-sm"
        outlined
        label="ID"
        v-model="santri.id"
        :rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
        error-color="red-6"
    />

    <q-input
        dense
        :hint="
            isDate(santri.tgl_daftar_m)
                ? formatDateFull(santri.tgl_daftar_m)
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Tanggal Daftar (M)"
        v-model="santri.tgl_daftar_m"
        type="date"
        @change="
            isDate(santri.tgl_daftar_m)
                ? (santri.tgl_daftar_h = m2h(santri.tgl_daftar_m))
                : ''
        "
    />
    <q-input
        dense
        :hint="
            santri.tgl_daftar_h?.length ? bacaHijri(santri.tgl_daftar_h) : ''
        "
        class="q-mt-sm"
        outlined
        label="Tanggal Daftar (H)"
        v-model="santri.tgl_daftar_h"
        mask="####-##-##"
    />
    <q-select
        dense
        :hint="
            santri.th_ajaran_h?.length == 9
                ? listThAjaran.find((item) => item.val0 === santri.th_ajaran_h)
                      ?.val1
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Tahun Ajaran"
        v-model="santri.th_ajaran_h"
        :options="listThAjaran"
        option-value="val0"
        option-label="val0"
        emit-value
        map-options
        :rules="[(val) => !!val || 'Harus diisi!']"
        error-color="red-6"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { m2h, isDate, formatDateFull, bacaHijri } from "src/utils/calendar";
import { reactive } from "vue";

const { santri } = santriState();

const props = defineProps({
    title: { type: String, default: "" },
});

const listThAjaran = reactive([]);
try {
    const { data } = await apiTokened.get(`lists/key/tahun-ajaran`);
    const th = data.tahun_ajaran;
    th.sort((a, b) => {
        if (a.val0 > b.val0) {
            return -1;
        }
    });

    Object.assign(listThAjaran, th);

    if (!santri.th_ajaran_h.length) {
        santri.th_ajaran_h = listThAjaran[0]?.val0;
    }
} catch (error) {
    console.log("Not Found: tahun ajaran -> list", error.response);
}
</script>
<style></style>
