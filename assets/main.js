function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Kapal Karam',
                'Monyet Bambu',
                'Keyboard Berdebu',
                'Sapu Lidi',
                'Asbak Rokok',
                'Sempak bolong',
                'Mouse Rusak',
                'Sapu Lidi',
                'Harimau Ngedrag',
                'Kelinci Parkour',
                'Kucing Kayang',
                'Laptop Gaming',
                'Bambu Runcing',
                'Alat Pancing',
                'Sikat Gigi',
                'Monyet Liar',
                'Nasi Padang',
                'Motor Vario',
                'Rokok Surya',
                'Cargher hp',
                'Kunci Motor',
                'Rescuer',
                'Kulkas',
                'Gantungan Kunci',
                'Sendal Jepit'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});