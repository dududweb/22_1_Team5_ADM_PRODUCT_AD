import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';

export default function PickUpInfo() {
  const [value, setValue] = useState(false);
  const id = 2;
  return (
    <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
  );
}
