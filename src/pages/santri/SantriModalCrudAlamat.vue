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
        :options="lists[0]"
        @focus="fetchAlamat('provinsi')"
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
        :options="lists[1]"
        @focus="fetchAlamat('kabupaten')"
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
        :options="lists[2]"
        @focus="fetchAlamat('kecamatan')"
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
        :options="lists[3]"
        @focus="fetchAlamat('desa')"
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
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kode Pos"
        v-model="kode_pos"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { ref, toRefs, watch } from "vue";

const state = santriState().santri;
const { provinsi, kabupaten, kecamatan, desa, rt, rw, jl, kode_pos } =
    toRefs(state);

// console.log("s", state);
const props = defineProps({
    title: { type: String, default: "" },
});

const lists = ref([]);
async function fetchAlamat(alamat) {
    let url = "";
    if (alamat == "provinsi") {
        url = `alamat/provinsi`;
    }

    if (alamat == "kabupaten") {
        if (!provinsi.value) return;
        url = `alamat/kabupaten?provinsi=${provinsi.value}`;
    }
    if (alamat == "kecamatan") {
        if (!provinsi.value || !kabupaten.value) return;
        url = `alamat/kecamatan?provinsi=${provinsi.value}&kabupaten=${kabupaten.value}`;
    }
    if (alamat == "desa") {
        if (!provinsi.value || !kabupaten.value || !kecamatan.value) return;
        url = `alamat/desa?provinsi=${provinsi.value}&kabupaten=${kabupaten.value}&kecamatan=${kecamatan.value}`;
    }

    try {
        const response = await apiTokened.get(url);
        if (alamat == "provinsi") {
            lists.value[0] = response.data.provinsi;
        }
        if (alamat == "kabupaten") {
            lists.value[1] = response.data.kabupaten;
        }
        if (alamat == "kecamatan") {
            lists.value[2] = response.data.kecamatan;
        }
        if (alamat == "desa") {
            lists.value[3] = response.data.desa;
        }
    } catch (error) {
        console.log(`Not Found: ${alamat} -> list`, error);
    }
}

watch(
    [provinsi, kabupaten, kecamatan],
    (
        [newProvinsi, newKabupaten, newKecamatan],
        [oldProvinsi, oldKabupaten, oldKecamatan]
    ) => {
        if (newProvinsi != oldProvinsi) {
            kabupaten.value = null;
            kecamatan.value = null;
            desa.value = null;
        }
        if (newKabupaten != oldKabupaten) {
            kecamatan.value = null;
            desa.value = null;
        }
        if (newKecamatan != oldKecamatan) {
            desa.value = null;
        }
    }
);
</script>
<style></style>
