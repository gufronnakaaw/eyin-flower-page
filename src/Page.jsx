import { useParams } from 'react-router-dom';
import Cutest from './Cutest';
import Flower from './Flower';
import Last from './Last';
import Question from './Question';
import Woa from './WOA';

export default function Page() {
  const { page } = useParams();

  if (page == 2) {
    return <Flower />;
  }

  if (page == 3) {
    return <Question />;
  }

  if (page == 4) {
    return <Cutest />;
  }

  if (page == 5) {
    return <Woa />;
  }

  if (page == 6) {
    return <Last />;
  }

  return (window.location.href = '/');
}
