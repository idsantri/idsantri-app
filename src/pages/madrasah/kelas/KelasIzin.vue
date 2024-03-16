<template lang="">
	<div>
		<template-array
			:data="izinMap"
			:spinner="loading"
			:btn-print="true"
			@add="handleAdd"
			@edit="handleEdit"
			@print="handlePrint"
		/>
		<q-dialog v-model="crudShow">
			<kelas-izin-crud
				:data="izinObj"
				:is-new="isNew"
				title="Input Izin Madrasah"
				@success-submit="loadData"
				@success-delete="loadData"
			/>
		</q-dialog>
	</div>

	<!-- <pre>{{ izin }}	</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import TemplateArray from 'src/pages/santri/relations/TemplateArray.vue';
import { formatDateShort } from 'src/utils/format-date';
import { formatHijri } from 'src/utils/hijri';
import KelasIzinCrud from 'src/pages/madrasah/kelas/KelasIzinCrud.vue';
import { getObjectById } from 'src/utils/array-object';

const route = useRoute();
const params = route.params;
const izin = ref([]);
const izinMap = ref([]);
const izinObj = ref({});
const loading = ref(false);
const isNew = ref(false);
const crudShow = ref(false);
const kelas = ref({});

async function loadData() {
	const data = await apiGet({
		endPoint: `izin-madrasah/kelas/${params.id}`,
		loading,
	});
	izin.value = data.izin_madrasah;
	kelas.value = data.kelas;
	izinMap.value = data.izin_madrasah.map((v) => ({
		Tanggal: formatDateShort(v.tgl_m) + ' | ' + formatHijri(v.tgl_h),
		Durasi: v.durasi + ' hari',
		Keperluan:
			v.keperluan +
			`${v.keterangan?.length > 0 ? ' (' + v.keterangan + ')' : ''}`,
		Catatan: v.catatan,
		id: v.id,
	}));
}
onMounted(async () => {
	await loadData();
});

const handleAdd = () => {
	// console.log('add');
	izinObj.value.santri_id = kelas.value.santri_id;
	izinObj.value.nama = kelas.value.nama;
	izinObj.value.th_ajaran_h = kelas.value.th_ajaran_h;
	izinObj.value.tingkat_id = kelas.value.tingkat_id;
	izinObj.value.kelas = kelas.value.kelas;
	izinObj.value.kelas_id = kelas.value.id;

	isNew.value = true;
	crudShow.value = true;
};

const handleEdit = ({ id }) => {
	// console.log('edit');
	izinObj.value = getObjectById(izin, id);
	izinObj.value.santri_id = kelas.value.santri_id;
	izinObj.value.nama = kelas.value.nama;
	izinObj.value.th_ajaran_h = kelas.value.th_ajaran_h;
	izinObj.value.tingkat_id = kelas.value.tingkat_id;
	izinObj.value.kelas = kelas.value.kelas;

	isNew.value = false;
	crudShow.value = true;
};

function handlePrint(v) {
	console.log(v);
	alert('Belum siap');
}
</script>
<style lang=""></style>
