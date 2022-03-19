import { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useContador } from '../../hooks/useContador';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

  const {counter, incrementar} = useContador(10);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Memorize: <small> {counter} </small> </h3>
      <hr />

      <p> {memoProcesoPesado} </p>

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
