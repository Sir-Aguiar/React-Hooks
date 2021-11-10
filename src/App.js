import { useState } from 'react';
import './App.css';
import SelectHook from './components/CheckboxHook';

import HookingText from './components/TextHook';

function App() {
  const [text, setTexthook] = useState()
  const [selected, setSelect] = useState()
  return (
    <div className='mainApp'>
      <HookingText textHooker={setTexthook} textHooked={text} />
      <SelectHook selectHooked={selected} selectHooker={setSelect} />
    </div>
  );
}

export default App;
