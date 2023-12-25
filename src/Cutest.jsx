import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cutest() {
  const [image, setImage] = useState('eyin-2.jpg');
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter >= 1) {
        setCounter(counter - 1);
      }
    }, 1000);

    if (counter == 0) {
      setImage('eyin-1.jpg');
    }

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="h-[300px] w-[300px]">
        <img src={`/${image}`} alt={image} className="rounded-xl" />
      </div>

      {counter != 0 ? (
        <>
          <p className="text-pink-500 mt-5">INI DIA ORANGNYA AHAHAHA</p>
          <p className="text-pink-500 text-center">
            Tapi tenang foto ini akan berganti dalam {counter} detik
          </p>
        </>
      ) : (
        <>
          <p className="text-pink-500 mt-5">Misi misi orang lucu mau lewat</p>
          <div className="flex gap-2">
            <Link
              to="/page/3"
              className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-5"
            >
              Back
            </Link>
            <Link
              to="/page/5"
              className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-5"
            >
              Next
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
