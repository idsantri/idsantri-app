<template>
	<div class="q-ma-sm" style="max-width: 600px">
		<q-card>
			<q-card-section class="q-pa-sm">
				<q-select
					dense
					outlined
					label="Pilih List"
					v-model="listModel"
					:options="listData"
					emit-value
					map-options
					behavior="menu"
				/>
			</q-card-section>
		</q-card>
		<q-card class="q-mt-sm" v-if="listModel">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				List {{ snakeToTitleCase(listModel) }}
				<q-space />
				<q-btn flat="" icon="cached" @click="reload" />
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div v-if="spinner">
					<q-spinner-cube
						color="green-12"
						size="8em"
						class="flex q-mx-auto"
					/>
				</div>
				<div v-else class="q-gutter-sm">
					<div v-for="list in listGet" :key="list.id">
						<q-input dense outlined v-model="list.val0">
							<template v-slot:after>
								<q-btn-group push>
									<q-btn
										color="positive"
										glossy
										icon="save"
										@click="updateList(list)"
									/>
									<q-btn
										color="negative"
										glossy
										icon="delete"
										@click="deleteList(list)"
									/>
								</q-btn-group>
							</template>
						</q-input>
					</div>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						:label="`Masukkan data baru`"
						v-model="newList.val0"
					>
						<template v-slot:after>
							<q-btn-group push>
								<q-btn
									color="positive"
									glossy
									icon="save"
									@click="saveList"
								/>
								<q-btn
									color="grey"
									glossy
									icon="delete"
									disable
								/>
							</q-btn-group>
						</template>
					</q-input>
				</div>
			</q-card-section>
		</q-card>
	</div>

	<!-- <pre>{{ listGet }}</pre> -->
</template>
<script setup>
import { ref, watch } from 'vue';
import getData from 'src/api/get-data.js';
import { snakeToKebabCase, snakeToTitleCase } from 'src/utils/format-text';
import deleteData from 'src/api/api-delete';
import updateData from 'src/api/api-update';
import postData from 'src/api/api-post';

const listModel = ref('');
const listGet = ref([]);
const spinner = ref(false);
const newList = ref({});

async function fetchData() {
	const selected = listData.find(({ value }) => value == listModel.value);
	const data = await getData({
		endPoint: `lists/${snakeToKebabCase(selected.value)}`,
		spinner: spinner,
	});
	listGet.value = data[selected.value];
}

watch(listModel, async (newList, oldList) => {
	if (newList != oldList) await fetchData();
});

async function reload() {
	await fetchData();
}

const listData = [
	{ value: 'domisili', label: 'Domisili', mode: '1' },
	{ value: 'hubungan_wali', label: 'Hubungan Wali', mode: '1' },
	{ value: 'iuran', label: 'Iuran', mode: '1' },
	// { value: 'izin-keperluan', label: '', mode: '1' },
	// { value: 'jabatan', label: '', mode: '1' },
	// { value: 'kelas', label: '', mode: '1' },
	// { value: 'keterangan-domisili', label: '', mode: '1' },
	// { value: 'keterangan-iuran', label: '', mode: '1' },
	// { value: 'keterangan-izin', label: '', mode: '1' },
	// { value: 'keterangan-kelas', label: '', mode: '1' },
	// { value: 'keterangan-status', label: '', mode: '1' },
	// { value: 'metode-pembayaran', label: '', mode: '1' },
	// { value: 'nilai-ahwal-item', label: '', mode: '1' },
	// { value: 'nilai-ahwal-text', label: '', mode: '1' },
	// { value: 'pekerjaan', label: '', mode: '1' },
	// { value: 'pendidikan-akhir-diniyah', label: '', mode: '1' },
	// { value: 'pendidikan-akhir-formal', label: '', mode: '1' },
	// { value: 'pulangan', label: '', mode: '1' },
	// { value: 'satuan', label: '', mode: '1' },
	// { value: 'siklus', label: '', mode: '1' },
	// { value: 'status', label: '', mode: '1' },
	// { value: 'tahun-ajaran', label: '', mode: '1' },
	// { value: 'takzir-santri', label: '', mode: '1' },
	// { value: 'tatib-murid', label: '', mode: '1' },
	// { value: 'tatib-santri', label: '', mode: '1' },
	// { value: 'tingkat', label: '', mode: '1' },
];

async function updateList(list) {
	const { key, val0, val1, val2, id } = list;
	const data = { key, val0, val1, val2 };
	const upd = await updateData({ endPoint: `lists/${id}`, data });
	if (upd) reload();
}

async function deleteList(list) {
	const del = await deleteData({ endPoint: `lists/${list.id}` });
	if (del) reload();
}

async function saveList() {
	const { val0, val1, val2 } = newList.value;
	const data = {
		key: snakeToKebabCase(listModel.value),
		val0,
		val1: val1 || null,
		val2: val2 || null,
	};
	// console.log(data);

	const post = await postData({ endPoint: `lists`, data });
	if (post) {
		newList.value = {};
		reload();
	}
}
</script>
