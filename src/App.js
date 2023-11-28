import SelectTips from "./components/SelectTips";
import TipsAmount from "./components/TipsAmount";
import Input from "./components/Input";
import Total from "./components/Total";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const tips = [5, 10, 15, 20, 50];
// const numberEntered = bill * (tip/100);
// const tipByPeople = totalTips / numberEntered2;

function App() {
  const [numberEntered, setNumberEntered] = useState("");
  const [numberEntered2, setNumberEntered2] = useState("");
  const [clickSelect, setClickSelect] = useState([]);

  const inputCalc = function (event) {
    setNumberEntered(event.target.value);
    console.log(event.target.value);
  };

  const inputCalc2 = function (event) {
    setNumberEntered2(event.target.value);
    console.log(event.target.value);
  };

  const clickSelectHandler = function (value) {
    setClickSelect(value)
    console.log(value);
  };

  const tipAmount = function () {
    if (numberEntered && numberEntered2 && clickSelect) {
      console.log(clickSelect);
      const amount = (numberEntered * (clickSelect / 100)) / numberEntered2;
      return amount;
    } else {
      return 0;
    }
  };

  return (
    <main className="pl-2 py-8 mt-36">
      <h1 className="text-2xl text-black font-bold pb-6 text-center">
        TIPTOP CALC
      </h1>

      <div className="flex flex-row bg-slate-100 rounded-md py-6 w-full max-w-xl mx-auto">
        <section className="px-8 mx-auto">
          <div className="bg-slate-100 mb-6">
            Bill
            <div><FiDollarSign />
            <Input
              name="Bill"
              functionEventName={inputCalc}
              valueName={numberEntered}
            /></div>
          </div>

          <div className="my-2 mx-2">Select tips %</div>
          <div className="grid grid-cols-3 gap-4 justify-evenly flex-wrap mb-6">
            {tips.map((value, index) => (
              <SelectTips
                value={value}
                clickSelectHandler={() => clickSelectHandler(value)}
              />
            ))}
          </div>

          <div className="">Number of People</div>
          <Input
            name="Number of people"
            functionEventName={inputCalc2}
            valueName={numberEntered2}
          />
        </section>

        <section className="grid grid-rows-2 bg-indigo-400 rounded-md px-4 py-6 mx-auto">
          <div className="flex justify-between ">
            <div className="text-white text-start">
              Tip amount <br />
              <span className="text-slate-200 text-xs">/ person</span>
            </div>
            <TipsAmount value={tipAmount()} />
          </div>
          <div className="flex justify-between ">
            <div className="text-white text-start pb-2">
              Total
              <br />
              <span className="text-slate-200 text-xs">/ person</span>
            </div>

            <div className="text-slate-200 text-end">hkhjkhjk</div>
          </div>

          <button
            className="text-indigo-200 text-center mb-
          2 py-2 px-24 bg-white rounded-md "
          >
            RESET
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
