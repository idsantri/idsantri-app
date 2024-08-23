<template lang="">
	<q-page class="q-pa-sm">
		<q-card style="max-width: 600px">
			<q-card-section
				class="q-pa-sm bg-green-8 text-green-11 flex items-center"
			>
				Pengaturan Tanda Tangan
				<q-space />
				<q-btn
					icon="reply"
					dense
					class="q-px-md"
					outline
					@click="$router.go(-1)"
				/>
			</q-card-section>

			<q-tabs v-model="tab" align="justify" narrow-indicator no-caps>
				<q-tab name="pengasuh" label="Pengasuh" />
				<q-tab name="ketua" label="Ketua" />
				<q-tab name="sekretaris" label="Sekretaris" />
			</q-tabs>

			<q-separator />

			<q-tab-panels v-model="tab" animated>
				<TandaTanganPanel name="pengasuh" />
				<TandaTanganPanel name="ketua" />
				<TandaTanganPanel name="sekretaris" />
			</q-tab-panels>
		</q-card>
	</q-page>
</template>
<script setup>
import { ref } from 'vue';
import TandaTanganPanel from './TandaTanganPanel';
const tab = ref('pengasuh');
</script>
<style lang=""></style>
