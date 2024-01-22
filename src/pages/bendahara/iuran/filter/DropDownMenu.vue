<template lang="">
	<q-btn-dropdown
		color="green-10"
		label="Filter By"
		no-caps
		class="text-green-11 q-px-md"
		dense
	>
		<q-list>
			<q-item
				v-if="showButton(`bendahara/iuran/th-ajaran`)"
				clickable
				v-close-popup
				to="/bendahara/iuran/th-ajaran"
			>
				<q-item-section>
					<q-item-label>Tahun Ajaran</q-item-label>
				</q-item-section>
			</q-item>
			<q-item
				v-if="showButton(`bendahara/iuran/tanggal`)"
				clickable
				v-close-popup
				to="/bendahara/iuran/tanggal"
			>
				<q-item-section>
					<q-item-label>Tanggal</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup>
				<q-item-section>
					<q-item-label>ID Santri</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-btn-dropdown>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
function showButton(param) {
	return route.fullPath.search(param) > 0 ? false : true;
}
</script>
<style lang=""></style>
