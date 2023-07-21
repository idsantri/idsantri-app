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
        :loading="loading[0]"
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
        :loading="loading[1]"
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
        :loading="loading[2]"
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
        :loading="loading[3]"
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
import { onMounted, ref, toRefs, watch } from "vue";

const state = santriState().santri;
const { provinsi, kabupaten, kecamatan, desa, rt, rw, jl, kode_pos } =
    toRefs(state);

const props = defineProps({
    title: { type: String, default: "" },
});

const lists = ref([]);
const loading = ref([]);
async function fetchAlamat(alamat) {
    let url = "";
    if (alamat == "provinsi") {
        loading.value[0] = true;
        url = `alamat/provinsi`;
    }

    if (alamat == "kabupaten") {
        if (!provinsi.value) return;
        loading.value[1] = true;
        url = `alamat/kabupaten?provinsi=${provinsi.value}`;
    }
    if (alamat == "kecamatan") {
        if (!provinsi.value || !kabupaten.value) return;
        loading.value[2] = true;
        url = `alamat/kecamatan?provinsi=${provinsi.value}&kabupaten=${kabupaten.value}`;
    }
    if (alamat == "desa") {
        if (!provinsi.value || !kabupaten.value || !kecamatan.value) return;
        loading.value[3] = true;
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
    } finally {
        loading.value[0] = false;
        loading.value[1] = false;
        loading.value[2] = false;
        loading.value[3] = false;
    }
}

onMounted(async () => {
    await fetchAlamat("provinsi");
});

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
            // openDropdown();
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

/**
 * TODO: dropdown
 * pasang pada q-select:
 * ref="kabupatenSelectRef"
 *
 * TODO:
 * perlu use-input pada q-select desa
 *  */
const kabupatenSelectRef = ref(null);
const openDropdown = () => {
    // Periksa apakah ref untuk q-select tersedia
    if (kabupatenSelectRef.value !== null) {
        // Panggil metode showPopup() untuk membuka dropdown
        kabupatenSelectRef.value.showPopup();
    }
};
</script>
<style></style>
