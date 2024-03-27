<template lang="">
	<div v-if="loading">
		<q-spinner-cube
			color="green-12"
			size="8em"
			class="flex q-ma-lg q-mx-auto"
		/>
	</div>
	<div v-else>
		<div v-if="iuran.length > 0">
			<q-list bordered separator>
				<q-item class="q-pa-sm bg-green-2">
					<q-item-section>
						<q-item-label caption
							>Tahun Ajaran:
							<strong>{{ thAjaranH }}</strong></q-item-label
						>
						<q-item-label overline>TOTAL PEMBAYARAN</q-item-label>
						<q-item-label class="text-body1"
							>Rp{{ digitSeparator(total) }}</q-item-label
						>
					</q-item-section>
				</q-item>

				<q-item
					class="q-pa-sm"
					v-for="(item, index) in iuran"
					:key="index"
				>
					<q-item-section>
						<q-item-label overline class="flex">
							{{ item.iuran }}
							<q-space />
							<div class="text-caption">
								{{ formatDateShort(item.tgl_m) }} |
								{{ formatHijri(m2h(item.tgl_m)) }}
							</div>
						</q-item-label>

						<q-item-label
							><span class="text-bold">
								Rp{{ digitSeparator(item.sub_total) }}</span
							>
							(Rp{{ digitSeparator(item.nominal) }} x
							{{ item.qty }})</q-item-label
						>
						<q-item-label caption="">
							<em>Kasir:</em>&nbsp;<strong>{{
								item.kasir || '-'
							}}</strong
							>; <em>Via:</em>&nbsp;<strong>{{
								item.via || '-'
							}}</strong
							>; <em>Ket.:</em>&nbsp;<strong>{{
								item.keterangan || '-'
							}}</strong>
						</q-item-label>
					</q-item-section>
					<q-item-section side class="">
						<div class="flex flex-center">
							<q-toggle
								color="green"
								class="text-green-10"
								v-model="item.check"
								checked-icon="check"
								unchecked-icon="clear"
								:true-value="1"
								:false-value="0"
								@update:model-value="
									(val, evt) =>
										toggleUpdate(val, evt, item, index)
								"
							/>
							<q-btn
								icon="edit"
								dense
								round=""
								color="green"
								unelevated=""
								class="text-green-11"
								@click="editIuran(item)"
							/>
						</div>
					</q-item-section>
				</q-item>
				<q-item class="q-pa-sm bg-green-8">
					<q-item-section class="text-green-11">
						<q-item-label overline class="text-green-1"
							>TOTAL CEK</q-item-label
						>
						<q-item-label class="text-body1"
							>Rp{{
								digitSeparator(getTotalCheck())
							}}</q-item-label
						>
					</q-item-section>
					<q-item-section side class="">
						<div class="flex flex-center">
							<DropDownPrint
								:data="{
									santri_id: santriId,
									th_ajaran_h: thAjaranH,
								}"
							/>
						</div>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
		<div v-else class="q-ma-lg">
			<div class="text-body2 text-italic text-center">
				Tidak ada data untuk ditampilkan!
			</div>
			<hr />
			<div class="text-weight-thin text-italic text-center">
				Klik angka tahun disamping, atau tambahkan data!
			</div>
		</div>
	</div>

	<q-dialog v-model="crudShow">
		<iuran-santri-crud
			:is-new="false"
			title="Input Iuran"
			:data="dataIuran"
			@success-delete="loadData"
			@success-submit="loadData"
			:disable-santri-id="true"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import apiUpdate from 'src/api/api-update';
import { formatDateShort } from 'src/utils/format-date';
import { digitSeparator } from 'src/utils/format-number';
import { formatHijri, m2h } from 'src/utils/hijri';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import IuranSantriCrud from 'src/pages/bendahara/iuran/santri/IuranSantriCrud.vue';
import DropDownPrint from 'src/pages/bendahara/iuran/santri/DropDownPrint.vue';

const route = useRoute();
const thAjaranH = ref(route.params.thAjaranH);
const santriId = ref(route.params.id);
const loading = ref(false);
const iuran = ref([]);
const total = ref(0);
const santri = ref({});
const crudShow = ref(false);
const dataIuran = ref({});

async function loadData() {
	if (thAjaranH.value && santriId.value) {
		const data = await apiGet({
			endPoint: `iuran/santri/${santriId.value}/${thAjaranH.value}`,
			loading,
		});
		// console.log(data);
		santri.value = data.santri;
		iuran.value = data.iuran;
		total.value = iuran.value.reduce((sum, item) => {
			return sum + item.sub_total;
		}, 0);
	}
}
onMounted(async () => {
	loadData();
});

async function toggleUpdate(val, evt, item, index) {
	const updated = await apiUpdate({
		endPoint: `iuran/${item.id}/set-check`,
		data: {
			check: val,
		},
		confirm: false,
		notify: false,
	});
	if (!updated) {
		iuran.value[index].check = val == 1 ? 0 : 1;
	}
}

function getTotalCheck() {
	return iuran.value
		.filter((obj) => obj.check == 1)
		.reduce((sum, item) => {
			return sum + item.sub_total;
		}, 0);
}

function editIuran(iuran) {
	dataIuran.value = iuran;
	crudShow.value = true;
	// console.log(dataIuran.value);
}
</script>
<style lang=""></style>
