<template>
	<div class="q-ma-sm">
		<q-card>
			<q-card-section class="no-padding row" style="max-width: 800px">
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Tahun Ajaran"
					v-model="listModel"
					:options="listData"
					emit-value
					map-options
					behavior="menu"
					@update:model-value="(v) => routerPush(v)"
				/>
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Tingkat Pendidikan"
					v-model="listModel"
					:options="listData"
					emit-value
					map-options
					behavior="menu"
					@update:model-value="(v) => routerPush(v)"
				/>
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Kelas"
					v-model="listModel"
					:options="listData"
					emit-value
					map-options
					behavior="menu"
					@update:model-value="(v) => routerPush(v)"
				/>
			</q-card-section>
		</q-card>
		<q-card class="q-mt-sm" v-if="listModel">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				Data Murid {{ listModel.label }}
				<q-space />
				<q-btn flat="" icon="cached" @click="keyReload++" />
			</q-card-section>
			<q-card-section class="q-pa-sm" :key="keyReload">
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>

	<!-- <pre>list model:{{ listModel }}</pre> -->
	<!-- <pre>list data:{{ listData }}</pre> -->
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const keyReload = ref(0);
const router = useRouter();
const route = useRoute();

const listKey = route.params.listKey;
const listModel = ref({});

function routerPush(list) {
	router.push(`/settings/lists/${list.url}`);
}
</script>
