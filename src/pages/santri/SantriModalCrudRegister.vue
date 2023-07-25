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
        v-model="id"
        :rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
        error-color="negative"
    />

    <q-input
        dense
        :hint="isDate(tgl_daftar_m) ? formatDateFull(tgl_daftar_m) : ''"
        class="q-mt-sm"
        outlined
        label="Tanggal Daftar (M)"
        v-model="tgl_daftar_m"
        type="date"
        @change="isDate(tgl_daftar_m) ? (tgl_daftar_h = m2h(tgl_daftar_m)) : ''"
    />
    <q-input
        dense
        :hint="tgl_daftar_h?.length ? bacaHijri(tgl_daftar_h) : ''"
        class="q-mt-sm"
        outlined
        label="Tanggal Daftar (H)"
        v-model="tgl_daftar_h"
        mask="####-##-##"
    />
    <q-select
        dense
        :hint="
            th_ajaran_h?.length == 9
                ? listThAjaran.find((item) => item.val0 === th_ajaran_h)?.val1
                : ''
        "
        class="q-mt-sm"
        outlined
        label="Tahun Ajaran"
        v-model="th_ajaran_h"
        :options="listThAjaran"
        option-value="val0"
        option-label="val0"
        emit-value
        map-options
        :rules="[(val) => !!val || 'Harus diisi!']"
        error-color="negative"
        :loading="loadingTh"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { m2h, bacaHijri } from "src/utils/hijri";
import { isDate, formatDateFull } from "src/utils/format-date";
import { onMounted, ref, toRefs, watch } from "vue";

const props = defineProps({
    title: { type: String, default: "" },
});

const { santri } = santriState();
const { id, tgl_daftar_m, tgl_daftar_h, th_ajaran_h } = toRefs(santri);

const loadingTh = ref(false);
const listThAjaran = ref([]);

onMounted(async () => {
    await fetchThAjaran();
});

watch(tgl_daftar_h, (newValue, oldValue) => {
    // Menghapus karakter "-" dari tgl_daftar_h
    if (newValue !== oldValue) {
        tgl_daftar_h.value = newValue.replace(/-/g, "");
    }
});

async function fetchThAjaran() {
    loadingTh.value = true;
    try {
        const { data } = await apiTokened.get(`lists/key/tahun-ajaran`);
        const th = data.tahun_ajaran;
        // console.log("th", th);
        th.sort((a, b) => {
            if (a.val0 > b.val0) {
                return -1;
            }
        });

        listThAjaran.value = th;

        if (!th_ajaran_h.value?.length) {
            th_ajaran_h.value = listThAjaran.value[0]?.val0;
        }
    } catch (error) {
        console.log("Not Found: tahun ajaran -> list", error);
    } finally {
        loadingTh.value = false;
    }
}
</script>
