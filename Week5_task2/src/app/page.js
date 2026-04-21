import Item from "@/Components/Item";
import { data } from "./Comonents/Data";
export default function Home() {
  return (
    <div className="h-screen bg-gray-300 py-15">
        <div className="w-[60%] mx-auto flex flex-col gap-4">
          {data.map((e) => {
            return (
              <Item key={e.id} id={e.id} img={e.img} title={e.titel} date={e.date} desc={e.desc} />
            )
          })}
        </div>
      </div>
  );
}
