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
        v-model="santri.provinsi"
        :options="optionsProvinsi"
        emit-value
        map-options
    />
    <q-select
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Kabupaten"
        v-model="santri.kabapaten"
        :options="listProvisi"
        option-value="val0"
        option-label="val0"
        emit-value
        map-options
    />

    <q-input
        dense
        hint="Kosongkan jika ingin diisi otomatis!"
        class="q-mt-sm"
        outlined
        label="ID"
        v-model="santri.id"
    />
    <q-input
        dense
        hint=""
        class="q-mt-sm"
        outlined
        label="Tanggal Daftar (M)"
        v-model="santri.id"
    />
</template>
<script setup>
import { apiTokened } from "src/config/api";
import santriState from "src/stores/santri-store";
import { reactive, ref } from "vue";

const { santri } = santriState();

const props = defineProps({
    title: { type: String, default: "" },
});

const listProvisi = reactive([]);
const optionsProvinsi = ref(listProvisi);
const filterProvinsi = (val, update) => {
    if (val === "") {
        update(() => {
            optionsProvinsi.value = listProvisi;
        });
        return;
    }

    update(() => {
        const needle = val.toLowerCase();
        optionsProvinsi.value = listProvisi.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
        );
    });
};

try {
    const response = await apiTokened.get(`alamat/kota-lahir`);
    Object.assign(listProvisi, response.data.kota_lahir);
} catch (error) {
    console.log("Not Found: categories -> list", error.response);
}
</script>
<style></style>
