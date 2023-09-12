<template>
	<q-card>
		<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Iuran</div>
				<q-space />
				<q-btn
					label="Tambah"
					size="sm"
					color="green-2"
					class="text-green-10"
					icon="add"
					@click="crudShow = true"
				/>
			</div>
		</q-card-section>

		<q-card-section class="q-pa-sm">
			<div class="row">
				<div class="col bg-green-1" style="max-width: 90px">
					<q-tabs vertical dense="" align="left" no-caps>
						<div v-for="(item, index) in dataIuran" :key="index">
							<q-route-tab
								:name="item"
								:label="item"
								:to="'/santri/' + santriId + '/iuran/' + item"
							/>
						</div>
					</q-tabs>
				</div>

				<div class="col">
					<suspense>
						<template #default>
							<santri-iuran-th />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="green-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</div>
			</div>
		</q-card-section>
	</q-card>
	<q-dialog v-model="crudShow">
		<santri-iuran-crud
			:is-new="true"
			title="Input Iuran"
			:santri="dataSantri"
	/></q-dialog>
</template>
<script setup>
import getData from 'src/api/get-data';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SantriIuranTh from 'src/pages/santri/iuran/SantriIuranTh.vue';
import SantriIuranCrud from 'src/pages/santri/iuran/SantriIuranCrud.vue';

const crudShow = ref(false);
const route = useRoute();
const santriId = ref(route.params.id);

const { iuran_total, santri } = await getData({
	endPoint: `santri/${santriId.value}/iuran-total`,
});

const dataIuran = iuran_total.map((v) => v.th_ajaran_h);
// console.log(iuran_total);

const dataSantri = ref(santri);
// console.log('s', dataSantri.value);
</script>
