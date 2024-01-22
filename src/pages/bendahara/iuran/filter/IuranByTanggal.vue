<template lang="">
	<div class="q-ma-sm">
		<filter-tanggal
			start-url="/bendahara/iuran/tanggal"
			@data-filter="(val) => (dataFilter = val)"
		>
			<DropDownMenu />
		</filter-tanggal>

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
import FilterTanggal from 'src/components/FilterTanggal';
import { useRoute } from 'vue-router';
import { isDate } from 'src/utils/format-date';
import DropDownMenu from './DropDownMenu.vue';
import IuranTable from './IuranTable.vue';

const iuran = ref([{}]);
const loading = ref(false);
const dataFilter = ref({});
const route = useRoute();
const params = {
	startDate: route.params.startDate || 0,
	endDate: route.params.endDate || 0,
};
const startDate = ref(params.startDate);
const endDate = ref(params.endDate);

onMounted(async () => {
	if (isDate(startDate.value) && isDate(endDate.value)) {
		const data = await apiGet({
			endPoint: 'iuran',
			loading,
			params: { start_date: startDate.value, end_date: endDate.value },
		});
		iuran.value = data.iuran;
	}
});
</script>
<style lang=""></style>
