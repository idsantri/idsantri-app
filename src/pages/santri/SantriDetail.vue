<template>
    <q-card class="q-ma-sm">
        <q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
            <div class="flex items-center">
                <div class="text-subtitle1">Data Santri</div>
                <q-space />
                <q-btn
                    no-caps
                    size="sm"
                    color="teal-2"
                    class="text-teal-10"
                    icon="edit"
                    label="Edit"
                />
            </div>
        </q-card-section>
        <q-card-section class="no-padding">
            <div class="row" style="max-width: 1024px">
                <div class="col-12 col-md-6 q-pa-sm">
                    <card-list
                        :data="register"
                        title="Registrasi"
                        class="q-mb-sm"
                    />

                    <!-- identitas -->
                    <card-image
                        :data="identity"
                        title="Identitas"
                        class="q-mb-sm"
                        :image="
                            santri?.image?.path ||
                            require('../../assets/user-default.png')
                        "
                    >
                        <template #button>
                            <q-btn
                                class="q-mt-sm full-width"
                                icon="edit"
                                no-caps=""
                                label="Foto"
                                dense=""
                                size="sm"
                                outline=""
                                color="teal-10"
                            />
                        </template>
                    </card-image>
                </div>

                <div class="col-12 col-md-6 q-pa-sm">
                    <card-list :data="ortu" title="Orang Tua" class="q-mb-sm" />
                    <card-list :data="wali" title="Wali">
                        <template #button>
                            <q-btn
                                icon="info"
                                color="teal-12"
                                class="text-teal-10"
                                size="sm"
                            />
                        </template>
                    </card-list>
                </div>
            </div>
        </q-card-section>
    </q-card>
    <pre>{{ santri }}</pre>
</template>
<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { apiTokened } from "src/config/api.js";
import { fullDate } from "../../utils/format-date";
import CardList from "../../components/CardList.vue";
import CardImage from "../../components/CardImage.vue";

const santri = reactive({});
const route = useRoute();
const santriId = route.params.id;

try {
    const { data } = await apiTokened.get(`santri/${santriId}`);
    Object.assign(santri, data.santri);
} catch (error) {
    console.log(error);
}

// register
const register = {
    ID: santri.id,
    "Tanggal Daftar": fullDate(santri.tgl_daftar_m),
    "Tahun Ajaran": santri.th_ajaran_h,
};

// identity
const identity = {
    Nama: `${santri.nama.toUpperCase()} (${santri.sex.toUpperCase()})`,
    Alamat: `${santri.jl || " "} RT ${String(santri.rt || 0).padStart(
        3,
        0
    )} RW ${String(santri.rw || 0).padStart(3, "0")} ${santri.desa || " "} ${
        santri.kecamatan || " "
    } ${santri.kabupaten || " "} ${santri.provinsi || " "} ${
        santri.kode_pos || " "
    }`.replace(/\s\s+/g, " "),
    "Data Akhir": santri.data_akhir.data_akhir,
    Kelahiran: `${santri.tmp_lahir || "-"}, ${fullDate(santri.tgl_lahir)}`,
};

// ortu
const ortu = {
    Ayah: santri.ortu.ayah,
    Ibu: santri.ortu.ibu,
    "Anak ke": `${santri.anak_ke || "?"} dari ${
        santri.ortu.count_anak || "?"
    }  bersaudara`,
};

// wali
const wali = {
    Nama: `${santri.wali.nama} (${santri.wali.sex.toUpperCase()})`,
    Status: santri.wali_status,
    Telepon: santri.wali.telepon,
};
</script>
