export default function App() {
  return (
    <main className="px-4 bg-gray-50 h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        JSON Tree Viewer
      </h1>
      <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        Simple JSON Viewer that runs completely on-client. No data exchange
      </p>
      <button className="mt-6 rounded-lg text-md font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-fit">
      {/* <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"> */}
        Load JSON
      </button>
    </main>
  )
}
