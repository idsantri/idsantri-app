<template>
    <q-card class="q-ma-sm">
        <q-card-section class="q-pa-none">
            <q-card style="width: 100%">
                <q-card-section
                    class="bg-teal-8 text-teal-1 q-pa-sm flex items-center"
                >
                    <h2 class="text-subtitle1 no-margin">Cari</h2>
                    <q-space />
                    <q-btn
                        label="Tambah"
                        color="teal-6"
                        class="text-teal-11"
                        icon="add"
                        no-caps=""
                        dense=""
                        @click="showModalSantri = true"
                    />
                </q-card-section>
                <q-card-section>
                    <search-santri />
                </q-card-section>
            </q-card>
        </q-card-section>
    </q-card>

    <!-- modal -->
    <q-dialog persistent="" v-model="showModalSantri">
        <santri-modal-crud />
    </q-dialog>
</template>
<script setup>
import SearchSantri from "./SearchSantri";
import SantriModalCrud from "../santri/SantriModalCrud.vue";
import { ref } from "vue";

const showModalSantri = ref(false);
</script>
