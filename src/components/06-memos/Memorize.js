import { useState } from 'react';
import { useContador } from '../../hooks/useContador';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {

  const {counter, incrementar} = useContador(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize: <Small value={counter} /> </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={incrementar}
      >+1</button>

      <button 
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
