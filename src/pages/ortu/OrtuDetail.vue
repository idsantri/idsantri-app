<template>
    <q-card class="q-ma-sm">
        <q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle1">Data Orang Tua</div>
                <q-space />
                <q-btn
                    label="Cari"
                    @click="searchOrtu = true"
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
                    @click="editOrtu"
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
                    <card-column
                        :data="dataAyah"
                        title="Data Ayah"
                        class="q-mb-sm"
                    />
                    <card-column
                        :data="dataIbu"
                        title="Data Ibu"
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
    <!-- <pre>{{ ortu }}</pre> -->
</template>
<script setup>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { apiTokened } from "src/config/api.js";
import CardColumn from "../../components/CardColumn.vue";
import CardListSantri from "src/components/CardListSantri.vue";
import ortuStore from "src/stores/ortu-store.js";
import toArray from "src/utils/to-array";
import { notifyError } from "src/utils/notify";
import dialogStore from "src/stores/dialog-store";

const ortu = reactive({});
const route = useRoute();
const ortuId = route.params.id;

const dialog = dialogStore();
const { searchOrtu, crudOrtu } = toRefs(dialog);

try {
    const { data } = await apiTokened.get(`ortu/${ortuId}`);
    Object.assign(ortu, data.ortu);
} catch (error) {
    toArray(error.response.data.message).forEach((message) => {
        notifyError(message);
    });
}

/**
 * send to modal edit
 */
function editOrtu() {
    ortuStore().setOrtu(ortu);
    ortuStore().setEdit();
    crudOrtu.value = true;
}

// identity
const identity = {
    ID: ortu.id,
    "Jumlah Anak": ortu.jumlah_anak,
};
// ayah
const dataAyah = {
    Ayah: ortu.ayah?.toUpperCase(),
    NIK: ortu.a_nik,
    Hidup: ortu.a_hidup ? "Ya" : "Tidak",
};
// ibu
const dataIbu = {
    Ibu: ortu.ibu?.toUpperCase(),
    NIK: ortu.i_nik,
    Hidup: ortu.i_hidup ? "Ya" : "Tidak",
};

// santri
const { santri } = ortu;
</script>
