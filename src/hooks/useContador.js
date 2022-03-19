import {useState} from 'react'

export const useContador = (initialState = 10) => {
  
  const [counter, setCounter] = useState(initialState);

  const incrementar = () => setCounter(counter + 1);
  const decrementar = () => setCounter(counter - 1);
  const reset = () => setCounter(initialState);

  return {
    counter,
    incrementar,
    decrementar,
    reset
  }

}
