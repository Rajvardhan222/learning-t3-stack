"use client";

import { useContext, useState } from "react";
import { useUserContext } from "../_components/Context";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";


export default function LatestPost() {
  let [createAccount, setCreateAccount] = useState({
   
    email: "",
    password: "",
  });
const {user} = useUserContext()
console.log(user);
let {setUser} = useUserContext()
let router = useRouter()
const query = api.post.user.loginUser.useMutation()
  return (
    <div className="flex h-screen w-auto flex-col items-center justify-center gap-y-7">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <div>
        <form
          className="mx-auto flex w-48 flex-col items-center justify-center gap-y-4"
          onSubmit={async(e) => {
            e.preventDefault();
                let data  = await query.mutateAsync({     
                    email : createAccount.email,
                    password : createAccount.password}) 
                console.log('this is fdata',data);
                
                if(data){
                    console.log('inside setUser',data.email);
                    
                    setUser((prev) => {
                        return {
                         ...prev,
                          isLoggedIn: true,
                          id: data.id,
                          name: data.name,
                          email: data.email,
                        }
  
                    })
                    router.push('/')
                }

          }}
        >
         
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
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
