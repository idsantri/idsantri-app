<template>
    <div class="text-subtitle2">
        {{ props.title }}
    </div>

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Provinsi"
        emit-value
        map-options
        v-model="provinsi"
        :options="lists['provinsi']"
        :loading="loading['provinsi']"
    />

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kabupaten/Kota"
        emit-value
        map-options
        v-model="kabupaten"
        :options="lists['kabupaten']"
        :loading="loading['kabupaten']"
    />

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kecamatan"
        emit-value
        map-options
        v-model="kecamatan"
        :options="lists['kecamatan']"
        :loading="loading['kecamatan']"
    />

    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Desa/Keluarahan"
        emit-value
        map-options
        v-model="desa"
        :options="lists['desa']"
        :loading="loading['desa']"
        use-input=""
        new-value-mode="add"
    />

    <div class="row">
        <q-input
            dense
            hint=""
            class="q-mt-sm col q-mr-sm"
            outlined
            label="RT"
            v-model="rt"
            type="number"
        />

        <q-input
            dense
            hint=""
            class="q-mt-sm col q-ml-sm"
            outlined
            label="RW"
            v-model="rw"
            type="number"
        />
    </div>

    <q-input
        dense
        hint="Dusun, kampung, jalan, gang, nomor rumah ..."
        class="q-mt-sm"
        outlined
        label="Dusun"
        v-model="jl"
        autogrow=""
    />

    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kode Pos"
        v-model="kode_pos"
        :rules="[
            (val) =>
                !val || (val?.length == 5 && !isNaN(val)) || '5 digit angka!',
        ]"
        error-color="negative"
    />
</template>
<script setup>
import santriState from "src/stores/santri-store";
import { onMounted, ref, toRefs } from "vue";
import { fetchAlamat, watchAlamat } from "src/utils/fetch-alamat";
const props = defineProps({
    title: { type: String, default: "" },
});
const { santri } = santriState();
const { provinsi, kabupaten, kecamatan, desa, rt, rw, jl, kode_pos } =
    toRefs(santri);

const lists = ref([]);
const loading = ref([]);

onMounted(async () => {
    await fetchAlamat("provinsi", componentsAlamat);
    await fetchAlamat("kabupaten", componentsAlamat);
    await fetchAlamat("kecamatan", componentsAlamat);
    await fetchAlamat("desa", componentsAlamat);
});

const componentsAlamat = {
    lists,
    loading,
    provinsi,
    kabupaten,
    kecamatan,
    desa,
};
watchAlamat(componentsAlamat);
</script>
