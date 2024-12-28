import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <PizzaList />
      </main>
      <Footer />
    </div>
  );
}
