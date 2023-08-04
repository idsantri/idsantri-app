<template>
    <template-object :data="ortu" :route="'/ortu/' + result.id" />
</template>
<script setup>
import { ref, onMounted } from "vue";
import { apiTokened } from "src/config/api.js";
import TemplateObject from "src/components/TemplateObject.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const santriId = route.params.id;

const result = ref({});
async function fetchData() {
    try {
        const { data } = await apiTokened.get(`santri/${santriId}/ortu`);
        result.value = data.ortu;
    } catch (error) {
        console.log(error);
    }
}

const ortu = ref({});
await fetchData();
ortu.value = {
    "ID Ortu": result.value.id,
    Ayah: result.value.ayah,
    Ibu: result.value.ibu,
    "Anak ke": `${result.value.anak_ke || "?"} dari ${
        result.value.jumlah_anak || "?"
    }  bersaudara`,
};
onMounted(async () => {});
</script>
