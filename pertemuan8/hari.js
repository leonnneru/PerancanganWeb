const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Masukkan tanggal: ", (input) => {
    let tanggal = parseInt(input);

    if (isNaN(tanggal) || tanggal <= 0) {
        console.log("Error: Masukkan tanggal mulai dari 1-30");
    } else if (tanggal > 30) {
        console.log("Error: Tanggal tidak boleh lebih dari 30");
    } else {
        function tentukanHari(tanggal) {
            let hari = (tanggal - 1) % 7;
            if (hari === 0) {
                return "Senin";
            } else if (hari === 1) {
                return "Selasa";
            } else if (hari === 2) {
                return "Rabu";
            } else if (hari === 3) {
                return "Kamis";
            } else if (hari === 4) {
                return "Jumat";
            } else if (hari === 5) {
                return "Sabtu";
            } else {
                return "Minggu";
            }
        }

        console.log(`Tanggal ${tanggal} itu hari ${tentukanHari(tanggal)}`);
    }

    readline.close();
});