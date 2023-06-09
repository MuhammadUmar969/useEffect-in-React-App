import React, { useEffect, useState } from "react";

const ClickMe = () => {

  const [num,setNum] = useState(0);

  useEffect(() => {
    document.title=`You Clicked me ${num} times`
  })

    return(
        <>
    <button onClick={() => {
        setNum(num+1);  
    }}>Click Me {num}</button>
        </>
    );
};

export default ClickMe;