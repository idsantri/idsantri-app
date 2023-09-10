<template>
	<div v-if="data.length > 0">
		<q-list bordered separator>
			<q-item class="q-pa-sm">
				<q-item-section>
					<q-item-label overline>TOTAL PEMBAYARAN</q-item-label>
					<q-item-label class="text-body1"
						>Rp{{ digitSeparator(total) }}</q-item-label
					>
				</q-item-section>
			</q-item>
			<q-item class="q-pa-sm" v-for="(item, index) in data" :key="index">
				<q-item-section>
					<q-item-label overline class="flex"
						>{{ item.iuran }}
						<q-space />

						<span>{{ formatDateShort(item.created_at) }}</span>
					</q-item-label>

					<q-item-label
						><span class="text-bold">
							Rp{{ digitSeparator(item.sub_total) }}</span
						>
						(Rp{{ digitSeparator(item.nominal) }} x
						{{ item.qty }})</q-item-label
					>
					<q-item-label caption="">
						Ket.: {{ item.keterangan || '-' }}; Via:
						{{ item.via || '-' }}
					</q-item-label>
				</q-item-section>
				<q-item-section side class="no-padding">
					<q-btn
						icon="edit"
						dense
						round=""
						color="green"
						unelevated=""
						class="text-green-11 q-pa-md"
					/>
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
</template>
<script setup>
import getData from 'src/api/get-data';
import { formatDateShort } from 'src/utils/format-date';
import { digitSeparator } from 'src/utils/format-number';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const th = ref(route.params.th_ajaran_h);
const santriId = ref(route.params.id);

const data = reactive([]);
const total = ref();
if (th.value?.length == 9 && santriId.value) {
	const { iuran } = await getData({
		endPoint: `santri/${santriId.value}/iuran/${th.value}`,
	});
	Object.assign(data, iuran);
	total.value = iuran.reduce((sum, item) => {
		return sum + item.sub_total;
	}, 0);
}
console.log(data);
</script>
