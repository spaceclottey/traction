import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/client";
import { getSession } from "next-auth/client";
import TapWidget from "./components/tapwidget.js";

export default function Home({ tapsDB }) {
  const [session, loading] = useSession();

  const [newTrigger, setNewTrigger] = useState("");
  const [newAction, setNewAction] = useState("");
  const [taps, setTaps] = useState(tapsDB);
  const [curDay, setCurDay] = useState(
    Math.floor(Date.now() / (1000 * 60 * 60 * 24))
  ); // full days since jan 1st 1970

  newDay();

  async function newDay() {
    const response = await fetch("/api/updateManyTaps", {
      method: "POST",
      body: { curDay: curDay },
    });

    console.log(response.json());
    return await response;
  }

  async function saveNewTap() {
    const newTap = {
      trigger: newTrigger,
      action: newAction,
      rated: "false",
    };

    let newArr = [...taps];
    newArr.unshift(newTap);
    setTaps(newArr);

    const response = await fetch("/api/createTap", {
      method: "POST",
      body: JSON.stringify(newTap),
    });

    setNewTrigger("");
    setNewAction("");

    console.log(response.json());
    return await response;
  }

  async function rate(i, rating) {
    let newArr = [...taps];
    newArr[i].streak =
      rating == "done"
        ? newArr[i].rated !== "done" // was the rating already 'done'?
          ? newArr[i].streak + 1
          : newArr[i].streak
        : 0;
    newArr[i].rated = rating;
    newArr[i].lastRated = curDay;
    setTaps(newArr);

    const response = await fetch("/api/updateTap", {
      method: "POST",
      body: JSON.stringify(taps[i]),
    });

    console.log(response.json());
    return await response;
  }

  async function deleteTap(i) {
    console.log("deleting");
    console.log(taps[i]);

    const response = await fetch("/api/deleteTap", {
      method: "POST",
      body: JSON.stringify(taps[i]),
    });

    let newArr = [...taps];
    newArr.splice(i, 1);
    setTaps(newArr);

    console.log(response.json());
    return await response;
  }

  return (
    <div className="bg-purple-200 text-center min-h-screen w-[60%] mx-auto text-center ">
      <h1 className="text-6xl py-7 font-serif"> Traction </h1>
      <p>
        {" "}
        Since {curDay}{" "}
        <button onClick={() => setCurDay(curDay + 1)}> + </button>{" "}
      </p>

      {!session && (
        <div>
          <button
            className="text-4xl mt-10 text-white border-1 border-white p-7 bg-blue-400 rounded"
            onClick={signIn}
          >
            Sign In
          </button>
        </div>
      )}

      {session && (
        <div>
          <h2 className="text-4xl py-7"> Add Taps </h2>
          <div className="pb-2 bg-gray-200 rounded flex flex-col w-[60%] mx-auto ">
            <input
              type="text"
              value={newTrigger}
              onChange={(e) => setNewTrigger(e.target.value)}
              className="border-2 p-1"
              placeholder="Trigger..."
            />
            <input
              type="text"
              value={newAction}
              onChange={(e) => setNewAction(e.target.value)}
              className="border-2 p-1"
              placeholder="Action..."
            />
            <button onClick={saveNewTap} className="border-2">
              Add
            </button>
          </div>
          <h2 className="text-4xl pt-16"> Other TAPs</h2>
          {taps.length == 0 && <h1> You have no TAPs </h1>}
          <div className="unrated_taps bg-gray-100">
            <h3 className="text-3xl"> Unrated </h3>
            {taps.map(
              (tap, index) =>
                tap.rated == "false" && (
                  <TapWidget
                    key={tap.id}
                    tap={tap}
                    index={index}
                    rate={rate}
                    deleteTap={deleteTap}
                    curDay={curDay}
                  />
                )
            )}
          </div>
          <div className="rated_taps bg-green-100">
            <h3 className="text-3xl"> Rated </h3>
            {taps.map(
              (tap, index) =>
                tap.rated !== "false" && (
                  <TapWidget
                    key={tap.id}
                    tap={tap}
                    index={index}
                    rate={rate}
                    deleteTap={deleteTap}
                    curDay={curDay}
                  />
                )
            )}
          </div>
          <p> Signed in as {session.user.name} </p> <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const session = await getSession(context);

  let taps = {};

  if (session) {
    taps = await prisma.tap.findMany({ where: { user: session.user.name } });
    await prisma.$disconnect();
  }

  return {
    props: {
      tapsDB: taps,
    },
  };
}
