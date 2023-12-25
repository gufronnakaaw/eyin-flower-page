import { Link } from 'react-router-dom';
export default function Woa() {
  return (
    <div className="h-screen flex items-center flex-col justify-center text-center">
      <p className="text-pink-500">
        Semoga suka ya sama karya yang kecil ini. Karya ini abadi di internet.
      </p>
      <br />
      <p className="text-pink-500">
        Gue cuma mau bilang teruslah hidup untuk hal kecil, we still have long
        way to go. Masih banyak pencapaian yang harus dicapai dan jangan
        menyerah gitu aja.
      </p>
      <br />
      <p className="text-pink-500">
        Cape, ngeluh, dan badmood itu wajar yang penting kita bisa kembali
        menjalani kehidupan seperti biasa. Berat memang tapi tugas kita cuma
        menjalani aja kok, selebihnya tuhan yang atur.
      </p>
      <br />
      <p className="text-pink-500">
        Dunia itu luas, realita itu pahit, tapi hal itu lah yang bikin kita
        bertumbuh dan berkembang.
      </p>
      <br />
      <p className="text-pink-500">
        Semangat kerjanya, semangat kejar cita-citanya, one day lo bakal metik
        kebahagiannya.
      </p>
      <br />

      <div className="h-[150px] w-[150px]">
        <img src="/gif.webp" alt="gif you" />
      </div>

      <div className="flex gap-2">
        <Link
          to="/page/4"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-5"
        >
          Back
        </Link>
        <Link
          to="/page/6"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-5"
        >
          Last
        </Link>
      </div>
    </div>
  );
}
