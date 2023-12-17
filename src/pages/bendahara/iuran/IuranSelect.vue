<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Iuran Santri &mdash;
					<em> {{ $props.isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<InputSelectSantriId
					:active-only="true"
					@emit-input="(val) => Object.assign(input, val)"
					:data="props.data"
				/>
				<q-select
					dense
					:hint="
						input.th_ajaran_h?.length == 9
							? lists['tahun-ajaran']?.find(
									(item) => item.val0 === input.th_ajaran_h
							  )?.val1
							: ''
					"
					class="q-mt-sm"
					outlined
					label="Tahun Ajaran"
					v-model="input.th_ajaran_h"
					:options="lists['tahun-ajaran']"
					option-value="val0"
					option-label="val0"
					emit-value
					map-options
					:loading="loading['tahun-ajaran']"
				/>
			</q-card-section>

			<q-card-actions class="flex bg-green-6">
				<q-space />

				<q-btn
					dense
					type="submit"
					label="Mulai"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
			<!-- <pre>{{ input }}</pre> -->
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import { useRouter } from 'vue-router';
import { getListsKey } from 'src/api/api-get-lists';
import { notifyWarning } from 'src/utils/notify';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const router = useRouter();
const input = ref({ kategori: 3 });
const lists = ref([]);
const loading = ref([]);

async function onSubmit() {
	// console.log(input.value);
	if (input.value.santri_id && input.value.th_ajaran_h) {
		return router.push(
			`/bendahara/iuran/santri/${input.value.santri_id}/${input.value.th_ajaran_h}`
		);
	} else if (input.value.santri_id && !input.value.th_ajaran_h) {
		return router.push(`/bendahara/iuran/santri/${input.value.santri_id}`);
	}
	return notifyWarning('Silakan pilih santri dan tahun ajaran');
}

onMounted(async () => {
	await getListsKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		sort: false,
	});
});
</script>
<style lang=""></style>
