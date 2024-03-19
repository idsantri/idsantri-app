<template lang="">
	<q-page class="q-pa-sm">
		<q-card style="max-width: 600px">
			<q-form @submit.prevent="onSubmit">
				<q-card-section class="q-px-sm bg-green-8 text-green-11">
					Profil Lembaga
				</q-card-section>
				<q-card-section class="q-pa-sm">
					<q-card>
						<q-card-section
							class="q-pa-sm bg-green-1 text-weight-medium"
						>
							Pesantren
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<q-input
								dense
								class=""
								outlined
								label="Lembaga"
								v-model="profile.pesantren[0]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Nama"
								v-model="profile.pesantren[1]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Akronim/Singkatan"
								v-model="profile.pesantren[2]"
								:loading="loading"
							/>
						</q-card-section>
					</q-card>
					<q-card class="q-mt-sm">
						<q-card-section class="q-pa-sm bg-green-1">
							Madrasah
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<q-input
								dense
								class=""
								outlined
								label="Lembaga"
								v-model="profile.madrasah[0]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Nama"
								v-model="profile.madrasah[1]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Akronim/Singkatan"
								v-model="profile.madrasah[2]"
								:loading="loading"
							/>
						</q-card-section>
					</q-card>
					<q-card class="q-mt-sm">
						<q-card-section class="q-pa-sm bg-green-1">
							Alamat
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<q-input
								dense
								class=""
								outlined
								label="Alamat (baris-1)"
								v-model="profile.alamat[0]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Alamat (baris-2)"
								v-model="profile.alamat[1]"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Kota (Surat)"
								v-model="profile.alamat[2]"
								:loading="loading"
							/>
						</q-card-section>
					</q-card>
					<q-card class="q-mt-sm">
						<q-card-section class="q-pa-sm bg-green-1">
							Personalia
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<q-input
								dense
								class=""
								outlined
								label="Pengasuh"
								v-model="profile.personalia.pengasuh"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Ketua"
								v-model="profile.personalia.ketua"
								:loading="loading"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Sekretaris"
								v-model="profile.personalia.sekretaris"
								:loading="loading"
							/>
						</q-card-section>
					</q-card>
				</q-card-section>
				<q-card-actions align="right" class="bg-green-7">
					<q-btn
						label="Simpan"
						type="submit"
						no-caps
						icon="save"
						class="bg-green-11"
					/>
				</q-card-actions>
			</q-form>
		</q-card>
		<!-- <pre>{{ profile }}</pre> -->
	</q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import apiGet from 'src/api/api-get';
import apiPost from 'src/api/api-post';

const loading = ref(false);
// init data
const profile = ref({
	pesantren: [],
	madrasah: [],
	alamat: [],
	personalia: {},
});

async function loadData() {
	const data = await apiGet({
		endPoint: 'config/profiles',
		loading: loading,
	});
	Object.assign(profile.value, data.profiles);
	// console.log(profile.value);
}

onMounted(async () => {
	await loadData();
});
async function onSubmit() {
	const data = JSON.parse(JSON.stringify(profile.value));
	// console.log(data);
	const res = await apiPost({
		endPoint: 'config/profiles',
		data,
		loading,
	});
	if (!res) {
		await loadData();
	}
}

// const profile = ref({});
// const pesantren = ref({});
// const madrasah = ref({});
// const alamat = ref({});

// async function loadData() {
// 	const data = await apiGet({
// 		endPoint: 'config/profile',
// 		loading: loading,
// 	});
// 	profile.value = data.profile;

// 	pesantren.value = {
// 		a: profile.value.pesantren[0],
// 		b: profile.value.pesantren[1],
// 		c: profile.value.pesantren[2],
// 	};
// 	madrasah.value = {
// 		a: profile.value.madrasah[0],
// 		b: profile.value.madrasah[1],
// 		c: profile.value.madrasah[2],
// 	};
// 	alamat.value = {
// 		a: profile.value.alamat[0],
// 		b: profile.value.alamat[1],
// 		c: profile.value.alamat[2],
// 	};
// }

// watch(
// 	[pesantren, madrasah, alamat],
// 	([newPesantren, newMadrasah, newAlamat]) => {
// 		profile.value.pesantren = newPesantren;
// 		profile.value.madrasah = newMadrasah;
// 		profile.value.alamat = newAlamat;
// 	},
// );
</script>
<style lang=""></style>
