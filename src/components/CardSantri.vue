<template lang="">
	<q-card>
		<q-card-section class="q-pa-sm">
			<q-toolbar class="bg-green-1">
				<q-toolbar-title class="text-subtitle1">
					Identitas Santri
				</q-toolbar-title>
			</q-toolbar>
			<div v-if="loading" class="q-pa-md">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-mx-auto"
				/>
			</div>
			<q-list v-else dense>
				<q-item>
					<q-item-section avatar>
						<q-avatar class="d-flex">
							<q-img
								:src="santri?.image || '/user-default.png'"
								:ratio="1"
								cover
							/>
						</q-avatar>
					</q-item-section>

					<q-item-section>
						<q-item-label overline> Santri </q-item-label>
						<q-item-label>
							{{ santri?.nama }} ({{ santri?.sex }})
						</q-item-label>
						<q-item-label caption lines="1">
							{{ santri?.alamat_pendek }}
						</q-item-label>
						<q-item-label caption lines="1" class="text-italic">
							{{ santri?.data_akhir?.data_akhir }}
						</q-item-label>
					</q-item-section>
					<q-item-section avatar>
						<q-btn
							outline
							color="green"
							:to="`/santri/${santri?.id}`"
						>
							<small>
								{{ santri?.id }}
							</small>
						</q-btn>
					</q-item-section>
				</q-item>
				<q-separator inset="item" />

				<q-item>
					<q-item-section top avatar>
						<q-avatar> </q-avatar>
					</q-item-section>

					<q-item-section>
						<q-item-label overline> Wali </q-item-label>
						<q-item-label>
							{{ santri?.wali?.nama }} ({{ santri?.wali?.sex }};
							{{ santri?.wali_status }})
						</q-item-label>
					</q-item-section>
					<q-item-section avatar>
						<q-btn
							outline
							color="green"
							:to="`/wali/${santri?.wali_id}`"
						>
							<small>
								{{ santri?.wali_id }}
							</small>
						</q-btn>
					</q-item-section>
				</q-item>
				<q-separator inset="item" />
				<q-item>
					<q-item-section top avatar>
						<q-avatar> </q-avatar>
					</q-item-section>

					<q-item-section>
						<q-item-label overline> Orang Tua </q-item-label>
						<q-item-label>
							{{ santri?.ortu?.ayah }} |
							{{ santri?.ortu?.ibu }}
						</q-item-label>
					</q-item-section>
					<q-item-section avatar>
						<q-btn
							outline
							color="green"
							:to="`/ortu/${santri?.ortu_id}`"
						>
							<small>
								{{ santri?.ortu_id }}
							</small>
						</q-btn>
					</q-item-section>
				</q-item>
			</q-list>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import apiGet from 'src/api/api-get';

const props = defineProps({
	id: {
		required: true,
	},
});
const emit = defineEmits(['successGet']);

const loading = ref(false);
const santri = ref({});

async function fetchData() {
	const data = await apiGet({
		endPoint: `santri/${props.id}`,
		loading,
	});
	santri.value = data.santri;
	// console.log(santri.value);
	const img = await apiGet({
		endPoint: `images/santri/${santri.value.id}`,
	});
	santri.value.image = img.image_url;
	emit('successGet', santri.value);
}

onMounted(async () => {
	if (props.id) {
		await fetchData();
	}
});

onUpdated(async () => {
	if (props.id) {
		await fetchData();
	}
});
</script>
<style lang=""></style>
