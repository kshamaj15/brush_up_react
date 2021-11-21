import { useEffect, useRef, useState } from 'react';

const UseRefExample = () => {
  const [inputVal, setInputVal] = useState('');
  const countRef = useRef(0);
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    countRef.current++;
  })

  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>Input is rendered {countRef.current} times</p>
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default UseRefExample;
