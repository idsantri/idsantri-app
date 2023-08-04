<template>halo... sekreatriat</template>
<script setup>
import { toArray } from 'src/utils/array-object';
import { notifyError } from '../../utils/notify';
import { apiTokened } from 'src/api';
import { reactive } from 'vue';
const santri = reactive({});
(async () => {
	try {
		const response = await apiTokened.get(`santri`);
		Object.assign(santri, response.data.santri);
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
})();
</script>
../../api/api
