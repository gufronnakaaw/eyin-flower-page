import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <h1 className="text-pink-500">Halo Eyinnn</h1>
      <p className="text-pink-500">Thanks ya udah mau ngeklik linknya hihi</p>
      <img src="/cute-happy.gif" alt="cute happy gif" className="w-50 h-50" />

      <Link
        to="/page/2"
        className="rounded-md py-2 px-8 bg-pink-500 text-white hover:bg-pink-400 mt-10"
      >
        Next
      </Link>
    </div>
  );
}

export default App;
