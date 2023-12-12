<template>
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Santri</div>
				<q-space />
				<q-btn
					label="Cari"
					@click="searchSantri = true"
					size="sm"
					color="green-2"
					class="text-green-10 q-mr-sm"
					icon="search"
				/>
				<q-btn
					no-caps
					size="sm"
					color="green-2"
					class="text-green-10"
					icon="edit"
					label="Edit"
					@click="editSantri"
				/>
			</div>
		</q-card-section>
		<q-card-section class="no-padding">
			<div class="row">
				<!-- santri -->
				<div class="col-12 col-sm-6 col-md-4 q-pa-sm">
					<card-column
						class="q-mb-sm"
						:data="register"
						:loading="loading"
						title="Registrasi"
					/>

					<!-- identitas -->
					<card-image
						class="q-mb-sm"
						title="Identitas"
						:data="identity"
						:loading="loading"
						:image="santri?.image || '/user-default.png'"
					>
						<template #button>
							<q-btn
								class="q-mt-sm full-width"
								icon="upload"
								no-caps=""
								label="Foto"
								dense=""
								size="sm"
								outline=""
								color="green-10"
								@click="showUploader = true"
							/>
						</template>
					</card-image>
				</div>

				<!-- relations -->
				<div class="col-12 col-sm-6 col-md-4 q-pa-sm">
					<div v-if="pathIuran()">
						<santri-iuran :santri-id="santriId" />
					</div>
					<div v-else>
						<santri-relations :santri-id="santriId" />
					</div>
				</div>
			</div>
		</q-card-section>
	</q-card>

	<!-- modal -->
	<upload-image
		:show-uploader="showUploader"
		:url="`/images/santri/${santriId}`"
		@update-uploader="handleUploader"
	/>

	<!-- <pre>{{ santri }}</pre> -->
</template>
<script setup>
import { reactive, ref, toRefs, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { formatDateFull } from '../../utils/format-date';
import CardColumn from '../../components/CardColumn.vue';
import CardImage from '../../components/CardImage.vue';
import UploadImage from 'src/components/ImageUploader.vue';
import santriStore from 'src/stores/santri-store';
import { bacaHijri } from 'src/utils/hijri';
import SantriRelations from 'src/pages/santri/SantriRelations.vue';
import dialogStore from 'src/stores/dialog-store';
import apiGet from 'src/api/api-get';
import SantriIuran from 'src/pages/santri/iuran/SantriIuran.vue';

const path = ref(useRoute().fullPath);
function pathIuran() {
	if (path.value.indexOf('iuran-total') != -1) return false;
	if (path.value.indexOf('iuran') != -1) return true;
	return false;
}

const santri = reactive({});
const route = useRoute();
const santriId = route.params.id;

const dialog = dialogStore();
const { searchSantri, crudSantri } = toRefs(dialog);

const register = ref({});
const identity = ref({});
const loading = ref(false);
onMounted(async () => {
	const data = await apiGet({ endPoint: `santri/${santriId}`, loading });
	Object.assign(santri, data.santri);

	// register
	register.value = {
		ID: santri.id,
		'Tanggal Daftar':
			formatDateFull(santri.tgl_daftar_m) +
			' | ' +
			bacaHijri(santri.tgl_daftar_h),
		'Tahun Ajaran': `${santri.th_ajaran_h || '-'} | ${
			santri.th_ajaran_m || '-'
		}`,
	};

	// identity
	identity.value = {
		Nama: `${santri.nama?.toUpperCase()} (${santri.sex?.toUpperCase()})`,
		Alamat: `${santri.jl || ' '} RT ${String(santri.rt || 0).padStart(
			3,
			0
		)} RW ${String(santri.rw || 0).padStart(3, '0')} ${
			santri.desa || ' '
		} ${santri.kecamatan || ' '} ${santri.kabupaten || ' '} ${
			santri.provinsi || ' '
		} ${santri.kode_pos || ' '}`.replace(/\s\s+/g, ' '),
		Kelahiran: `${santri.tmp_lahir || '-'}, ${formatDateFull(
			santri.tgl_lahir
		)}`,
		'Data Akhir': santri?.data_akhir?.data_akhir || '-',
	};

	santriStore().setSantri(santri);
	santriStore().setOrtu(santri?.ortu);
	santriStore().setWali(santri?.wali);
	santriStore().setDataAkhir(santri?.data_akhir);
});

/**
 * send to modal edit
 */
function editSantri() {
	santriStore().setEdit();
	crudSantri.value = true;
}

// uploader
const showUploader = ref(false);
const handleUploader = (value) => (showUploader.value = value);
</script>
