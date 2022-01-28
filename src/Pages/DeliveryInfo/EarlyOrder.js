import { useState } from 'react';
import ToggleButton from '../../Component/ToggleButton/ToggleButton';
import DatePicker from '../../Component/DatePicker/DatePicker';

export default function CustomDepartDate() {
  const [value, setValue] = useState(false);
  const id = 3;
  return (
    <>
      <ToggleButton id={id} value={value} setValue={setValue}></ToggleButton>
      <DatePicker />
    </>
  );
}
