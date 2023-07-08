export default function Home() {
  return (
    <main className="w-screen">
      <div className="outline outline-black w-full h-20 centered">
        Home Page Banner
      </div>
      <div className="outline outline-black w-full h-96 centered">
        Map Section
      </div>
      <div className="outline outline-black w-full h-20 centered">
        <div className="outline outline-black w-1/3 h-full centered">Encounters</div>
        <div className="outline outline-black w-1/3 h-full centered">Items</div>
        <div className="outline outline-black w-1/3 h-full centered">Other</div>
      </div>
    </main>
  );
}
