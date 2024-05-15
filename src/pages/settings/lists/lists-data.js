const data = [
	{ url: 'domisili', label: 'Domisili', mode: 'one' },
	{ url: 'hubungan-wali', label: 'Hubungan Wali', mode: 'one' },
	{ url: 'jabatan', label: 'Jabatan', mode: 'one' },
	{ url: 'jabatan-madrasah', label: 'Jabatan Madrasiyah', mode: 'one' },
	{ url: 'kelas', label: 'Kelas', mode: 'one' },
	{
		url: 'keterangan-domisili',
		label: 'Keterangan Domisili',
		mode: 'one',
	},
	{ url: 'keterangan-iuran', label: 'Keterangan Iuran', mode: 'one' },
	{ url: 'keterangan-izin', label: 'Keterangan Izin', mode: 'one' },
	{ url: 'keterangan-kelas', label: 'Keterangan Kelas', mode: 'one' },
	{ url: 'keterangan-status', label: 'Keterangan Status', mode: 'one' },
	{ url: 'metode-pembayaran', label: 'Metode Pembayaran', mode: 'one' },
	// { url: 'nilai-ahwal-item', label: '', mode: 'one' },
	// { url: 'nilai-ahwal-text', label: '', mode: 'one' },
	{ url: 'pekerjaan', label: 'Pekerjaan', mode: 'one' },
	{
		url: 'pendidikan-akhir-diniyah',
		label: 'Pendidikan Akhir Diniyah',
		mode: 'one',
	},
	{
		url: 'pendidikan-akhir-formal',
		label: 'Pendidikan Akhir Formal',
		mode: 'one',
	},
	{ url: 'pulangan', label: 'Pulangan', mode: 'one' },
	{ url: 'satuan', label: 'Satuan', mode: 'one' },
	{ url: 'siklus', label: 'Siklus', mode: 'one' },
	{ url: 'status', label: 'Status', mode: 'one' },
	{ url: 'sifat-izin', label: 'Sifat Izin', mode: 'one' },
	{ url: 'keperluan-izin', label: 'Keperluan Izin', mode: 'one' },
	// { url: 'status-fan', label: 'Status Fan', mode: 'two' },

	// { url: 'tingkat-pendidikan', label: 'Tingkat Pendidikan', mode: 'two' },
	{ url: 'tahun-ajaran', label: 'Tahun Ajaran', mode: 'two' },

	{ url: 'iuran', label: 'Iuran', mode: 'iuran' },
];

const listData = Object.values(data).sort((a, b) => {
	return a.label > b.label ? 1 : -1;
});

export default listData;
