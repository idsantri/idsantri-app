<template>
    <q-card class="q-ma-sm">
        <q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle1">Data Santri</div>
                <q-space />
                <q-btn
                    label="Cari"
                    @click="searchSantri = true"
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
                    @click="editSantri"
                />
            </div>
        </q-card-section>
        <q-card-section class="no-padding">
            <div class="row">
                <!-- santri -->
                <div class="col-12 col-sm-6 col-md-4 q-pa-sm">
                    <card-column
                        class="q-mb-sm"
                        :data="register"
                        title="Registrasi"
                    />

                    <!-- identitas -->
                    <card-image
                        class="q-mb-sm"
                        :data="identity"
                        title="Identitas"
                        :image="
                            santri?.image ||
                            require('../../assets/user-default.png')
                        "
                    >
                        <template #button>
                            <q-btn
                                class="q-mt-sm full-width"
                                icon="upload"
                                no-caps=""
                                label="Foto"
                                dense=""
                                size="sm"
                                outline=""
                                color="teal-10"
                                @click="showUploader = true"
                            />
                        </template>
                    </card-image>
                </div>

                <!-- relations -->
                <div class="col-12 col-sm-6 col-md-4 q-pa-sm">
                    <tab-component :santri-id="santriId" />
                </div>
            </div>
        </q-card-section>
    </q-card>

    <!-- modal -->
    <upload-image
        :show-uploader="showUploader"
        :url="`${apiTokened.defaults.baseURL}/santri/${santriId}/images`"
        :headers="{
            Authorization: apiTokened.defaults.headers.common.Authorization,
        }"
        @update-uploader="handleUploader"
    />

    <!-- modal -->
    <q-dialog persistent="" v-model="crudSantri">
        <santri-modal-crud :is-new="false" />
    </q-dialog>

    <q-dialog v-model="searchSantri" full-width="" style="max-width: 1024px">
        <santri-datatables />
    </q-dialog>
    <!-- <pre>{{ santri }}</pre> -->
</template>
<script setup>
import { reactive, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { apiTokened } from "src/config/api.js";
import { formatDateFull } from "../../utils/format-date";
import CardColumn from "../../components/CardColumn.vue";
import CardImage from "../../components/CardImage.vue";
import UploadImage from "./SantriUploadImage.vue";
import SantriModalCrud from "./SantriModalCrud.vue";
import santriStore from "src/stores/santri-store";
import SantriDatatables from "./SantriDatatables.vue";
import { bacaHijri } from "src/utils/hijri";
import toArray from "src/utils/to-array";
import { notifyError } from "src/utils/notify";
import TabComponent from "./relations/TabComponent";
import dialogStore from "src/stores/dialog-store";

const santri = reactive({});
const route = useRoute();
const santriId = route.params.id;
const showSpinner = ref(false);

const dialog = dialogStore();
const { searchSantri, crudSantri } = toRefs(dialog);

try {
    showSpinner.value = true;
    const { data } = await apiTokened.get(`santri/${santriId}`);
    Object.assign(santri, data.santri);
} catch (error) {
    toArray(error.response.data.message).forEach((message) => {
        notifyError(message);
    });
} finally {
    showSpinner.value = false;
}

/**
 * send to modal edit
 */
function editSantri() {
    santriStore().setSantri(santri);
    santriStore().setOrtu(santri?.ortu);
    santriStore().setWali(santri?.wali);
    crudSantri.value = true;
}

// uploader
const showUploader = ref(false);
const handleUploader = (value) => (showUploader.value = value);

// register
const register = {
    ID: santri.id,
    "Tanggal Daftar":
        formatDateFull(santri.tgl_daftar_m) +
        " | " +
        bacaHijri(santri.tgl_daftar_h),
    "Tahun Ajaran": `${santri.th_ajaran_h || "-"} | ${
        santri.th_ajaran_m || "-"
    }`,
};

// identity
const identity = {
    Nama: `${santri.nama.toUpperCase()} (${santri.sex.toUpperCase()})`,
    Alamat: `${santri.jl || " "} RT ${String(santri.rt || 0).padStart(
        3,
        0
    )} RW ${String(santri.rw || 0).padStart(3, "0")} ${santri.desa || " "} ${
        santri.kecamatan || " "
    } ${santri.kabupaten || " "} ${santri.provinsi || " "} ${
        santri.kode_pos || " "
    }`.replace(/\s\s+/g, " "),
    "Data Akhir": santri.data_akhir.data_akhir,
    Kelahiran: `${santri.tmp_lahir || "-"}, ${formatDateFull(
        santri.tgl_lahir
    )}`,
};
</script>
