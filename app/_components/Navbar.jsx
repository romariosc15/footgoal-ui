export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-6 flex flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-black">
            FOOT<span className="text-green-400">GOAL</span>
          </h1>
        </div>
        <nav>
          <ul className="flex flex-row gap-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/games">Games</a>
            </li>
            <li>
              <a href="/leaderboard">Leaderboard</a>
            </li>
          </ul>
        </nav>
        <div>
          <h1 className="text-2xl font-black">
            FOOT<span className="text-green-400">GOAL</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
