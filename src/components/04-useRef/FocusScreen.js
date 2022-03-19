import { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  const inputRef = useRef();
  // console.log(ref)

  const handleclick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input 
        type="text" 
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={handleclick}
      >Focus</button>
    </div>
  )
}
