<template>
	<q-page class="q-pa-sm">
		<div class="" style="max-width: 600px">
			<q-card>
				<q-card-section class="q-pa-sm">
					<q-select
						dense
						outlined
						label="Pilih List"
						v-model="listModel"
						:options="options"
						emit-value
						map-options
						@update:model-value="(v) => routerPush(v)"
						behavior="menu"
					/>
				</q-card-section>
			</q-card>
			<q-card class="q-mt-sm" v-if="listModel">
				<router-view :key="$route.fullPath" />
			</q-card>
		</div>

		<!-- <pre>list model:{{ listModel }}</pre> -->
		<!-- <pre>list data:{{ listData }}</pre> -->
	</q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import listData from './lists-data';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const listKey = route.params.listKey;
const listModel = ref(listData.find(({ url }) => url == listKey));
const options = ref([]);

/**
 * JANGAN tampilkan tingkat pendidikan
 * filter lists
 **/
onMounted(() => {
	options.value = listData.filter(
		(item) => item.url !== 'tingkat-pendidikan',
	);
});

function routerPush(list) {
	router.push(`/settings/lists/${list.url}`);
}
</script>
