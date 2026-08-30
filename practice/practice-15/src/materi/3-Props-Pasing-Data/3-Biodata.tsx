import type { BiodataProps } from './types/biodata.type';

function Biodata({ name, kelas, alamat = 'Belum ada alamat' }: BiodataProps) {
  return (
    <div>
      <h2>Nama : {name}</h2>
      <h2>Kelas : {kelas}</h2>
      <h2>Alamat : {alamat}</h2>
    </div>
  );
}

export default Biodata;
