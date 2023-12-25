import { Link } from 'react-router-dom';
import './Flower.css';

export default function Flower() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <p className="text-pink-500">Lihat..</p>
      <p className="text-pink-500">Kebunku penuh dengan bunga digital</p>
      <p className="text-pink-500">Dan salah satunya bisa menjadi milikmu</p>
      <div className="flex gap-24 justify-between my-36">
        <div className="flower" />
        <div className="flower" />
        <div className="flower" />
        <div className="flower" />
        <div className="flower" />
      </div>

      <div className="flex gap-2">
        <Link
          to="/"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-10"
        >
          Back
        </Link>
        <Link
          to="/page/3"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-10"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
