export default function Page({ params }: any) {
  return (
    <main className="border-2 p-10">
      <div className="rounded p-2 m-2 bg-slate-100 shadow shadow-slate-600">
        <h1>{params.name}</h1>
        <div className="flex rounded p-2 m-2"></div>
      </div>
      <div className="rounded p-2 m-2 bg-slate-100 shadow shadow-slate-600">
        <h1>Heading 2</h1>
        <div className="flex rounded p-2 m-2"></div>
      </div>
      <div className="rounded p-2 m-2 bg-slate-100 shadow shadow-slate-600">
        <h1>Heading 3</h1>
        <div className="flex rounded p-2 m-2"></div>
      </div>
    </main>
  )
}
