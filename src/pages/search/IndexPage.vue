<template>
    <div class="q-pa-sm">
        <q-toolbar class="bg-teal-8 text-teal-11 shadow-2 rounded-borders">
            <!-- <q-btn flat label="Homepage" /> -->
            <div class="text-subtitle1">Cari &hellip;</div>
            <q-space />

            <q-tabs shrink stretch class="text-teal-11" v-model="tab">
                <q-tab name="santri" label="Santri" to="/santri" exact />
                <q-tab name="wali" label="Wali" to="/wali" exact />
                <q-tab name="ortu" label="Ortu" to="/ortu" exact />
            </q-tabs>
        </q-toolbar>

        <q-tab-panels animated :model-value="tab">
            <q-tab-panel name="santri" class="no-padding">
                <santri-search />
            </q-tab-panel>

            <q-tab-panel name="wali" class="no-padding">
                <wali-search />
            </q-tab-panel>

            <q-tab-panel name="ortu" class="no-padding">
                <ortu-search />
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script setup>
import SantriSearch from "../santri/SantriSearch.vue";
import WaliSearch from "../wali/WaliSearch.vue";
import OrtuSearch from "../ortu/OrtuSearch.vue";
import { ref } from "vue";

const tab = ref("santri");
</script>
