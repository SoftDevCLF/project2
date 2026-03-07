import Header from "./components/Header";
import VisualizationCards from "./components/VisualizationCards";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <div className="mx-auto px-auto px-6">
        <main className="container mx-auto-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Explore Nutritional Insights
          </h2>
          <VisualizationCards />
          <Filters />
          <h2 className="text-2xl font-semibold mt-5 mb-4">Pagination</h2>
          <Pagination />
        </main>
      </div>

      <Footer />
    </div>
  );
}
