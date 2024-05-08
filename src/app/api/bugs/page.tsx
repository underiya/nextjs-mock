"use client";
import Drag from "@/components/Drag";
import Navbar from "@/components/Navbar";
// import { Reorder } from "framer-motion";
import { useState } from "react";

const Tracker: React.FC = () => {
  // const [items, setItems] = useState([1, 2, 3, 4]);
  // const [items2, setItems2] = useState([1, 2, 3, 4]);
  return (
    <div>
      <Navbar />
      <div className=" text-red-400 text-3xl m-2 p-4 text-center font-bold">
        Bugs Report
      </div>
      <br />
      {/* <div className="flex">
        <Reorder.Group values={items} onReorder={setItems}>
          {items.map((item, index) => (
            <Reorder.Item value={item} key={item}>
              <div className="m-8">
                <div className=" bg-slate-50">
                  <div>Item {index}</div>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat veniam quis quisquam corrupti nemo impedit fugiat
                    illo officia facere modi? Voluptate cum sapiente dolor
                    ducimus alias? Libero id dicta corrupti!
                  </p>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <Reorder.Group values={items} onReorder={setItems2}>
          {items2.map((item, index) => (
            <Reorder.Item value={item} key={item}>
              <div className="m-8">
                <div className=" bg-slate-50">
                  <div>Item {index}</div>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat veniam quis quisquam corrupti nemo impedit fugiat
                    illo officia facere modi? Voluptate cum sapiente dolor
                    ducimus alias? Libero id dicta corrupti!
                  </p>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div> */}
      <div className=" flex justify-center">
        <Drag />
      </div>
    </div>
  );
};

export default Tracker;
