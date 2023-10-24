<template>
	<div class="q-ma-sm">
		<q-table
			title="Pengguna"
			:rows="users"
			:columns="columns"
			row-key="name"
			:loading="spinner"
		>
			<template v-slot:header="props">
				<q-tr :props="props">
					<q-th auto-width>!</q-th>
					<q-th
						v-for="col in props.cols"
						:key="col.name"
						class="text-left"
					>
						<span class="text-bold">
							{{ col.label }}
						</span>
					</q-th>
				</q-tr>
			</template>
			<template v-slot:body="props">
				<q-tr :props="props">
					<q-td auto-width>
						<q-btn
							size="sm"
							color="green-10"
							round
							dense
							@click="props.expand = !props.expand"
							:icon="props.expand ? 'remove' : 'add'"
						/>
					</q-td>
					<!-- <pre>{{ props.cols }}</pre> -->
					<q-td v-for="col in props.cols" :key="col.name">
						{{ col.value }}
					</q-td>
				</q-tr>
				<q-tr v-show="props.expand" :props="props">
					<q-td colspan="100%">
						<q-card>
							<q-card-section>
								<q-toggle
									:model-value="
										props.row.confirmed_at ? true : false
									"
									color="green"
									label="Konfirmasi"
								/>
							</q-card-section>
						</q-card>
						<!-- <div class="text-left">
							<q-markup-table class="text-italic">
								<tr>
									<td>Nama</td>
									<td>{{ props.row.name }}</td>
									<td>Terkonfirmasi</td>
									<td>
										{{
											props.row.confirmed_at
												? 'Ya'
												: 'Tidak'
										}}
									</td>
								</tr>
								<tr>
									<td>Username</td>
									<td>{{ props.row.username }}</td>
									<td>Verifikasi</td>
									<td>
										{{
											props.row.email_verified_at
												? 'Ya'
												: 'Tidak'
										}}
									</td>
								</tr>
								<tr>
									<td>Email</td>
									<td>{{ props.row.email }}</td>
									<td></td>
									<td></td>
								</tr>
							</q-markup-table>
						</div> -->

						<!-- <pre>{{ props.row }}</pre> -->
					</q-td>
				</q-tr>
			</template>
		</q-table>
	</div>
	<!-- <pre>{{ users }}</pre> -->
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
const spinner = ref(false);
const users = ref([]);
const columns = [
	{
		label: 'Nama',
		align: 'left',
		field: 'name',
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		label: 'Username',
		align: 'left',
		field: 'username',
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		label: 'Email',
		align: 'left',
		field: 'email',
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	// {
	// 	label: 'Konfirmasi',
	// 	align: 'left',
	// 	field: 'confirmed_at',
	// 	format: (val) => `${val ? 'Ya' : 'Tidak'}`,
	// 	// sortable: true,
	// 	// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	// },
	// {
	// 	label: 'Verikasi',
	// 	align: 'left',
	// 	field: 'email_verified_at',
	// 	format: (val) => `${val ? 'Ya' : 'Tidak'}`,
	// 	// sortable: true,
	// 	// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	// },
	{
		label: 'Group',
		align: 'left',
		field: (row) => row.roles.join('; '),
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
];

async function fetchData() {
	const data = await getData({
		endPoint: `users`,
		spinner,
	});
	users.value = data.users;
}

onMounted(async () => {
	await fetchData();
});

// function rowClick(evt, row, index) {
// 	console.log(evt, row, index);
// }
</script>
<style></style>
