"use client";
import { addUserServerAction, updateUserAction } from "@/action";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserControlls, addUserInitialValue } from "@/utils";
import { useContext, useState } from "react";
import { UserContext } from "@/context";

const Adduser = () => {
  // this is extracted from context
  const {
    dailogOpen,
    setDailogopen,
    addUserFormData,
    setaddUserformData,
    editedCurrentId,
    setEditedcurrentId,
  } = useContext(UserContext);
  // console.log(addUserFormData);

  function handleFormvalidate() {
    return Object.keys(addUserFormData).every(
      (key) => addUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewuserAction() {
    const result =
      editedCurrentId !== null
        ? await updateUserAction(
            editedCurrentId,
            addUserFormData,
            "/user-management"
          )
        : await addUserServerAction(addUserFormData, "/user-management");
    console.log(result);
    setDailogopen(false);
    setaddUserformData(addUserInitialValue);
    setEditedcurrentId(null);
  }

  return (
    <div>
      <Button onClick={() => setDailogopen(true)} className="btn-add">Add new user</Button>
      <Dialog
    
        open={dailogOpen}
        onOpenChange={() => {
          setDailogopen(false);
          setaddUserformData(addUserInitialValue);
          setEditedcurrentId(null);
        }}
      >
        <DialogContent className=" dailog rounded-lg sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editedCurrentId !== null ? "Edit user" : "Add user"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewuserAction} className="grid gap-4 py-4">
            {addNewUserControlls.map((userInfo) => (
              <div key={userInfo.name}>
                <div className=" gap-4 mb-3">
                  <Label htmlFor={userInfo.name} className="text-right">
                    {userInfo.label}
                  </Label>
                  <Input
                    id={userInfo.name}
                    name={userInfo.name}
                    type={userInfo.type}
                    placeholder={userInfo.placeholder}
                    value={addUserFormData[userInfo.name]}
                    onChange={(e) =>
                      setaddUserformData({
                        ...addUserFormData,
                        [userInfo.name]: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
            ))}

            <DialogFooter>
              <Button
                className=" btn-save   disabled:opacity-40"
                disabled={!handleFormvalidate()}
                type="submit"
              >
                Save{" "}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Adduser;
