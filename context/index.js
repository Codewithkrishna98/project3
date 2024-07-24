"use client"

import { addUserInitialValue } from "@/utils";
import { createContext, useState } from "react";



// step -1 
export const  UserContext = createContext(null)

// step -2 
export default function UserState ({children}){

  const [dailogOpen, setDailogopen] = useState(false)
  const [addUserFormData,setaddUserformData] = useState(addUserInitialValue)

  // step-3 
  const [editedCurrentId, setEditedcurrentId] = useState(null)
return (<UserContext.Provider  value={{dailogOpen,setDailogopen,addUserFormData,setaddUserformData, editedCurrentId,setEditedcurrentId }}>
  {children}
</UserContext.Provider>)
}