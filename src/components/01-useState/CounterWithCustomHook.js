import { useContador } from '../../hooks/useContador';
import './counter.css';

export const CounterWithCustomHook = () => {

  const {state, incrementar, decrementar, reset} = useContador(100);

  return (
    <>
      <h1>Contador con Hook: {state}</h1>

      <button onClick={incrementar} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={decrementar} className="btn btn-primary">-1</button>
    </>
  )
}
