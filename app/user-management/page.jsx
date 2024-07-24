
import { fetchUserServerAction } from "@/action"
import Adduser from "@/components/Adduser"
import Singleuser from "@/components/Singleuser"
// import { Button } from "@/components/ui/button"

 


 const page = async () => {
   const getListofUsers = await fetchUserServerAction()
   console.log(getListofUsers)
   return (
     <div className="p-20 w-full ">
      <div className="flex lg:p-3 lg:justify-between p-9 flex-col lg:flex-row">
       <h1 className="text-xl font-bold ">Manage Your User</h1>
        <Adduser/>
      </div>
      <div className="mt-4  gap-5 p-5 grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
         {
          getListofUsers && getListofUsers.data && getListofUsers.data.length >0 ?
          getListofUsers.data.map(userDetails=> <Singleuser user = {userDetails}    />) : <h2>
            No user please create one 
          </h2>
         }
      </div>

     </div>
   )
 }
 
 export default page
 