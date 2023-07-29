<template>
    <q-card class="q-ma-sm">
        <q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle1">Data Santri</div>
                <q-space />
                <q-btn
                    label="Cari"
                    @click="showSearchSantri = true"
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

                <!-- wali/ortu -->
                <div class="col-12 col-sm-6 col-md-4 q-pa-sm">
                    <card-column class="q-mb-sm" :data="ortu" title="Orang Tua">
                        <template #button>
                            <q-btn
                                icon="info"
                                color="teal-12"
                                class="text-teal-10"
                                size="sm"
                                :to="'/ortu/' + santri.ortu_id"
                            />
                        </template>
                    </card-column>
                    <card-column class="q-mb-sm" :data="wali" title="Wali">
                        <template #button>
                            <q-btn
                                icon="info"
                                color="teal-12"
                                class="text-teal-10"
                                size="sm"
                                :to="'/wali/' + santri.wali_id"
                            />
                        </template>
                    </card-column>
                </div>

                <!-- status/kelas/domisili -->
                <div class="col-12 col-sm-6 col-md-4 q-pa-sm">
                    <!-- <suspense> -->
                    <card-column-array
                        :data="santriStatus"
                        title="Riwayat Status"
                        class="q-mb-sm"
                    />
                    <!-- <template #fallback>
                            <q-spinner-cube
                                color="teal-12"
                                size="14em"
                                class="absolute-center"
                            />
                        </template>
                    </suspense> -->

                    <card-column-array
                        :data="santriKelas"
                        title="Riwayat Kelas"
                        class="q-mb-sm"
                    />
                    <card-column-array
                        :data="santriDomisili"
                        class="q-mb-sm"
                        title="Riwayat Domisili"
                    />
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
    <q-dialog persistent="" v-model="showModalSantri">
        <santri-modal-crud :is-new="false" />
    </q-dialog>

    <q-dialog
        v-model="showSearchSantri"
        full-width=""
        style="max-width: 1024px"
    >
        <santri-data-tables>
            <template #button>
                <q-btn
                    label="Tutup"
                    color="teal-1"
                    class="text-teal-10"
                    no-caps=""
                    v-close-popup
                />
            </template>
        </santri-data-tables>
    </q-dialog>
    <!-- <pre>{{ santri }}</pre> -->
    <!-- <pre>{{ kelas }}</pre> -->
</template>
<script setup>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { apiTokened } from "src/config/api.js";
import { formatDateFull } from "../../utils/format-date";
import CardColumn from "../../components/CardColumn.vue";
import CardImage from "../../components/CardImage.vue";
import UploadImage from "./SantriUploadImage.vue";
import SantriModalCrud from "./SantriModalCrud.vue";
import santriStore from "src/stores/santri-store";
import SantriDataTables from "./SantriDatatables.vue";
import { bacaHijri } from "src/utils/hijri";
import toArray from "src/utils/to-array";
import { notifyError } from "src/utils/notify";
import CardColumnArray from "src/components/CardColumnArray.vue";

const santri = reactive({});
const route = useRoute();
const santriId = route.params.id;
const showModalSantri = ref(false);
const showSearchSantri = ref(false);
const showSpinner = ref(false);

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
    showModalSantri.value = true;
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

// ortu
const ortu = {
    "ID Ortu": santri.ortu_id,
    Ayah: santri.ortu.ayah,
    Ibu: santri.ortu.ibu,
    "Anak ke": `${santri.anak_ke || "?"} dari ${
        santri.ortu.jumlah_anak || "?"
    }  bersaudara`,
};

// wali
const wali = {
    "ID Wali": santri.wali_id,
    Nama: `${santri.wali.nama} (${santri.wali.sex.toUpperCase()})`,
    Status: santri.wali_status,
    Telepon: santri.wali.telepon,
};

// status
const status = reactive([]);
try {
    const { data } = await apiTokened.get(`santri/${santriId}/status`);
    Object.assign(status, data.status);
} catch (error) {
    console.log(error);
}
const santriStatus = status.map((v, i) => ({
    Status: v.status,
    Keterangan: v.keterangan,
    id: v.id,
}));

// kelas
const kelas = reactive([]);
try {
    const { data } = await apiTokened.get(`santri/${santriId}/kelas`);
    Object.assign(kelas, data.kelas);
} catch (error) {
    console.log(error);
}
const santriKelas = kelas.map((v, i) => ({
    "Tahun Ajaran": `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ""} `,
    Kelas: `${v.kelas} ${v.tingkat}`,
    Keterangan: v.keterangan,
    id: v.id,
}));

// domisili
const domisili = reactive([]);
try {
    const { data } = await apiTokened.get(`santri/${santriId}/domisili`);
    Object.assign(domisili, data.domisili);
} catch (error) {
    console.log(error);
}
const santriDomisili = domisili.map((v, i) => ({
    Domisili: v.domisili,
    Keterangan: v.keterangan,
    id: v.id,
}));
</script>
