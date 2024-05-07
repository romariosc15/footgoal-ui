
export default function FeaturedCard() {
    return (
      <div className="border border-[#45F882] rounded-xl p-4">
        <img className="bg-no-repeat object-cover" src="./images/game-1.jpg" alt="" />
        <div className="mt-2 text-center">
            <h4 className="text-2xl font-semibold">Top 10 Squad</h4>
            <p className="text-lg font-medium">Top scorer: <span className="text-[#45F882]">John Doe</span></p>
        </div>
      </div>
    );
  }
  