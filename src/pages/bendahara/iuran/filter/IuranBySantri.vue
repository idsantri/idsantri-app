<template lang="">
	<div class="q-ma-sm">
		<FilterSantri
			start-url="/bendahara/iuran/q/santri"
			@data-filter="(val) => (dataFilter = val)"
			:active-only="false"
		>
			<DropDownMenu />
		</FilterSantri>

		<IuranTable
			:data="iuran"
			:loading="loading"
			:heading="dataFilter.display"
		/>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import { useRoute } from 'vue-router';
import { isDate } from 'src/utils/format-date';
import FilterSantri from 'src/components/HeadFilterSantri.vue';
import DropDownMenu from './DropDownMenu.vue';
import IuranTable from './IuranTable.vue';

const iuran = ref([{}]);
const loading = ref(false);
const dataFilter = ref({});
const route = useRoute();
const params = {
	id: route.params.id,
};

onMounted(async () => {
	if (params.id) {
		const data = await apiGet({
			endPoint: 'iuran',
			loading,
			params: { santri_id: params.id },
		});
		iuran.value = data.iuran;
	}
});
</script>
<style lang=""></style>
