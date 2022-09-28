import React, { useState } from "react";
import ParkingContext from "./ParkingContext";

function ParkingState({ children }: any) {

  
  let [input, setInput] = useState("");
  let [details, setDetails] = useState("");
  let [spaceContainer, setSpaceContainer] = useState([]);
  let [allocateSpace, setAllocateSpace] = useState([]);
  let [parkDetails, setParkDetails] = useState([]);
  let [parkId, setParkId] = useState(null);


  return (
    <ParkingContext.Provider
      value={{
        input,
        setInput,
        details,
        setDetails,
        spaceContainer,
        setSpaceContainer,
        allocateSpace,
        setAllocateSpace,
        parkDetails,
        setParkDetails,
        parkId,
        setParkId,
      }}
    >
      {children}
    </ParkingContext.Provider>
  );
}

export default ParkingState;
