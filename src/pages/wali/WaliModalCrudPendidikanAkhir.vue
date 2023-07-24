<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>
    <div class="text-italic">Sebelum masuk ke lembaga ini</div>
    <div class="text-overline">Formal</div>

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Tingkat"
        emit-value
        map-options
        v-model="pa_formal_tingkat"
        :options="lists['pendidikan-akhir-formal']"
        :loading="loading['pendidikan-akhir-formal']"
        use-input=""
        new-value-mode="add"
        clearable
    />
    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kelas"
        emit-value
        map-options
        v-model="pa_formal_kelas"
        :options="lists['kelas']"
        :loading="loading['kelas']"
        use-input=""
        new-value-mode="add"
        clearable
    />
    <q-input
        dense
        hint="Nama sekolah dan alamat"
        class="q-mt-sm"
        outlined
        label="Alamat"
        v-model="pa_formal_alamat"
        autogrow
        clearable
    />

    <div class="text-overline">Diniyah</div>
    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Tingkat"
        emit-value
        map-options
        v-model="pa_diniyah_tingkat"
        :options="lists['pendidikan-akhir-diniyah']"
        :loading="loading['pendidikan-akhir-diniyah']"
        use-input=""
        new-value-mode="add"
        clearable
    />
    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kelas"
        emit-value
        map-options
        v-model="pa_diniyah_kelas"
        :options="lists['kelas']"
        :loading="loading['kelas']"
        use-input=""
        new-value-mode="add"
        clearable
    />
    <q-input
        dense
        hint="Nama sekolah dan alamat"
        class="q-mt-sm"
        outlined
        label="Alamat"
        v-model="pa_diniyah_alamat"
        clearable
        autogrow
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
const {
    pa_formal_tingkat,
    pa_formal_kelas,
    pa_formal_alamat,
    pa_diniyah_tingkat,
    pa_diniyah_kelas,
    pa_diniyah_alamat,
} = toRefs(santri);

const lists = ref([]);
const loading = ref([]);
async function fetchLists(listsRequest) {
    const url = `lists/key/${listsRequest}`;
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
    await fetchLists("pendidikan-akhir-formal");
    await fetchLists("pendidikan-akhir-diniyah");
    await fetchLists("kelas");
});
</script>
<style></style>
