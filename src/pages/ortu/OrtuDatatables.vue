<template>
    <suspense>
        <template #default>
            <q-card style="width: 100%">
                <q-card-section
                    class="bg-teal-8 text-teal-1 q-pa-sm flex items-center"
                >
                    <h2 class="text-subtitle1 no-margin text-teal-11">
                        Cari Orang Tua
                    </h2>
                    <q-space />
                    <q-btn
                        label="Tambah"
                        color="teal-12"
                        class="text-teal-10"
                        icon="add"
                        no-caps=""
                        dense=""
                        @click="showModal = true"
                    />
                </q-card-section>
                <q-card-section>
                    <data-table
                        class="display table nowrap dt"
                        :options="options"
                        style="overflow: hidden"
                    />
                </q-card-section>
                <q-card-actions class="bg-teal-7">
                    <div class="text-body2 text-teal-11 text-italic">
                        Cari berdsarkan ID, Nama Ayah/Ibu, dan NIK
                    </div>
                    <q-space />
                    <q-btn
                        label="Tutup"
                        color="teal-1"
                        class="text-teal-10"
                        no-caps=""
                        v-close-popup
                        id="btn-close-ortu-search"
                    />
                </q-card-actions>
            </q-card>
        </template>
        <template #fallback>
            <q-spinner-cube
                color="teal-12"
                size="14em"
                class="absolute-center"
            />
        </template>
    </suspense>

    <!-- modal -->
    <q-dialog persistent="" v-model="showModal">
        <modal-crud />
    </q-dialog>
</template>

<script setup>
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net-dt";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { apiTokened } from "../../config/api";
import ModalCrud from "./OrtuModalCrud.vue";
import { notifySuccess } from "src/utils/notify";

const showModal = ref(false);

const router = useRouter();

const url = `${apiTokened.defaults.baseURL}/ortu/search`;
const headers = {
    Authorization: apiTokened.defaults.headers.common.Authorization,
};
DataTable.use(DataTablesLib);
const options = ref({
    processing: true,
    serverSide: true,
    responsive: true,
    ajax: {
        url: url,
        type: "POST",
        headers: headers,
    },
    order: [],
    columns: [
        {
            title: "ID",
            data: "id",
            render: function (data, type, row, meta) {
                return `<button onclick='copyId(${row.id})' class='dt-btn'>${row.id}</button>`;
            },
        },
        {
            title: "Ayah",
            data: "ayah",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToOrtu(${row.id})'>${row.ayah}</span>`;
            },
        },
        {
            title: "NIK Ayah",
            data: "a_nik",
        },
        {
            title: "Ibu",
            data: "ibu",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToOrtu(${row.id})'>${row.ibu}</span>`;
            },
        },
        {
            title: "NIK (Ibu)",
            data: "i_nik",
        },

        {
            title: "Anak1",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${
                    row.santri1_id
                })'>${row.santri1_nama || "-"}</span>`;
            },
        },
        {
            title: "Anak2",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${
                    row.santri2_id
                })'>${row.santri2_nama || "-"}</span>`;
            },
        },
        {
            title: "Anak3",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${
                    row.santri3_id
                })'>${row.santri3_nama || "-"}</span>`;
            },
        },
        {
            title: "Anak4",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${
                    row.santri4_id
                })'>${row.santri4_nama || "-"}</span>`;
            },
        },
        {
            title: "Anak5",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${
                    row.santri5_id
                })'>${row.santri5_nama || "-"}</span>`;
            },
        },
    ],
    language: {
        search: "Cari:",
        zeroRecords:
            "Tidak data data untuk ditampilkan. Coba kata kunci yang lain!",
        info: "Menampilkan _START_ hingga _END_, dari total _TOTAL_ data",
        // info: 'Halaman _PAGE_ dari _PAGES_ halaman',
        infoFiltered: "(disaring dari _MAX_ total data)",
        paginate: { first: "↑", previous: "←", next: "→", last: "↓" },
        lengthMenu: "_MENU_ Perhalaman",
    },
    autoWidth: false,
    // dom: 'bftip',
    scrollX: true,
    search: {
        return: true,
    },
});

onMounted(() => {
    document.goToSantri = (id) => {
        router.push(`/santri/${id}`);
    };
    document.goToOrtu = (id) => {
        router.push(`/ortu/${id}`);
    };
    document.copyId = (id) => {
        navigator.clipboard.writeText(id);
        notifySuccess(`ID (${id}) sudah disalin/dicopy ke clipboard`);
    };
});

onUnmounted(() => {
    delete document.goToSantri;
    delete document.goToOrtu;
    delete document.copyId;
});
</script>
<style lang="scss">
@import "datatables.net-dt";
</style>
