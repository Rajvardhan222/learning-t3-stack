"use client";

import { useContext, useState } from "react";
import { useUserContext } from "./Context";
import { api } from "@/trpc/react";


export function LatestPost() {
  let [createAccount, setCreateAccount] = useState({
    name: "",
    email: "",
    password: "",
  });
const {user} = useUserContext()
console.log(user);
const mutation =  api.post.user.createUser.useMutation()

  return (
    <div className="flex h-screen w-auto flex-col items-center justify-center gap-y-7">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <div>
        <form
          className="mx-auto flex w-48 flex-col items-center justify-center gap-y-4"
          onSubmit={async(e) => {
            e.preventDefault();
            console.log(createAccount);
            const response =  mutation.mutate({
              name: createAccount.name,
              email: createAccount.email,
              password: createAccount.password,
            })
           
console.log(response);

          }}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="rounded-xl border-[1px] border-slate-300 bg-transparent p-4 text-slate-200 outline-none"
            placeholder="Enter your Name"
            value={createAccount.name}
            onChange={(e) => setCreateAccount(
              (prevValue)=>{
                return {
                  ...prevValue,
                  name: e.target.value,
                }
              }
            )}
          />
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="text"
            className="rounded-xl border-[1px] border-slate-300 bg-transparent p-4 text-slate-200 outline-none"
            placeholder="Enter your Email"
            value={createAccount.email}
            onChange={(e) => setCreateAccount(
              (prevValue)=>{
                return {
                  ...prevValue,
                  email: e.target.value,
                }
              }
            )}
          />
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type="text"
            className="rounded-xl border-[1px] border-slate-300 bg-transparent p-4 text-slate-200 outline-none"
            placeholder="Enter your Password"
            value={createAccount.password}
            onChange={(e) => setCreateAccount(
              (prevValue)=>{
                return {
                  ...prevValue,
                  password: e.target.value,
                }
              }
            )}
          />
          <input
            className="rounded-md bg-white px-8 py-3 text-black"
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
    </div>
  );
}
