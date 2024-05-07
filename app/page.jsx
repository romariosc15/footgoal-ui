import Navbar from  "./_components/Navbar"
import FeaturedCard from  "./_components/FeaturedCard"
export default function Home() {
  return (
    <main className="bg-[#0B0E13] text-white h-screen">
      <Navbar />
      <div className="container mx-auto py-16 px-24">
        <div className="text-center mb-8">
          <h3 className="text-xl text-[#45F882] font-medium mb-2">Lo mejor de la semana</h3>
          <h1 className="text-5xl font-bold">Juegos destacados</h1>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </main>
  );
}
