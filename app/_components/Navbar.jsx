export default function Navbar() {
  return (
    <header className="bg-black text-white border-b-[#45F882] border-b-2">
      <div className="container mx-auto py-6 px-36 flex flex-row justify-between items-center">
        <div>
          <h4 className="text-3xl font-black">
            FOOT<span className="text-green-400">GOAL</span>
          </h4>
        </div>
        <nav>
          <ul className="flex flex-row gap-12">
            <li>
              <a
                href="/"
                className="font-semibold hover:text-[#45F882] transition-colors"
              >Home</a>
            </li>
            <li>
              <a
                href="/about-us"
                className="font-semibold hover:text-[#45F882] transition-colors"
              >About us</a>
            </li>
            <li>
              <a
                href="/games"
                className="font-semibold hover:text-[#45F882] transition-colors"
              >Games</a>
            </li>
            <li>
              <a
                href="/leaderboard"
                className="font-semibold hover:text-[#45F882] transition-colors"
              >Leaderboard</a>
            </li>
          </ul>
        </nav>
        <div>
          <h1 className="text-3xl font-black">
            FOOT<span className="text-green-400">GOAL</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
