import Navbar from  "./_components/Navbar"
import Footer from  "./_components/Footer"
import FeaturedCard from  "./_components/FeaturedCard"
export default function Home() {
  return (
    <main className="bg-[#0B0E13] text-white min-h-screen">
      <Navbar />
      <div
        className="flex flex-col items-center justify-center h-[700px] bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: 'url(./images/home-1-edit.jpg)', backgroundColor: '#000'}}
      >
        <h4 className="text-2xl text-[#45F882] font-medium">Pon a prueba tu conocimiento</h4>
        <h2 className="text-7xl font-bold">LAS MEJORES TRIVIAS DEl MUNDO</h2>
        <h1 className="text-8xl font-bold text-[#45F882]">FÚTBOL</h1>
      </div>
      <div className="container mx-auto py-16 px-36">
        <div className="text-center mb-8">
          <h5 className="text-xl text-[#45F882] font-medium mb-2">Lo mejor de la semana</h5>
          <h3 className="text-5xl font-bold">Juegos destacados</h3>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}
