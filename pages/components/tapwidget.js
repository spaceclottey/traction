export default function TapWidget({ tap, index, rate, deleteTap, curDay }) {
  return (
    <div
      title={`Last rated: ${curDay - tap.lastRated} days ago | Streak: ${
        tap.streak
      }`}
      className={` ${
        tap.rated == "false"
          ? "bg-gray-300"
          : tap.rated == "done"
          ? "bg-green-300"
          : "bg-red-300"
      } p-2 rounded flex flex-col w-[60%] mx-auto my-10`}
    >
      <p>
        {" "}
        rated: {tap.rated} - lastRated: {tap.lastRated}{" "}
      </p>
      <input
        readOnly
        type="text"
        value={`T: ${tap.trigger}`}
        className="border-2 p-1"
        placeholder="Trigger..."
      />
      <input
        readOnly
        type="text"
        value={`A: ${tap.action}`}
        className="border-2 p-1"
        placeholder="Action..."
      />
      <div className="flex justify-around pt-1 ">
        <button
          onClick={() => rate(index, "undone")}
          className="bg-red-200 text-xl bold px-2 rounded"
        >
          {" "}
          -{" "}
        </button>
        <button onClick={() => deleteTap(index)}> Delete </button>
        <button
          onClick={() => rate(index, "done")}
          className="bg-green-200 text-xl bold px-2 rounded"
        >
          {" "}
          +
        </button>
      </div>
    </div>
  );
}
