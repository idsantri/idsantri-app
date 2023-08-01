<template>
	<q-list separator>
		<div v-if="data.length">
			<q-item
				v-for="item in data"
				:key="item.id"
				class="q-pa-none"
				v-ripple
			>
				<q-item-section side="" class="q-pr-sm">
					<q-btn
						class="q-ma-xs"
						size="sm"
						glossy=""
						icon="edit"
						round=""
						@click="$emit('edit', item)"
					/>
				</q-item-section>
				<q-item-section>
					<q-item-label lines="1">
						<div v-for="(val, key) in item" :key="key">
							<div class="row" v-if="key.toLowerCase() != 'id'">
								<div class="col-4 text-caption">
									{{ key }}
								</div>
								<div class="col">{{ val }}</div>
							</div>
						</div>
					</q-item-label>
				</q-item-section>
			</q-item>
		</div>
		<div v-else style="height: 40px">
			<div class="text-body2 text-center" style="line-height: 40px">
				Tidak ada data untuk ditampilkan!
			</div>
		</div>
		<q-btn
			style="opacity: 0.9"
			icon="add"
			round=""
			dense=""
			color="teal-14"
			glossy=""
			class="absolute-bottom-right q-ma-xs"
			@click="$emit('add')"
		/>
	</q-list>
	<!-- <pre>{{ props.data }}</pre> -->
</template>
<script setup>
const props = defineProps(['data']);
</script>
