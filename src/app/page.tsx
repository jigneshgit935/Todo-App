import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="bg-slate-950 p-4">
        <h1 className="text-3xl">Todos</h1>
      </header>
      <main className="p-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          className="p-2 rounded mr-5 text-slate-900"
        />
        <button className="border-2 p-2 rounded">Add Todo</button>
      </main>
    </>
  );
}
