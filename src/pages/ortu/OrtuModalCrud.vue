<template>
    <q-card class="full-width" style="max-width: 425px">
        <q-form @submit.prevent="onSubmit">
            <q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
                <div class="text-subtitle1">Input Data Orang Tua</div>
            </q-card-section>
            <q-card-section class="no-padding">
                <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    animated
                    control-color="primary"
                    class="full-width"
                    style="height: 70vh"
                >
                    <!-- identitas -->
                    <q-carousel-slide
                        :name="carousel.identitas.button"
                        class="no-wrap flex-center"
                    >
                        <input-identity :title="carousel.identitas.title" />
                    </q-carousel-slide>

                    <!-- ayah -->
                    <q-carousel-slide
                        :name="carousel.ayah.button"
                        class="no-wrap flex-center"
                    >
                        <input-ayah :title="carousel.ayah.title" />
                    </q-carousel-slide>

                    <!-- ibu -->
                    <q-carousel-slide
                        :name="carousel.ibu.button"
                        class="no-wrap flex-center"
                    >
                        <input-ibu :title="carousel.ibu.title" />
                    </q-carousel-slide>
                </q-carousel>
            </q-card-section>

            <q-card-section class="q-pa-sm">
                <div class="row justify-center">
                    <q-btn-toggle
                        toggle-color="teal-10"
                        text-color="text-teal-11"
                        no-caps=""
                        glossy
                        v-model="slide"
                        :options="toggleOptions"
                    />
                </div>
            </q-card-section>
            <q-card-actions class="flex bg-teal-6">
                <q-btn
                    :label="props.isNew ? 'Reset' : 'Hapus'"
                    class="bg-red text-red-1"
                    no-caps=""
                    @click="resetOrDelete"
                />
                <q-space />
                <q-btn
                    label="Tutup"
                    v-close-popup
                    class="bg-teal-11"
                    no-caps=""
                    id="btn-close-ortu-crud"
                />
                <q-btn
                    type="submit"
                    label="Simpan"
                    class="bg-teal-10 text-teal-11"
                    no-caps=""
                />
            </q-card-actions>
        </q-form>
    </q-card>
</template>
<script setup>
import { reactive, ref } from "vue";
import { apiTokened } from "src/config/api";
import InputIdentity from "./OrtuModalCrudIdentity.vue";
import InputAyah from "./OrtuModalCrudAyah.vue";
import InputIbu from "./OrtuModalCrudIbu.vue";
import ortuStore from "src/stores/ortu-store.js";
import { notifyError, notifySuccess } from "src/utils/notify";
import { forceRerender } from "src/utils/buttons-click";
import toArray from "src/utils/to-array";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { closeOrtuCrud, closeOrtuSearch } from "src/utils/buttons-click";
import dialogStore from "src/stores/dialog-store";
const props = defineProps({ isNew: { type: Boolean, default: true } });

if (props.isNew) ortuStore().$reset();

const ortu = reactive(ortuStore().ortu);

const onSubmit = async () => {
    const data = JSON.parse(JSON.stringify(ortu));
    try {
        let response = null;
        if (props.isNew) response = await apiTokened.post(`ortu`, data);
        else response = await apiTokened.put(`ortu/${ortu.id}`, data);

        // console.log("response", response);
        notifySuccess(response.data.message);
        dialogStore().toggleCrudOrtu(false);
        dialogStore().toggleSearchOrtu(false);
        if (props.isNew) {
            navigator.clipboard.writeText(response.data.ortu.id);
            notifySuccess(
                `ID (${response.data.ortu.id}) sudah disalin/dicopy ke clipboard`
            );
        } else {
            forceRerender();
        }
    } catch (error) {
        // console.log("error", error);
        toArray(error.response.data.message).forEach((message) => {
            notifyError(message);
        });
    }
};

const carousel = {
    identitas: {
        title: "Identitas",
        button: "1",
    },
    ayah: {
        title: "Data Ayah",
        button: "2",
    },
    ibu: {
        title: "Data Ibu",
        button: "3",
    },
};
const slide = ref(carousel.identitas.button);
const toggleOptions = [
    {
        label: carousel.identitas.button,
        value: carousel.identitas.button,
    },
    {
        label: carousel.ayah.button,
        value: carousel.ayah.button,
    },
    {
        label: carousel.ibu.button,
        value: carousel.ibu.button,
    },
];

const $q = useQuasar();
const router = useRouter();

const deleteData = async (id) => {
    $q.dialog({
        title: "Konfirmasi",
        message: `<span style="color:'red'">Hapus Orang Tua?</span><br/><br/><hr/><em>Pastikan yang bersangkutan tidak memiliki anak!</em><hr/>`,
        cancel: true,
        persistent: false,
        html: true,
    }).onOk(async () => {
        try {
            const response = await apiTokened.delete(`ortu/${id}`);
            notifySuccess(response.data.message);
            router.go(-1);
        } catch (error) {
            toArray(error.response.data.message).forEach((message) => {
                notifyError(message);
            });
        }
    });
};

const resetOrDelete = () => {
    if (props.isNew) {
        ortuStore().setNull();
    } else {
        deleteData(ortu.id);
    }
};
</script>
<style></style>
