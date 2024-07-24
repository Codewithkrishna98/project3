"use client"
// step- 4
import UserState from "@/context";

export default function CommonLayout ({children}){
return <UserState>{children}</UserState>
}