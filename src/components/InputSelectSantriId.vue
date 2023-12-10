<template lang="">
	<q-select
		class="q-mt-sm"
		dense
		:hint="
			$props.activeOnly
				? 'Hanya menampilkan santri aktif'
				: 'Ketikkan ID Santri'
		"
		outlined
		label="ID Santri*"
		v-model="input.santri_id"
		:options="options"
		emit-value
		map-options
		option-value="id"
		option-label="id"
		error-color="negative"
		:loading="loading"
		use-input
		clearable=""
		@filter="filterFunction"
		@update:model-value="onInput"
	>
		<template v-slot:option="scope">
			<q-item v-bind="scope.itemProps">
				<q-item-section>
					<q-item-label
						>{{ scope.opt.id }} &mdash; {{ scope.opt.nama }}
					</q-item-label>
					<q-item-label caption>{{
						scope.opt.data_akhir
					}}</q-item-label>
				</q-item-section>
			</q-item>
		</template>
	</q-select>

	<q-input
		class="q-mt-sm"
		dense
		outlined
		label="Nama"
		v-model="input.nama"
		disable=""
		filled=""
	/>
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';

const props = defineProps({
	activeOnly: { type: Boolean },
	data: { type: Object },
});
const emit = defineEmits(['emitInput']);

const input = ref({});
const loading = ref(false);
const options = ref([]);

function onInput(val) {
	input.value.nama = options.value.find(
		(o) => o.id == input.value?.santri_id
	)?.nama;
	emit('emitInput', input.value);
}

onMounted(async () => {
	Object.assign(input.value, props.data);
});

async function filterFunction(val, update) {
	if (!val) {
		update(() => {
			options.value = [];
		});
		return;
	}
	const data = await getData({
		endPoint: 'santri/ids',
		loading: loading,
		params: {
			active_only: props.activeOnly ? true : false,
			q: val,
		},
	});
	// console.log(data);
	update(
		() => (options.value = data.lists),
		(menuRef) => {
			if (val !== '' && menuRef.options.length) {
				menuRef.setOptionIndex(-1);
				menuRef.moveOptionSelection(1, true);
			}
		}
	);
}
</script>
<style lang=""></style>
