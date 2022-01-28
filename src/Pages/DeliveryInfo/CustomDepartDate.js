import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';

export default function CustomDepartDate() {
  const [value, setValue] = useState(false);
  const id = 'a1';
  return (
    <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
  );
}
