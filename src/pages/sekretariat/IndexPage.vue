<template>
    <SearchSantri />
</template>
<script setup>
import toArray from "../../utils/to-array";
import { notifyError } from "../../utils/notify";
import { apiTokened } from "../../config/api";
import { reactive } from "vue";
import SearchSantri from "../search/SearchSantri.vue";
const santri = reactive({});
(async () => {
    try {
        const response = await apiTokened.get(`santri`);
        Object.assign(santri, response.data.santri);
    } catch (error) {
        toArray(error.response.data.message).forEach((message) => {
            notifyError(message);
        });
    }
})();
</script>
