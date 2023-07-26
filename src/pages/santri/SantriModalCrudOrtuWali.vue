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
                <q-btn
                    outline
                    color="teal-10"
                    icon="visibility"
                    @click="check('ortu', ortu_id)"
                />
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
        :loading="loading['ortu']"
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
                <q-btn
                    outline
                    color="teal-10"
                    icon="visibility"
                    @click="check('wali', wali_id)"
                />
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
        :loading="loading['wali']"
    />

    <q-select
        dense
        hint="Hubungan dengan wali"
        class="q-mt-sm"
        outlined
        label="Status Wali*"
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
import { notifyError } from "src/utils/notify";
import toArray from "src/utils/to-array";
import { onMounted, reactive, ref, toRefs } from "vue";
import { fetchLists } from "src/utils/fetch-list";
const props = defineProps({
    title: { type: String, default: "" },
});
const { santri } = santriState();
const { ortu_id, anak_ke, wali_id, wali_status } = toRefs(santri);

const ortu = reactive(santriState().ortu);
const wali = reactive(santriState().wali);

const lists = ref([]);
const loading = ref([]);

onMounted(async () => {
    await fetchLists({ key: "hubungan-wali", loading, lists });
});

const check = async (param, id) => {
    loading.value[param] = true;
    try {
        const { data } = await apiTokened.get(`${param}/${id}`);
        // console.log(data);
        if (param == "ortu") santriState().setOrtu(data.ortu);
        if (param == "wali") santriState().setWali(data.wali);
    } catch (error) {
        toArray(error.response.data.message).forEach((message) => {
            notifyError(message);
        });
    } finally {
        loading.value[param] = false;
    }
};
</script>
<style></style>
