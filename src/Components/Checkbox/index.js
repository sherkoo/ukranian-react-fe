import React, { useState } from "react";
import { CheckBoxContainer, CheckBoxButton } from "./checkbox.style";
import checkIcon from'./images/icons/check.svg';
import { useDispatch } from 'react-redux';

function CheckBox(props) {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(props.click);
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <CheckBoxContainer onClick={() => handleCheck()}>
      <CheckBoxButton checked={checked}>
        {checked && (
          <img src={checkIcon} alt="checkbox" />
        )}
      </CheckBoxButton>
      {props.label}
    </CheckBoxContainer>
  );
}

export default CheckBox;
