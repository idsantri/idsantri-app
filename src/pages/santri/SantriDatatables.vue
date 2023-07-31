<template>
    <suspense>
        <template #default>
            <q-card style="width: 100%">
                <q-card-section
                    class="bg-teal-8 text-teal-1 q-pa-sm flex items-center"
                >
                    <h2 class="text-subtitle1 no-margin text-teal-11">
                        Cari Santri
                    </h2>
                    <q-space />
                    <q-btn
                        label="Tambah"
                        color="teal-12"
                        class="text-teal-10"
                        icon="add"
                        no-caps=""
                        dense=""
                        @click="crudSantri = true"
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
                        Cari berdsarkan ID, Nama Santri, NIK, atau alamat
                    </div>
                    <q-space />
                    <q-btn
                        label="Tutup"
                        color="teal-1"
                        class="text-teal-10"
                        no-caps=""
                        v-close-popup
                        id="btn-close-santri-search"
                        v-show="searchSantri"
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

    <!-- TODO: modal crud harus keluarkan agar modal search bisa ditutup -->
    <!-- modal -->
    <q-dialog persistent="" v-model="crudSantri">
        <santri-modal-crud />
    </q-dialog>
</template>

<script setup>
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net-dt";
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { apiTokened } from "../../config/api";
import SantriModalCrud from "./SantriModalCrud.vue";
import { notifySuccess } from "src/utils/notify";
import dialogStore from "src/stores/dialog-store";

const dialog = dialogStore();
const { searchSantri, crudSantri } = toRefs(dialog);

const router = useRouter();

const url = `${apiTokened.defaults.baseURL}/santri/search`;
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
            title: "Nama",
            data: "nama",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToSantri(${row.id})'>${row.nama}</span>`;
            },
        },
        {
            title: "Alamat",
            data: "alamat_pendek",
            render: function (data, type, row, meta) {
                return type === "display" && data.length > 50
                    ? `<span title='${data}'>${data.substr(0, 50)}&mldr;</span>`
                    : data;
            },
        },
        {
            title: "Data Akhir",
            data: "data_akhir",
        },
        {
            title: "NIK",
            data: "nik",
        },
        {
            title: "Wali",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToWali(${row.wali_id})'>${row.wali_nama} (${row.wali_status})</span>`;
            },
        },
        {
            title: "Ortu",
            render: function (data, type, row, meta) {
                return `<span class="dt-link" onclick='goToOrtu(${row.ortu_id})'>${row.ayah} | ${row.ibu}</span>`;
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
    document.goToWali = (id) => {
        router.push(`/wali/${id}`);
    };
    document.goToOrtu = (id) => {
        router.push(`/ortu/${id}`);
    };
    document.copyId = (id) => {
        navigator.clipboard.writeText(id);
        notifySuccess(`ID (${id}) sudah disalin/dicopy ke clipboard`);
        searchSantri.value = false;
    };
});

onUnmounted(() => {
    delete document.goToSantri;
    delete document.goToWali;
    delete document.goToOrtu;
    delete document.copyId;
});
</script>
<style lang="scss">
@import "datatables.net-dt";
</style>
