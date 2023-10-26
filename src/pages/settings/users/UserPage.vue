<template>
	<div class="q-ma-sm">
		<q-table
			:rows="users"
			:columns="columns"
			row-key="name"
			:loading="loading"
			:filter="filter"
			@row-click="(evt, row, index) => rowClick(evt, row, index)"
		>
			<template v-slot:top-left>
				<div class="text-h6 text-green-10">Data Pengguna</div>
			</template>
			<template v-slot:top-right>
				<q-input
					borderless
					dense
					debounce="300"
					v-model="filter"
					placeholder="Cari"
				>
					<template v-slot:append>
						<q-icon name="search" />
					</template>
				</q-input>
			</template>
		</q-table>

		<q-dialog v-model="showUserModal">
			<q-card style="width: 700px; max-width: 90vw">
				<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
					<div class="text-subtitle1">Data User</div>
				</q-card-section>
				<div v-if="spinner">
					<q-spinner-cube
						color="green-12"
						size="8em"
						class="flex q-mx-auto q-my-xl"
					/>
				</div>
				<div v-else>
					<q-card-section class="q-gutter-sm">
						<q-input
							standout
							v-model="user.name"
							label="Nama"
							readonly=""
						/>
						<q-input
							standout
							v-model="user.username"
							label="Username"
							readonly=""
						/>
						<q-input
							standout
							v-model="user.email"
							label="Email"
							readonly=""
						/>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<q-toggle
									:model-value="
										user.email_verified_at ? true : false
									"
									label="Verifikasi"
									disable=""
								/>
								<div class="q-pl-md text-caption">
									Verifikasi akun hanya bisa dilakukan oleh
									user yang bersangkutan.
								</div>
							</div>
							<div class="col-md-6 col-sm-12">
								<q-toggle
									v-model="user.isConfirmed"
									label="Konfirmasi"
									@click="confirmUser(user.isConfirmed)"
								/>
								<div class="q-pl-md text-caption">
									Konfimasi bahwa Anda mengenal user ini.
								</div>
							</div>
						</div>
					</q-card-section>

					<!-- roles -->
					<q-card-section>
						<div class="row">
							<div
								class="col-md-6 col-sm-12"
								v-for="(value, role) in user.roles"
								:key="role"
							>
								<q-toggle
									:label="role"
									:model-value="value"
									@click="setRole(user.id, role, !value)"
								/>
							</div>
						</div>
					</q-card-section>
					<!-- <pre>{{ user }}</pre> -->

					<q-card-actions class="bg-green-7 q-pa-sm">
						<q-btn
							label="Hapus"
							color="negative"
							no-caps=""
							@click="deleteUser"
						/>
					</q-card-actions>
				</div>
			</q-card>
		</q-dialog>
	</div>
	<!-- <pre>{{ users }}</pre> -->
</template>
<script setup>
import deleteData from 'src/api/api-delete';
import getData from 'src/api/api-get';
import postData from 'src/api/api-post';
import updateData from 'src/api/api-update';
import { computed, onMounted, ref } from 'vue';

const showUserModal = ref(false);
const filter = ref('');
const spinner = ref(false);
const loading = ref(false);
const users = ref([]);
const user = ref({});
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
	{
		label: 'Group',
		align: 'left',
		field: (row) => row.roles.join('; '),
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		label: 'Konfirmasi',
		align: 'left',
		field: 'confirmed_at',
		format: (val) => `${val ? 'Ya' : 'Tidak'}`,
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		label: 'Verikasi',
		align: 'left',
		field: 'email_verified_at',
		format: (val) => `${val ? 'Ya' : 'Tidak'}`,
		// sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
];

async function getUsers() {
	const data = await getData({
		endPoint: `users`,
		spinner: loading,
	});
	users.value = data.users;
}

async function getUser(id) {
	const response = await getData({ endPoint: `users/${id}`, spinner });
	user.value = response.user;
	user.value.isConfirmed = response.user.confirmed_at ? true : false;
}

onMounted(async () => {
	await getUsers();
});

async function rowClick(evt, row, index) {
	showUserModal.value = true;
	const id = row.id;
	await getUser(id);
}

async function confirmUser(val) {
	const data = { confirm: val };
	const id = user.value.id;

	const result = await updateData({
		endPoint: `users/${id}/confirm`,
		data,
	});

	if (!result) return (user.value.isConfirmed = !user.value.isConfirmed);

	await getUser(id);
	await getUsers();
}

async function deleteUser() {
	const id = user.value.id;
	await deleteData({ endPoint: `users/${id}`, rerender: true });
}

async function setRole(id, role, value) {
	const data = { role, value };
	const update = await updateData({ endPoint: `users/${id}/roles`, data });
	if (!update) return;
	await getUser(id);
	await getUsers();
}
</script>
<style></style>
