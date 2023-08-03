<template>
    <div>
        <template-array
            :data="domisiliMap"
            @add="handleAdd"
            @edit="handleEdit"
        />

        <q-dialog v-model="crudShow">
            <santri-domisili-crud
                :data="domisiliProps"
                :is-new="isNew"
                title="Input Domisili"
            />
        </q-dialog>
    </div>
</template>
<script setup>
import { apiTokened } from "src/config/api.js";
import { ref, onMounted } from "vue";
import TemplateArray from "src/components/TemplateArray.vue";
import { formatDateShort } from "src/utils/format-date.js";
import { m2hFormat } from "src/utils/hijri.js";
import { getObjectById } from "src/utils/array-object";
import SantriDomisiliCrud from "./SantriDomisiliCrud.vue";
import santriStore from "src/stores/santri-store";
import { useRoute } from "vue-router";

const { santri } = santriStore();

const route = useRoute();
const santriId = route.params.id;

const crudShow = ref(false);
const domisiliProps = ref({});
const domisiliMap = ref([]);
const domisiliArr = ref([]);
const isNew = ref(false);
async function fetchByIdSantri(id) {
    try {
        const { data } = await apiTokened.get(`santri/${id}/domisili`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const { domisili } = await fetchByIdSantri(santriId);
domisiliArr.value = domisili;
domisiliMap.value = domisili.map((v, i) => ({
    Tanggal: formatDateShort(v.created_at) + " | " + m2hFormat(v.created_at),
    Domisili: v.domisili,
    Keterangan: v.keterangan || "-",
    id: v.id,
}));
onMounted(async () => {});

const handleAdd = () => {
    domisiliProps.value = {
        santri_id: domisiliArr.value[0]?.santri_id || santri.id,
        nama: domisiliArr.value[0]?.nama || santri.nama,
    };
    isNew.value = true;
    crudShow.value = true;
};

const handleEdit = ({ id }) => {
    domisiliProps.value = getObjectById(domisiliArr, id);
    isNew.value = false;
    crudShow.value = true;
};
</script>
