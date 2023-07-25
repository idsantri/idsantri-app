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
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { onMounted, ref, toRefs, watch } from "vue";

const props = defineProps({
    title: { type: String, default: "" },
});
const { santri } = santriState();
const { provinsi, kabupaten, kecamatan, desa, rt, rw, jl, kode_pos } =
    toRefs(santri);

const lists = ref([]);
const loading = ref([]);
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
        loading.value[alamat] = true;

        const response = await apiTokened.get(url);
        lists.value[alamat] = response.data[alamat];
        // if (alamat == "provinsi") {
        //     lists.value["provinsi"] = response.data.provinsi;
        // }
    } catch (error) {
        console.log(`Not Found: ${alamat} -> list`, error);
    } finally {
        loading.value[alamat] = false;
    }
}

onMounted(async () => {
    await fetchAlamat("provinsi");
    await fetchAlamat("kabupaten");
    await fetchAlamat("kecamatan");
    await fetchAlamat("desa");
});

watch(
    [provinsi, kabupaten, kecamatan],
    async (
        [newProvinsi, newKabupaten, newKecamatan],
        [oldProvinsi, oldKabupaten, oldKecamatan]
    ) => {
        if (newProvinsi != oldProvinsi) {
            kabupaten.value = null;
            kecamatan.value = null;
            desa.value = null;

            lists.value["kabupaten"] = [];
            lists.value["kecamatan"] = [];
            lists.value["desa"] = [];

            await fetchAlamat("kabupaten");
        }
        if (newKabupaten != oldKabupaten) {
            kecamatan.value = null;
            desa.value = null;

            lists.value["kecamatan"] = [];
            lists.value["desa"] = [];

            await fetchAlamat("kecamatan");
        }
        if (newKecamatan != oldKecamatan) {
            desa.value = null;

            lists.value["desa"] = [];

            await fetchAlamat("desa");
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
