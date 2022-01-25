import Head from 'next/head'
import { useState } from 'react'

const forms = ['Manpower', 'Output', 'Standard Time', 'Working Time']

const Home = () => {
  const [manpower, setManpower] = useState(0)
  const [standardTime, setStandardTime] = useState(0)
  const [workingTime, setWorkingTime] = useState(0)
  const [output, setOutput] = useState(0)
  const [result, setResult] = useState(0)
  const [selectedForm, setSelectedForm] = useState('Manpower')

  const results = (selectedForm: string) => {
    switch (selectedForm) {
      case 'Manpower':
        setResult((Number(standardTime) * Number(output)) / Number(workingTime))
        break
      case 'Output':
        setResult(
          (Number(workingTime) * Number(manpower)) / Number(standardTime)
        )
        break
      case 'Standard Time':
        setResult((Number(workingTime) * Number(manpower)) / Number(output))
        break
      case 'Working Time':
        setResult((Number(standardTime) * Number(output)) / Number(manpower))
        break
      default:
        break
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    results(selectedForm)
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <Head>
        <title>Simple Manpower Calculator | AWH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Simple Manpower Calculator | Used for to count how many manpower, output, standard time and working time on your workspace."
        />
      </Head>

      <main className="glass w-96 rounded-xl border p-2 hover:shadow-2xl">
        {/* app name */}
        <div className="mb-5 uppercase">
          <div className="text-center font-bold">simple manpower</div>
          <div className="divider">calculator</div>
        </div>

        {/* selected form */}
        <div className="mb-5 grid grid-cols-2 gap-2 rounded-lg border border-slate-200 p-3">
          {forms.map((item) => (
            <div
              key={item}
              className={`btn flex cursor-pointer items-center justify-center rounded-lg border-0 p-3 ${
                selectedForm === item
                  ? 'bg-blue-700 hover:bg-blue-700'
                  : 'bg-gray-700 hover:bg-blue-500'
              }`}
              onClick={() => {
                results(item)
                setSelectedForm(item)
              }}
            >
              <div className="text-center">{item}</div>
            </div>
          ))}
        </div>

        {/* manpower form */}
        {selectedForm === 'Manpower' && (
          <form
            className="mb-5 flex flex-col rounded-lg border border-slate-200 p-3"
            onSubmit={handleSubmit}
          >
            {/* standard time */}
            <div className="form-control mb-5">
              <label htmlFor="standardTime" className="label">
                <span className="label-text">Standard Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Standard Time"
                value={standardTime}
                onChange={(e) => setStandardTime(+e.target.value)}
              />
            </div>

            {/* working time */}
            <div className="form-control mb-5">
              <label htmlFor="workingTime" className="label">
                <span className="label-text">Working Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Working Time"
                value={workingTime}
                onChange={(e) => setWorkingTime(+e.target.value)}
              />
            </div>

            <div className="flex items-end space-x-2">
              {/* output */}
              <div className="form-control flex-1">
                <label htmlFor="targetOutput" className="label">
                  <span className="label-text">Output</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Output"
                  value={output}
                  onChange={(e) => setOutput(+e.target.value)}
                />
              </div>

              {/* submit button */}
              <button className="btn btn-primary btn-square btn-lg flex-none">
                =
              </button>
            </div>
          </form>
        )}

        {/* output form */}
        {selectedForm === 'Output' && (
          <form
            className="mb-5 flex flex-col rounded-lg border border-slate-200 p-3"
            onSubmit={handleSubmit}
          >
            {/* standard time */}
            <div className="form-control mb-5">
              <label htmlFor="standardTime" className="label">
                <span className="label-text">Standard Time</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Standard Time"
                value={standardTime}
                onChange={(e) => setStandardTime(+e.target.value)}
              />
            </div>
            {/* manpower */}
            <div className="form-control mb-5">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* working time */}
              <div className="form-control flex-1">
                <label htmlFor="workingTime" className="label">
                  <span className="label-text">Working Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Working Time"
                  value={workingTime}
                  onChange={(e) => setWorkingTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="btn btn-primary btn-square btn-lg flex-none">
                =
              </button>
            </div>
          </form>
        )}

        {/* standardTime form */}
        {selectedForm === 'Standard Time' && (
          <form
            className="mb-5 flex flex-col rounded-lg border border-slate-200 p-3"
            onSubmit={handleSubmit}
          >
            {/* manpower */}
            <div className="form-control mb-5">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            {/* output */}
            <div className="form-control mb-5">
              <label htmlFor="targetOutput" className="label">
                <span className="label-text">Target Output</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Output"
                value={output}
                onChange={(e) => setOutput(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* working time */}
              <div className="form-control flex-1">
                <label htmlFor="workingTime" className="label">
                  <span className="label-text">Working Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Working Time"
                  value={workingTime}
                  onChange={(e) => setWorkingTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="btn btn-primary btn-square btn-lg flex-none">
                =
              </button>
            </div>
          </form>
        )}

        {/* workingTime form */}
        {selectedForm === 'Working Time' && (
          <form
            className="mb-5 flex flex-col rounded-lg border border-slate-200 p-3"
            onSubmit={handleSubmit}
          >
            {/* manpower */}
            <div className="form-control mb-5">
              <label htmlFor="manpower" className="label">
                <span className="label-text">Manpower</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Manpower"
                value={manpower}
                onChange={(e) => setManpower(+e.target.value)}
              />
            </div>
            {/* output */}
            <div className="form-control mb-5">
              <label htmlFor="targetOutput" className="label">
                <span className="label-text">Target Output</span>
              </label>
              <input
                type="text"
                className="input-bordered input input-lg"
                placeholder="Output"
                value={output}
                onChange={(e) => setOutput(+e.target.value)}
              />
            </div>
            <div className="flex items-end space-x-2">
              {/* standard time */}
              <div className="form-control flex-1">
                <label htmlFor="standardTime" className="label">
                  <span className="label-text">Standard Time</span>
                </label>
                <input
                  type="text"
                  className="input-bordered input input-lg"
                  placeholder="Standard Time"
                  value={standardTime}
                  onChange={(e) => setStandardTime(+e.target.value)}
                />
              </div>
              {/* submit button */}
              <button className="btn btn-primary btn-square btn-lg flex-none">
                =
              </button>
            </div>
          </form>
        )}

        {/* result */}
        <div className="form-control">
          <div className="divider">
            {selectedForm === 'Manpower' && 'Manpower Needed'}
            {selectedForm === 'Output' && 'Output Needed'}
            {selectedForm === 'Standard Time' && 'Standard Time Needed'}
            {selectedForm === 'Working Time' && 'Working Time Needed'}
          </div>
          <input
            type="text"
            className="input-bordered input-primary input input-lg cursor-not-allowed"
            placeholder="Manpower Needed.."
            value={result}
            readOnly
          />
        </div>
      </main>
    </div>
  )
}

export default Home
