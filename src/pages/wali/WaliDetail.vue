<template>
    <q-card class="q-ma-sm">
        <q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle1">Data Wali</div>
                <q-space />
                <q-btn
                    label="Cari"
                    @click="searchWali = true"
                    size="sm"
                    color="teal-2"
                    class="text-teal-10 q-mr-sm"
                    icon="search"
                />
                <q-btn
                    no-caps
                    size="sm"
                    color="teal-2"
                    class="text-teal-10"
                    icon="edit"
                    label="Edit"
                    @click="editWali"
                />
            </div>
        </q-card-section>
        <q-card-section class="no-padding">
            <div class="row" style="max-width: 1024px">
                <div class="col-12 col-md-6 q-pa-sm">
                    <card-column
                        :data="identity"
                        title="Identitas"
                        class="q-mb-sm"
                    />
                </div>
                <div class="col-12 col-md-6 q-pa-sm">
                    <card-list-santri
                        :data="santri"
                        title="Data Santri (Anak)"
                        class="q-mb-sm"
                    />
                </div>
            </div>
        </q-card-section>
    </q-card>
    <!-- <pre>{{ wali }}</pre> -->
</template>
<script setup>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { apiTokened } from "src/config/api.js";
import { formatDateFull } from "../../utils/format-date";
import CardColumn from "../../components/CardColumn.vue";
import CardListSantri from "src/components/CardListSantri.vue";
import waliStore from "src/stores/wali-store";
import { formatAlamatLengkap } from "src/utils/format-text";
import toArray from "src/utils/to-array";
import { notifyError } from "src/utils/notify";
import dialogStore from "src/stores/dialog-store";

const wali = reactive({});
const route = useRoute();
const waliId = route.params.id;

const dialog = dialogStore();
const { searchWali, crudWali } = toRefs(dialog);

try {
    const { data } = await apiTokened.get(`wali/${waliId}`);
    Object.assign(wali, data.wali);
} catch (error) {
    toArray(error.response.data.message).forEach((message) => {
        notifyError(message);
    });
}

/**
 * send to modal edit
 */
function editWali() {
    waliStore().setWali(wali);
    waliStore().setEdit();
    crudWali.value = true;
}

// identity
const identity = {
    ID: wali.id,
    Nama: `${wali.nama.toUpperCase()} (${wali.sex.toUpperCase()})`,
    NIK: wali.nik || "-",
    Alamat: formatAlamatLengkap(
        wali.jl,
        wali.rt,
        wali.rw,
        wali.desa,
        wali.kecamatan,
        wali.kabupaten,
        wali.provinsi,
        wali.kode_pos
    ),
    Kelahiran: `${wali.tmp_lahir || "-"}, ${formatDateFull(wali.tgl_lahir)}`,
    Pekerjaan: wali.pekerjaan || "-",
    Kontak: (wali.telepon || "-") + "; " + (wali.email || "-"),
};

// santri
const { santri } = wali;
</script>
