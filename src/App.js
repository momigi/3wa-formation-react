import SelectTips from "./components/SelectTips";
import TipsAmount from "./components/TipsAmount";
import Input from "./components/Input";
import { useState } from "react";

const tips = [5, 10, 15, 20, 50];

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

  const click = function (event) {
    setClickSelect(event.target.value);
    console.log(event.target.value);
  };  

  const tipAmount = function () {
    const amount = numberEntered*{tipAmount}*numberEntered2;
    if (numberEntered>0 && {tipAmount} && numberEntered2>0){
      
    return 0;
    }
  };

  return (
    <div className="pl-2 py-8 mt-36">
      <h1 className="text-2xl text-black font-bold pb-6 text-center">
        TIPTOP CALC
      </h1>

      <div className="flex flex-auto bg-slate-100 mx-44 rounded-md py-6">
        <section className="px-8 mx-auto">
          <div className="bg-slate-100 mb-6">
            Bill
            <Input
              name="Bill"
              functionEventName={inputCalc}
              valueName={numberEntered}
            />
          </div>

          <div className="my-2 mx-2">Select tips %</div>
          <div className="grid grid-cols-3 gap-4 justify-evenly flex-wrap mb-6">
            {tips.map((value, index) => (
              <SelectTips value={value} />
            ))}
          </div>

          <div className="">Number of People</div>
          <Input
            name="Number of people"
            functionEventName={inputCalc2}
            valueName={numberEntered2}
          />
        </section>

        <section className="grid grid-rows-2 bg-indigo-400 rounded-md px-16 mx-auto">
          <div>
            <div className="text-white text-start">
              Tip amount <br />
              <span className="text-slate-200 text-xs">/ person</span>
            </div>
        <TipsAmount value={tipAmount()} />
          </div>
          <div>
            <div className="text-white text-start">
              Total
              <br />
              <span className="text-slate-200 text-xs">/ person</span>
            </div>

            <div className="text-slate-200 text-end">hkhjkhjk</div>
          </div>

          <button
            className="text-indigo-200 text-center mb-
          2 py-2 px-16 bg-white rounded-md"
          >
            reset
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
