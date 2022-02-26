import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PillContainer } from './pill.style';

function Pill(props) {
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();
  
  const handleClick = (payload) => {
    dispatch(props.click(payload))
    if (status === true){
      setStatus(false)
    } else {
      setStatus(true)
    }
  }

  return (
    <PillContainer status={status} onClick={()=>handleClick()}>
      {props.label}
    </PillContainer>
  );
}

export default Pill;