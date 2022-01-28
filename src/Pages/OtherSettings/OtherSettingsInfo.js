import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';

export default function OtherSettingsInfo() {
  const [value, setValue] = useState(false);
  const id = 'a5';
  return (
    <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
  );
}
