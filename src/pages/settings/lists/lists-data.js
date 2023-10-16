const data = [
	{ url: 'domisili', label: 'Domisili', mode: 'common' },
	{ url: 'hubungan-wali', label: 'Hubungan Wali', mode: 'common' },
	// { url: 'izin-keperluan', label: '', mode: 'common' },
	{ url: 'jabatan', label: 'Jabatan', mode: 'common' },
	{ url: 'kelas', label: 'Kelas', mode: 'common' },
	{
		url: 'keterangan-domisili',
		label: 'Keterangan Domisili',
		mode: 'common',
	},
	{ url: 'keterangan-iuran', label: 'Keterangan Iuran', mode: 'common' },
	{ url: 'keterangan-izin', label: 'Keterangan Izin', mode: 'common' },
	{ url: 'keterangan-kelas', label: 'Keterangan Kelas', mode: 'common' },
	{ url: 'keterangan-status', label: 'Keterangan Status', mode: 'common' },
	{ url: 'metode-pembayaran', label: 'Metode Pembayaran', mode: 'common' },
	// { url: 'nilai-ahwal-item', label: '', mode: 'common' },
	// { url: 'nilai-ahwal-text', label: '', mode: 'common' },
	{ url: 'pekerjaan', label: 'Pekerjaan', mode: 'common' },
	{
		url: 'pendidikan-akhir-diniyah',
		label: 'Pendidikan Akhir Diniyah',
		mode: 'common',
	},
	{
		url: 'pendidikan-akhir-formal',
		label: 'Pendidikan Akhir Formal',
		mode: 'common',
	},
	{ url: 'pulangan', label: 'Pulangan', mode: 'common' },
	{ url: 'satuan', label: 'Satuan', mode: 'common' },
	{ url: 'siklus', label: 'Siklus', mode: 'common' },
	{ url: 'status', label: 'Status', mode: 'common' },
	// { url: 'takzir-santri', label: 'Takzir Santri', mode: 'common' },
	// { url: 'tatib-murid', label: '', mode: 'common' },
	// { url: 'tatib-santri', label: '', mode: 'common' },

	// { url: 'tingkat', label: 'Tingkat', mode: 'common' },
	{ url: 'iuran', label: 'Iuran', mode: 'iuran' },
	{ url: 'tahun-ajaran', label: 'Tahun Ajaran', mode: 'tahun' },
];

const listData = Object.values(data).sort((a, b) => {
	return a.label > b.label ? 1 : -1;
});

export default listData;
