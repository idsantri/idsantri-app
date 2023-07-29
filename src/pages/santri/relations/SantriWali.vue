<template>
    <template-object :data="wali" :route="'/wali/' + result.id" />
</template>
<script setup>
import { ref } from "vue";
import { apiTokened } from "src/config/api.js";
import TemplateObject from "./TemplateObject.vue";
const props = defineProps({
    santriId: { default: null },
});

const result = ref({});
try {
    const { data } = await apiTokened.get(`santri/${props.santriId}/wali`);
    result.value = data.wali;
} catch (error) {
    console.log(error);
}

// wali
const wali = {
    "ID Wali": result.value.id,
    Nama: `${result.value.nama} (${result.value.sex.toUpperCase()})`,
    Status: result.value.wali_status,
    Telepon: result.value.telepon || "-",
};
</script>
