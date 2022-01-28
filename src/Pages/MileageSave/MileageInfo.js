import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';

export default function MieageInfo() {
  const [value, setValue] = useState(false);
  const id = 'a4';
  return (
    <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
  );
}
