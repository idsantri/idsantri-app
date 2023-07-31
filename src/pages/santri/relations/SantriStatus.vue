<template>
    <template-array
        :data="lists"
        @add="handleAdd"
        @edit="handleEdit"
    ></template-array>
</template>
<script setup>
import { apiTokened } from "src/config/api.js";
import { ref } from "vue";
import TemplateArray from "./TemplateArray.vue";
import { formatDateShort } from "src/utils/format-date.js";
import { m2hFormat } from "src/utils/hijri.js";
const props = defineProps({
    santriId: { default: null },
});

const lists = ref([]);
try {
    const { data } = await apiTokened.get(`santri/${props.santriId}/status`);
    lists.value = data.status.map((v, i) => ({
        Tanggal:
            formatDateShort(v.created_at) + " | " + m2hFormat(v.created_at),
        Status: v.status,
        Keterangan: v.keterangan || "-",
        id: v.id,
    }));
} catch (error) {
    console.log(error);
}

const handleAdd = () => {
    console.log("add");
};
const handleEdit = ({ id }) => {
    console.log(id);
};
</script>
