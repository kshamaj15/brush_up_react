import useLocalStorage from '../cutomHooks/useLocalStorage';
import useUpdateLogger from '../cutomHooks/useUpdateLogger';

const CutomHookUse = () => {
  const [inputVal, setInputVal] = useLocalStorage('name', () => '');

  useUpdateLogger(inputVal);

  return (
    <div>
      <input 
        type="text" 
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)}/>
    </div>
  );
}

export default CutomHookUse;
