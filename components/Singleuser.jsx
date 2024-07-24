"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { deleteUserAction } from "@/action"
import { useContext } from "react"
import { UserContext } from "@/context"
// import { addUserInitialValue } from "@/utils"
 
 const Singleuser = ({user}) => {
  const {setDailogopen,setaddUserformData,setEditedcurrentId}= useContext(UserContext)
async function handleDelete(userID){
  const result = await deleteUserAction(userID,"/user-management")
  console.log(result);
}


function handleEdit (currentUser){
  setDailogopen(true)
  setaddUserformData({
    firstName:currentUser?.firstName,
    lastName:currentUser?.lastName,
    email:currentUser?.email,
    address:currentUser?.address
  })
  setEditedcurrentId(currentUser?._id)
}

   return (
    <Card className="card" key={user?._id}>
    <CardHeader>
      <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
      <CardDescription>{user?.email}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{user?.address}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={()=>handleEdit(user)} className="btn-edit">edit</Button>
      <Button  onClick={()=>handleDelete(user._id)} className="btn-delete">delete</Button>
    </CardFooter>
  </Card>
    
  
   )
 }
 
 export default Singleuser
 