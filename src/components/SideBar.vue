<template>
	<q-list class="text-green-1">
		<!-- HOME -->
		<q-item clickable v-ripple to="/home">
			<q-item-section avatar>
				<q-icon color="green-1" name="home" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Beranda</q-item-label>
				<q-item-label caption>Halaman Awal</q-item-label>
			</q-item-section>
		</q-item>
		<q-separator dark />

		<!-- KATEGORI -->

		<!-- SEKRETARIAT -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Sekretariat"
			caption="Kesantrian"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<!-- <q-item clickable v-ripple to="/sekretariat">
				<q-item-section avatar>
					<q-icon color="green-1" name="home_work" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Beranda</q-item-label>
					<q-item-label caption>Beranda sekretariat</q-item-label>
				</q-item-section>
			</q-item> -->
			<q-item clickable v-ripple @click="addNewSantri">
				<q-item-section avatar>
					<q-icon color="green-1" name="person_add" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Santri</q-item-label>
					<q-item-label caption>Tambah Santri Baru</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- BENDAHARA -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Bendahara"
			caption="Iuran"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<q-item clickable v-ripple to="/bendahara">
				<q-item-section avatar>
					<q-icon color="green-1" name="payments" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Iuran</q-item-label>
					<q-item-label caption>Iuran Santri dan Murid</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- MADRASARAH -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Madrasah"
			caption="Kemuridan dan Keguruan"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<!-- APP -->
			<q-item clickable v-ripple to="/madrasah/murid">
				<q-item-section avatar>
					<q-icon color="green-1" name="school" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Murid</q-item-label>
					<q-item-label caption>Data Murid</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-ripple to="/madrasah/absensi-sekolah/input">
				<q-item-section avatar>
					<q-icon color="green-1" name="checklist" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Absensi</q-item-label>
					<q-item-label caption>Sekolah dan Musyawarah</q-item-label>
				</q-item-section>
			</q-item>
			<!-- <q-item clickable v-ripple to="/madrasah/tingkat">
				<q-item-section avatar>
					<q-icon color="green-1" name="history_edu" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Tingkat Pendidikan</q-item-label>
					<q-item-label caption
						>Data Murid Pertingkat Pendidikan</q-item-label
					>
				</q-item-section>
			</q-item> -->
			<q-item clickable v-ripple to="/madrasah/aparatur">
				<q-item-section avatar>
					<q-icon color="green-1" name="contact_emergency" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Aparatur Madrasah</q-item-label>
					<q-item-label caption>Data Aparatur Madrasah</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- KEAMANAN -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Keamanan"
			caption="Perizinan dan Pelanggaran"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<q-item clickable v-ripple to="/keamanan/izin-pesantren">
				<q-item-section avatar>
					<q-icon color="green-1" name="transfer_within_a_station" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Perizinan</q-item-label>
					<q-item-label caption
						>Data Perizinan Pesantren</q-item-label
					>
				</q-item-section>
			</q-item>

			<q-item clickable v-ripple to="/keamanan/indisipliner">
				<q-item-section avatar>
					<q-icon color="green-1" name="directions_run" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Pelanggaran</q-item-label>
					<q-item-label caption>Data Pelanggaran</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- UGT -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="UGT"
			caption="Urusan Guru Tugas"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<q-item clickable v-ripple to="/ugt/pjgt">
				<q-item-section avatar>
					<q-icon color="green-1" name="person_2" />
				</q-item-section>
				<q-item-section>
					<q-item-label>PJGT</q-item-label>
					<q-item-label caption
						>Penanggung Jawab Guru Tugas</q-item-label
					>
				</q-item-section>
			</q-item>
			<q-item clickable v-ripple to="/ugt/gt">
				<q-item-section avatar>
					<q-icon color="green-1" name="school" />
				</q-item-section>
				<q-item-section>
					<q-item-label>GT</q-item-label>
					<q-item-label caption>Guru Tugas</q-item-label>
				</q-item-section>
			</q-item>
			<q-item clickable v-ripple to="/ugt/kas">
				<q-item-section avatar>
					<q-icon color="green-1" name="account_balance_wallet" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Kas</q-item-label>
					<q-item-label caption>Keuangan</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- SETTING -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Pengaturan"
			caption="Aplikasi dan Pengguna"
			header-class="text-body1 text-green-1"
			expand-icon-class="text-green-1"
		>
			<!-- APP -->
			<q-item clickable v-ripple to="/settings/lists">
				<q-item-section avatar>
					<q-icon color="green-1" name="settings" />
				</q-item-section>
				<q-item-section>
					<q-item-label>List</q-item-label>
					<q-item-label caption>Pengaturan List</q-item-label>
				</q-item-section>
			</q-item>

			<!-- USER -->
			<q-item clickable v-ripple to="/settings/users">
				<q-item-section avatar>
					<q-icon color="green-1" name="manage_accounts" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Pengguna</q-item-label>
					<q-item-label caption>Pengaturan Pengguna</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>
	</q-list>
</template>

<script setup>
import dialogStore from 'src/stores/dialog-store';
import santriStore from 'src/stores/santri-store';
import { toRefs } from 'vue';

const dialog = dialogStore();
const { searchSantri, crudSantri } = toRefs(dialog);

const addNewSantri = () => {
	santriStore().$reset();
	crudSantri.value = true;
};
</script>
