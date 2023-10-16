<template lang="">
	<div v-if="!props.data.length">
		<p class="q-my-lg text-negative text-weight-light text-h6 text-center">
			Tidak ada data untuk ditampilkan!
		</p>
	</div>
	<div v-else class="q-gutter-sm">
		<div v-for="list in props.data" :key="list.id">
			<q-input dense outlined v-model="list.val0">
				<template v-slot:after>
					<q-btn-group push>
						<q-btn
							color="positive"
							glossy
							icon="save"
							@click="$emit('updateList', list)"
						/>
						<q-btn
							color="negative"
							glossy
							icon="delete"
							@click="$emit('deleteList', list)"
						/>
					</q-btn-group>
				</template>
			</q-input>
		</div>
		<q-input
			dense
			class="q-mt-sm"
			outlined
			:label="`Masukkan data baru`"
			v-model="newList.val0"
		>
			<template v-slot:after>
				<q-btn-group push>
					<q-btn
						color="positive"
						glossy
						icon="save"
						@click="$emit('addList', newList)"
					/>
					<q-btn color="grey" glossy icon="delete" disable />
				</q-btn-group>
			</template>
		</q-input>
	</div>
	<!-- <pre>{{ props.data }}</pre> -->
</template>
<script setup>
import { ref } from 'vue';

const newList = ref({});
const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
});
</script>
<style lang=""></style>
