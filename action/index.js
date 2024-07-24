"use server"

import connectDb from "@/database"
import { User } from "@/models/user.model"
import { revalidatePath } from "next/cache"
// import User from "@/models/user.model";
// import { NextResponse } from "next/server";

// add user server action 

export async function addUserServerAction (formData,pathTovalidate){
        await connectDb()
        try {
          revalidatePath(pathTovalidate)
             const newlyCreateduser = await  User.create(formData)
             if(newlyCreateduser){
              return{
                success:true,
                message: "User created successfully",
              }
             }else{
              return {
                success : false,
                message : "Something went wrong"
              }
             }
        } catch (error) {
          console.log(error);
          return {
            success : false,
            message : "overall  Something went wrong"
          }
        }
}



// fetch user server action 

 export async function fetchUserServerAction (){
    await connectDb()
  try {
    const listOfusers = await User.find({})
   if (listOfusers){
    return {
      success: true,
      data: JSON.parse(JSON.stringify(listOfusers))
    }
   }else{
    return {
      success : false,
      message : "  Something went wrong"
    }
   }
    
  } catch (error) {
    console.log(error);
    return {
      success : false,
      message : "  Something went wrong"
    }
  }
 }

// delete user server action

export async function deleteUserAction(userId,pathTovalidate){
  await connectDb()
try {
  revalidatePath(pathTovalidate)
   const deleteUserbyId  = await User.findByIdAndDelete(userId)
   if(deleteUserbyId){
    return {
      success: true,
      message : "user deleted successfully"
    }
   }else{
    return {
      success: false,
      message : "something  went wrong "
    }
   }

   
} catch (error) {
  console.log(error);
  return{
    success:false,
    message:"user not deleted try again later"
  }
}

}

// update user server action

export async function updateUserAction (userId, formData, pathTovalidate){
 await connectDb()
 try {
  const {firstName ,lastName , email ,address}= formData
  const updatedUser = await User.findOneAndUpdate({
    _id:userId
  },
{
  firstName,lastName , email,address
},
{
  new:true
})
if(updatedUser){
  revalidatePath(pathTovalidate)
  return {
    success:true,
    message: "user updated successfully"
  }
}else{
  return {
    success:false ,
    message:"something went wrong"
  }
}

 } catch (error) {
  console.log(error);
  return {
    success:false ,
    message:"something went wrong"
  }
 }

}