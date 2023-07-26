<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Pendidikan Akhir Formal"
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
        label="Pendidikan Akhir Diniyah"
        emit-value
        map-options
        v-model="pa_diniyah_tingkat"
        :options="lists['pendidikan-akhir-diniyah']"
        :loading="loading['pendidikan-akhir-diniyah']"
        use-input=""
        new-value-mode="add"
        clearable
    />
</template>
<script setup>
import waliState from "src/stores/wali-store";
import { fetchLists } from "src/utils/fetch-list";
import { onMounted, ref, toRefs } from "vue";

const props = defineProps({
    title: { type: String, default: "" },
});
const { wali } = waliState();
const {
    pa_formal_tingkat,
    pa_diniyah_tingkat,
    pekerjaan,
    telepon,
    email,
    penghasilan,
} = toRefs(wali);

const lists = ref([]);
const loading = ref([]);

onMounted(async () => {
    await fetchLists({ loading, lists, key: "pendidikan-akhir-formal" });
    await fetchLists({ loading, lists, key: "pendidikan-akhir-diniyah" });
});
</script>
<style></style>
