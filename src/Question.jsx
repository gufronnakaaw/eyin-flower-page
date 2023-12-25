import { Link } from 'react-router-dom';

export default function Question() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1 className="text-pink-500">Wanna see the cutest person?</h1>

      <div className="flex gap-2">
        <Link
          to="/page/2"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-10"
        >
          No
        </Link>
        <Link
          to="/page/4"
          className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-10"
        >
          Yes
        </Link>
      </div>
    </div>
  );
}
