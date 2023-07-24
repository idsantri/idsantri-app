function formatAlamatLengkap(
    jl = "",
    rt = "",
    rw = "",
    desa = "",
    kecamatan = "",
    kabupaten = "",
    provinsi = "",
    kode_pos = ""
) {
    return `${jl || " "} RT ${String(rt || 0).padStart(3, 0)} RW ${String(
        rw || 0
    ).padStart(3, "0")} ${desa || " "} ${kecamatan || " "} ${
        kabupaten || " "
    } ${provinsi || " "} ${kode_pos || " "}`.replace(/\s\s+/g, " ");
}

export { formatAlamatLengkap };
