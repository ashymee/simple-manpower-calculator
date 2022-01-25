import Head from "next/head";
import { useState } from "react";

const forms = ["Manpower", "Output", "Standard Time", "Working Time"];

const Home = () => {
  const [manpower, setManpower] = useState(0);
  const [standardTime, setStandardTime] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [output, setOutput] = useState(0);
  const [result, setResult] = useState(0);
  const [selectedForm, setSelectedForm] = useState("Manpower");

  const results = (selectedForm: string) => {
    let formula = 0;

    switch (selectedForm) {
      case "Manpower":
        formula = (output * standardTime) / workingTime;
        if (workingTime === 0) {
          setResult(0);
          setManpower(0);
        } else {
          setResult(formula);
          setManpower(formula);
        }
        break;
      case "Output":
        formula = (workingTime * manpower) / standardTime;
        if (standardTime === 0) {
          setResult(0);
          setOutput(0);
        } else {
          setResult(formula);
          setOutput(formula);
        }
        break;
      case "Standard Time":
        formula = (workingTime * manpower) / output;
        if (output === 0) {
          setResult(0);
          setStandardTime(0);
        } else {
          setResult(formula);
          setStandardTime(formula);
        }
        break;
      case "Working Time":
        formula = (output * standardTime) / manpower;
        if (manpower === 0) {
          setResult(0);
          setWorkingTime(0);
        } else {
          setResult(formula);
          setWorkingTime(formula);
        }
        break;
      default:
        setResult(0);
        setManpower(0);
        setOutput(0);
        setStandardTime(0);
        setWorkingTime(0);
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    results(selectedForm);
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      {/*Metatag*/}
      <Head>
        <title>Simple Manpower Calculator | AWH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Simple Manpower Calculator | Used for to count how many manpower, output, standard time and working time on your workspace."
        />
        <meta name="keywords" content="Calculator, Manpower, ReactJS, NextJS" />
      </Head>

      <main className="p-2 border glass min-w-min rounded-xl md:hover:shadow-2xl">
        {/* app name */}
        <div className="mb-2 uppercase">
          <div className="font-bold text-center">simple manpower</div>
          <div className="divider">calculator</div>
        </div>

        {/* selected form */}
        <div className="p-3 mb-2 border rounded-lg grid grid-cols-2 gap-2 border-slate-200">
          {forms.map((item) => (
            <div
              key={item}
              className={`btn flex cursor-pointer items-center justify-center rounded-lg border-0 p-3 ${
                selectedForm === item
                  ? "bg-blue-700 hover:bg-blue-700"
                  : "bg-gray-700 hover:bg-blue-500"
              }`}
              onClick={() => {
                results(item);
                setSelectedForm(item);
              }}
            >
              <div className="text-center">{item}</div>
            </div>
          ))}
        </div>

        {/* manpower form */}
        {selectedForm === "Manpower" && (
          <form
            className="flex flex-col p-3 mb-2 border rounded-lg border-slate-200"
            onSubmit={handleSubmit}
          >
            {/* standard time */}
            <div className="mb-2 form-control">
              <label htmlFor="standardTime" className="label">
                <span className="label-text">Standard Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Standard Time"
                value={standardTime.toString()}
                onChange={(e) => setStandardTime(+e.target.value)}
              />
            </div>

            {/* working time */}
            <div className="mb-2 form-control">
              <label htmlFor="workingTime" className="label">
                <span className="label-text">Working Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Working Time"
                value={workingTime.toString()}
                onChange={(e) => setWorkingTime(+e.target.value)}
              />
            </div>

            <div className="flex items-end space-x-2">
              {/* output */}
              <div className="flex-1 form-control">
                <label htmlFor="targetOutput" className="label">
                  <span className="label-text">Output</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Output"
                  value={output.toString()}
                  onChange={(e) => setOutput(+e.target.value)}
                />
              </div>

              {/* submit button */}
              <button className="flex-none btn btn-primary btn-square btn-lg">
                =
              </button>
            </div>
          </form>
        )}

        {/* output form */}
        {selectedForm === "Output" && (
          <form
            className="flex flex-col p-3 mb-2 border rounded-lg border-slate-200"
            onSubmit={handleSubmit}
          >
            {/* standard time */}
            <div className="mb-2 form-control">
              <label htmlFor="standardTime" className="label">
                <span className="label-text">Standard Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Standard Time"
                value={standardTime.toString()}
                onChange={(e) => setStandardTime(+e.target.value)}
              />
            </div>
            {/* manpower */}
            <div className="mb-2 form-control">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower.toString()}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* working time */}
              <div className="flex-1 form-control">
                <label htmlFor="workingTime" className="label">
                  <span className="label-text">Working Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Working Time"
                  value={workingTime.toString()}
                  onChange={(e) => setWorkingTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="flex-none btn btn-primary btn-square btn-lg">
                =
              </button>
            </div>
          </form>
        )}

        {/* standardTime form */}
        {selectedForm === "Standard Time" && (
          <form
            className="flex flex-col p-3 mb-2 border rounded-lg border-slate-200"
            onSubmit={handleSubmit}
          >
            {/* manpower */}
            <div className="mb-2 form-control">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower.toString()}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            {/* output */}
            <div className="mb-2 form-control">
              <label htmlFor="targetOutput" className="label">
                <span className="label-text">Target Output</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Output"
                value={output.toString()}
                onChange={(e) => setOutput(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* working time */}
              <div className="flex-1 form-control">
                <label htmlFor="workingTime" className="label">
                  <span className="label-text">Working Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Working Time"
                  value={workingTime.toString()}
                  onChange={(e) => setWorkingTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="flex-none btn btn-primary btn-square btn-lg">
                =
              </button>
            </div>
          </form>
        )}

        {/* workingTime form */}
        {selectedForm === "Working Time" && (
          <form
            className="flex flex-col p-3 mb-2 border rounded-lg border-slate-200"
            onSubmit={handleSubmit}
          >
            {/* manpower */}
            <div className="mb-2 form-control">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower.toString()}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            {/* output */}
            <div className="mb-2 form-control">
              <label htmlFor="targetOutput" className="label">
                <span className="label-text">Target Output</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Output"
                value={output.toString()}
                onChange={(e) => setOutput(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* standard time */}
              <div className="flex-1 form-control">
                <label htmlFor="standardTime" className="label">
                  <span className="label-text">Standard Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Standard Time"
                  value={standardTime.toString()}
                  onChange={(e) => setStandardTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="flex-none btn btn-primary btn-square btn-lg">
                =
              </button>
            </div>
          </form>
        )}

        {/* result */}
        <div className="form-control">
          <div className="divider">{selectedForm} needed</div>
          <input
            type="text"
            className="cursor-not-allowed input-bordered input-primary input input-lg"
            placeholder={`${selectedForm.toLowerCase()} results...`}
            value={result === 0 ? "" : result.toString()}
            readOnly
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
