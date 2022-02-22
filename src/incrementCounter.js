
import { useState } from "react";



function IncrementBtn() {
  const [a, setA] = useState("aditya");

  return (
    <>
      <button onClick={() => incrementNumber(a)}>{a}</button>
    </>
  );

  function incrementNumber(a) {
    console.log(a);
    let d = a + "a";
    setA(d);
  }

}
export default IncrementBtn;
