<template>
    <q-card class="full-width" style="max-width: 425px">
        <q-form @submit.prevent="onSubmit">
            <q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
                <div class="text-subtitle1">Input Data Santri</div>
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
                    swipeable
                    infinite
                >
                    <!-- registrasi -->
                    <q-carousel-slide
                        :name="carousel.registrasi.button"
                        class="no-wrap flex-center"
                    >
                        <input-register :title="carousel.registrasi.title" />
                    </q-carousel-slide>

                    <!-- identitas -->
                    <q-carousel-slide
                        :name="carousel.identitas.button"
                        class="no-wrap flex-center"
                    >
                        <input-identity :title="carousel.identitas.title" />
                    </q-carousel-slide>

                    <!-- alamat -->
                    <q-carousel-slide
                        :name="carousel.alamat.button"
                        class="no-wrap flex-center"
                    >
                        <input-alamat :title="carousel.alamat.title" />
                    </q-carousel-slide>

                    <!-- pendidikan -->
                    <q-carousel-slide
                        :name="carousel.pendidikan.button"
                        class="no-wrap flex-center"
                    >
                        <input-pendidikan-akhir
                            :title="carousel.pendidikan.title"
                        />
                    </q-carousel-slide>

                    <!-- ortu wali -->
                    <q-carousel-slide
                        :name="carousel.ortu_wali.button"
                        class="no-wrap flex-center"
                    >
                        <input-ortu-wali :title="carousel.ortu_wali.title" />
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
import InputRegister from "./SantriModalCrudRegister.vue";
import InputIdentity from "./SantriModalCrudIdentity.vue";
import InputAlamat from "./SantriModalCrudAlamat.vue";
import InputPendidikanAkhir from "./SantriModalCrudPendidikanAkhir.vue";
import InputOrtuWali from "./SantriModalCrudOrtuWali.vue";
import santriStore from "src/stores/santri-store";
import { notifyError, notifySuccess } from "src/utils/notify";
import toArray from "src/utils/to-array";
import { forceRerender } from "src/utils/buttons-click";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const props = defineProps({ isNew: { type: Boolean, default: true } });
if (props.isNew) santriStore().$reset();

const santri = reactive(santriStore().santri);

const onSubmit = async () => {
    const data = JSON.parse(JSON.stringify(santri));
    try {
        let response = null;
        if (props.isNew) response = await apiTokened.post(`santri`, data);
        else response = await apiTokened.put(`santri/${santri.id}`, data);

        // console.log("response", response);
        notifySuccess(response.data.message);
        forceRerender();
    } catch (error) {
        // console.log("error", error);
        toArray(error.response.data.message).forEach((message) => {
            notifyError(message);
        });
    }
};

const carousel = {
    registrasi: {
        title: "Data Registrasi",
        button: "1",
    },
    identitas: {
        title: "Identitas Diri",
        button: "2",
    },
    alamat: {
        title: "Data Alamat",
        button: "3",
    },
    pendidikan: {
        title: "Riwayat Pendidikan",
        button: "4",
    },
    ortu_wali: {
        title: "Orang Tua dan Wali",
        button: "5",
    },
};
const slide = ref(carousel.registrasi.button);
const toggleOptions = [
    {
        label: carousel.registrasi.button,
        value: carousel.registrasi.button,
    },
    {
        label: carousel.identitas.button,
        value: carousel.identitas.button,
    },
    {
        label: carousel.alamat.button,
        value: carousel.alamat.button,
    },
    {
        label: carousel.pendidikan.button,
        value: carousel.pendidikan.button,
    },
    {
        label: carousel.ortu_wali.button,
        value: carousel.ortu_wali.button,
    },
];

const $q = useQuasar();
const router = useRouter();

const deleteData = async (id) => {
    $q.dialog({
        title: "Konfirmasi",
        message: `<span style="color:'red'">Hapus santri?</span>`,
        cancel: true,
        persistent: false,
        html: true,
    }).onOk(async () => {
        try {
            const response = await apiTokened.delete(`santri/${id}`);
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
        santriStore().setNull();
    } else {
        deleteData(santri.id);
    }
};
</script>
