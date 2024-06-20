const data = [
	{
		url: 'domisili',
		label: 'Domisili',
		style: 'single',
		column: 1,
	},
	{
		url: 'hubungan-wali',
		label: 'Hubungan Wali',
		style: 'single',
		column: 1,
	},
	{
		url: 'jabatan-madrasiyah',
		label: 'Jabatan Madrasiyah',
		style: 'single',
		column: 1,
	},
	{
		url: 'kelas',
		label: 'Kelas',
		style: 'single',
		column: 1,
	},
	{
		url: 'keterangan-iuran',
		label: 'Keterangan Iuran',
		style: 'single',
		column: 1,
	},
	{
		url: 'keterangan-izin',
		label: 'Keterangan Izin',
		style: 'single',
		column: 1,
	},
	{
		url: 'keterangan-status',
		label: 'Keterangan Status',
		style: 'single',
		column: 1,
	},
	{
		url: 'metode-pembayaran',
		label: 'Metode Pembayaran',
		style: 'single',
		column: 1,
	},
	{
		url: 'pekerjaan',
		label: 'Pekerjaan',
		style: 'single',
		column: 1,
	},
	{
		url: 'jenis-lembaga-pendidikan',
		label: 'Jenis Lembaga Pendidikan',
		style: 'single',
		column: 1,
	},
	{
		url: 'wilayah-ugt',
		label: 'Wilayah UGT',
		style: 'single',
		column: 1,
	},
	{
		url: 'pendidikan-akhir-diniyah',
		label: 'Pendidikan Akhir Diniyah',
		style: 'single',
		column: 1,
	},
	{
		url: 'pendidikan-akhir-formal',
		label: 'Pendidikan Akhir Formal',
		style: 'single',
		column: 1,
	},
	{
		url: 'takzir-santri',
		label: 'Takzir Santri',
		style: 'single',
		column: 1,
	},
	{
		url: 'status',
		label: 'Status',
		style: 'single',
		column: 1,
	},
	{
		url: 'sifat-izin',
		label: 'Sifat Izin',
		style: 'single',
		column: 1,
	},
	{
		url: 'keperluan-izin',
		label: 'Keperluan Izin',
		style: 'single',
		column: 1,
	},
	{
		url: 'tatib-santri',
		label: 'Tatib Santri',
		style: 'double',
		column: 2,
	},
	{
		url: 'tahun-ajaran',
		label: 'Tahun Ajaran',
		style: 'double',
		column: 2,
	},
	{
		url: 'iuran',
		label: 'Iuran',
		style: 'double',
		column: 2,
	},
	{ url: 'tingkat-pendidikan', label: 'Tingkat Pendidikan', style: 'double' },
];

const listData = Object.values(data).sort((a, b) => {
	return a.label > b.label ? 1 : -1;
});

export default listData;
