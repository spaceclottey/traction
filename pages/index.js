import Head from "next/head";
import Image from "next/image";
import {useState} from 'react'
import { PrismaClient } from '@prisma/client'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getSession } from "next-auth/client"



const prisma = new PrismaClient()


export default function Home({taps}) {
  const [session, loading] = useSession()

  const [newTrigger, setNewTrigger] = useState('')
  const [newAction, setNewAction] = useState('')


  

  async function saveNewTap(){
    const newTap = {
      trigger: newTrigger,
      action: newAction
    }

    taps.unshift(newTap)

    const response = await fetch("/api/createTap", {
      method: 'POST',
      body: JSON.stringify(newTap)
    })

    
    setNewTrigger('')
    setNewAction('')

    console.log(response.json())  
    return await response
  }

  return (
    <div className="min-h-screen w-[60%] mx-auto text-cen"> 

      {!session && <>

        <p> Not signed in </p> <br/> 
        <button onClick={() => signIn()}>Sign in</button>
      </>
      }
      

      {session && 
        <div className="bg-purple-200 text-center">
          <h1 className="text-6xl py-7 font-serif"> Traction </h1> 
        
          <h2 className="text-4xl py-7"> Add Taps </h2> 
          <div className="pb-2 bg-gray-200 rounded flex flex-col w-[60%] mx-auto ">
            <input type="text" value={newTrigger} onChange={e => setNewTrigger(e.target.value)} className="border-2 p-1" placeholder="Trigger..."/>
            <input type="text" value={newAction} onChange={e => setNewAction(e.target.value)} className="border-2 p-1" placeholder="Action..."/>
            <button onClick={saveNewTap} className="border-2">Add</button> 
          </div>

          <h2 className="text-4xl pt-16"> Other Taps </h2> 

          <div className=""> 
            {taps.map((tap, index) => (
              <div className="p-2 bg-gray-300 rounded flex flex-col w-[60%] mx-auto my-10">
                <input type="text" value={`T: ${tap.trigger}`} className="border-2 p-1" placeholder="Trigger..."/>
                <input type="text" value={`A: ${tap.action}`} className="border-2 p-1" placeholder="Action..."/>
                <div className="flex justify-around pt-1 "> 
                  <button className="bg-red-200 text-xl bold px-2 rounded"> - </button>
                  <button> Delete </button>
                  <button className="bg-green-200 text-xl bold px-2 rounded"> +</button>
                </div> 
              </div>
            ))} 
          </div>

          {taps.length == 0 &&
          <h1> You have no taps </h1> }


          <p> Signed in as {session.user.name} </p> <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </div> 
      }

      
      

    </div>  
  );
}


export async function getServerSideProps(context){
  const session = await getSession(context)

  let taps = {}

  if (session) {
    taps = await prisma.tap.findMany({where: {user: session.user.name}})
    await prisma.$disconnect()
  }
  

  return {
    props : {
      taps: taps
    },
  }
}
