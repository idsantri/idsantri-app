<template lang="">
	<q-card class="q-mx-sm">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Data Personalia
				</q-toolbar-title>
				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Edit"
					no-caps=""
					icon="edit"
					color="green-2"
				/>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<div v-if="loading">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<div v-else class="row">
				<div class="col-4 q-pr-sm">
					<q-img
						src="/user-default.png"
						:ratio="3 / 4"
						alt="personalia"
					/>
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
				</div>
				<div class="col">
					<div v-for="(value, key) in personaliaObj" :key="key">
						<div class="text-caption text-italic">
							{{ key }}
						</div>
						<div class="q-mb-sm">{{ value }}</div>
					</div>
				</div>
			</div>

			<!-- <pre>{{ personalia }}</pre> -->
		</q-card-section>
	</q-card>
</template>
<script setup>
import getData from 'src/api/api-get';
import { formatDateFull } from 'src/utils/format-date';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const personalia = ref({});
const personaliaObj = ref({});
const loading = ref(false);
onMounted(async () => {
	if (route.params.id) {
		const data = await getData({
			endPoint: `personalia/${route.params.id}`,
			loading,
		});
		personalia.value = data.personalia;

		personaliaObj.value = {
			Nama: `${personalia.value.nama?.toUpperCase()} (${personalia.value.sex?.toUpperCase()})`,
			Alamat: `${personalia.value.jl || ' '} RT ${String(
				personalia.value.rt || 0
			).padStart(3, 0)} RW ${String(personalia.value.rw || 0).padStart(
				3,
				'0'
			)} ${personalia.value.desa || ' '} ${
				personalia.value.kecamatan || ' '
			} ${personalia.value.kabupaten || ' '} ${
				personalia.value.provinsi || ' '
			} ${personalia.value.kode_pos || ' '}`.replace(/\s\s+/g, ' '),
			Kelahiran: `${personalia.value.tmp_lahir || '-'}, ${formatDateFull(
				personalia.value.tgl_lahir
			)}`,
			Telepon: personalia.value.telepon || '-',
			Email: personalia.value.email || '-',
		};
	}
});
</script>
<style lang=""></style>
