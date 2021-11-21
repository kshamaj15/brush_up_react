import { useMemo, useState } from 'react';
import cx from 'classnames';

const UseMemoExample = () => {
  const [num, setNum] = useState(0);
  const [isDarkMode, setDarkMode] = useState(false);

  const slowFunc = () => {
    for(let i=0; i<1000000000; i++) {}
    return 2*num;
  }

  const doubleNum = useMemo(() => {
    return slowFunc()
  }, [num]);


  return (
    <div>
        <input type="number" 
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <div className={
          cx({
            themeBox: true,
            dark: isDarkMode
          })
        }>
          {doubleNum}
        </div>
          <button onClick={() => setDarkMode(!isDarkMode)}>Change Theme</button>
    </div>
  );
}

export default UseMemoExample;
