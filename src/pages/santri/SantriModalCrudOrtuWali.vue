<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>
    <div class="text-overline q-mt-sm">Orang Tua</div>

    <q-input
        hint=""
        dense
        class=""
        outlined
        label="ID Orang Tua*"
        v-model="ortu_id"
    >
        <template v-slot:after>
            <q-btn-group glossy flat>
                <q-btn outline color="teal-10" icon="search" />
                <q-btn outline color="teal-10" icon="visibility" />
            </q-btn-group>
        </template>
    </q-input>

    <q-input
        hint=""
        dense
        class="q-mt-sm"
        outlined
        label="Nama Orang Tua"
        :model-value="ortu?.ayah + ' | ' + ortu?.ibu"
        readonly=""
    />

    <q-input hint="" dense class="" outlined label="Anak ke?" v-model="anak_ke">
        <template #after>
            <div class="text-body2">
                dari {{ ortu?.jumlah_anak || "?" }} bersaudara
            </div>
        </template>
    </q-input>

    <div class="text-overline q-mt-sm">Wali</div>
    <q-input
        hint=""
        dense
        class="q-mt-sm"
        outlined
        label="ID Wali*"
        v-model="wali_id"
    >
        <template v-slot:after>
            <q-btn-group glossy flat>
                <q-btn outline color="teal-10" icon="search" />
                <q-btn outline color="teal-10" icon="visibility" />
            </q-btn-group>
        </template>
    </q-input>

    <q-input
        hint=""
        dense
        class="q-mt-sm"
        outlined
        label="Nama Wali"
        :model-value="wali?.nama + ' (' + wali?.sex + ')'"
        readonly=""
    />

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Hubungan dengan Wali"
        emit-value
        map-options
        v-model="wali_status"
        :options="lists['hubungan-wali']"
        :loading="loading['hubungan-wali']"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { onMounted, ref, toRefs } from "vue";

const props = defineProps({
    title: { type: String, default: "" },
});
const { santri } = santriState();
const { ortu_id, anak_ke, wali_id, wali_status } = toRefs(santri);

const { ortu } = santriState();
const { wali } = santriState();

const lists = ref([]);
const loading = ref([]);

async function fetchLists(listsRequest) {
    const url = `lists/key/${listsRequest}`;
    // console.log("url", url);
    loading.value[listsRequest] = true;
    try {
        const response = await apiTokened.get(url);
        lists.value[listsRequest] = response.data.lists;
    } catch (error) {
        console.log(`Not Found: ${listsRequest} -> list`, error);
    } finally {
        loading.value[listsRequest] = false;
    }
}

onMounted(async () => {
    await fetchLists("hubungan-wali");
});
</script>
<style></style>
