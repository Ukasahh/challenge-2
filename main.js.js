const readline = require('readline');

class NilaiSiswa {
  constructor() {
    this.nilai = [];
  }

  async inputNilai() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.info('Masukkan nilai siswa (ketik "selesai" jika sudah selesai)');
    let i = 1;
    while (true) {
      const input = await new Promise((resolve) => rl.question(`Nilai siswa ke-${i}: `, resolve));
      if (input === 'selesai') break;
      this.nilai.push(parseFloat(input));
      i++;
    }

    rl.close();
  }

  nilaiTertinggi() {
    return Math.max(...this.nilai);
  }

  nilaiTerendah() {
    return Math.min(...this.nilai);
  }

  rataRata() {
    const total = this.nilai.reduce((acc, cur) => acc + cur, 0);
    return total / this.nilai.length;
  }

  siswaLulus() {
    return this.nilai.filter((nilai) => nilai >= 60).length;
  }

  siswaTidakLulus() {
    return this.nilai.filter((nilai) => nilai < 60).length;
  }

  urutkanNilai() {
    return this.nilai.sort((a, b) => a - b);
  }

  cariSiswa(nilai) {
    return this.nilai.filter((nilaiSiswa) => nilaiSiswa === nilai);
  }

  cariSiswaDenganNilai90Dan100() {
    return this.nilai.filter((nilaiSiswa) => nilaiSiswa === 90 || nilaiSiswa === 100);
  }
}

const nilaiSiswa = new NilaiSiswa();
nilaiSiswa.inputNilai().then(() => {
  console.info(`Nilai tertinggi: ${nilaiSiswa.nilaiTertinggi()}`);
  console.info(`Nilai terendah: ${nilaiSiswa.nilaiTerendah()}`);
  console.info(`Rata-rata nilai: ${nilaiSiswa.rataRata()}`);
  console.info(`Jumlah siswa lulus: ${nilaiSiswa.siswaLulus()}`);
  console.info(`Jumlah siswa tidak lulus: ${nilaiSiswa.siswaTidakLulus()}`);
  console.info(`Nilai siswa yang telah diurutkan: ${nilaiSiswa.urutkanNilai()}`);
  console.info(`Siswa dengan nilai 90: ${nilaiSiswa.cariSiswa(90)}`);
  console.info(`Siswa dengan nilai 100: ${nilaiSiswa.cariSiswa(100)}`);
  console.info(`Siswa dengan nilai 90 atau 100: ${nilaiSiswa.cariSiswaDenganNilai90Dan100()}`);
});
