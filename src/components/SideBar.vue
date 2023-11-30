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
			<!-- APP -->
			<q-item clickable v-ripple to="/sekretariat">
				<q-item-section avatar>
					<q-icon color="green-1" name="home_work" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Beranda</q-item-label>
					<q-item-label caption>Beranda sekretariat</q-item-label>
				</q-item-section>
			</q-item>
		</q-expansion-item>

		<!-- MADRASARAH -->
		<q-separator dark />
		<q-expansion-item
			expand-separator
			label="Madrasah"
			caption="Kemuridan"
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

			<q-item clickable v-ripple to="/madrasah/absensi/input">
				<q-item-section avatar>
					<q-icon color="green-1" name="checklist" />
				</q-item-section>
				<q-item-section>
					<q-item-label>Absensi</q-item-label>
					<q-item-label caption>Absensi Sekolah</q-item-label>
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

<script setup></script>
