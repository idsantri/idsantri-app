<template lang="">
	<div v-if="spinner">
		<q-spinner-cube
			color="green-12"
			size="8em"
			class="flex q-ma-lg q-mx-auto"
		/>
	</div>
	<div v-else>
		<q-list v-for="(kelas, index) in kelas" :key="index">
			<q-item>
				<q-item-section side>
					<q-btn
						round
						dense
						glossy
						color="green-6"
						icon="play_arrow"
						@click="
							$router.push(`/madrasah/kelas/${kelas.id}/riwayat`)
						"
					/>
				</q-item-section>
				<q-item-section>
					<q-item-label overline class="flex">
						{{ kelas.th_ajaran_h }}
						|
						{{ kelas.th_ajaran_m }}
						<q-space />
						{{ kelas.id }}
					</q-item-label>
					<q-item-label>
						{{ kelas.tingkat }} &mdash;
						{{ kelas.kelas }}

						{{
							kelas.no_absen
								? '(' +
								  String('0' + kelas.no_absen).slice(-2) +
								  ')'
								: ''
						}}
					</q-item-label>
					<q-item-label caption class="text-italic">
						{{ kelas.keterangan ? kelas.keterangan : '-' }}
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-separator />
		</q-list>

		<q-btn
			style="opacity: 0.8"
			icon="add"
			round=""
			dense=""
			color="green-10"
			glossy=""
			class="absolute-bottom-right q-ma-sm text-green-11"
		/>
	</div>
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
const spinner = ref(false);
const kelas = ref([]);
onMounted(async () => {
	const data = await getData({
		endPoint: `kelas/${id}/riwayat`,
		spinner,
	});
	kelas.value = data.kelas;
});
</script>
<style lang=""></style>
