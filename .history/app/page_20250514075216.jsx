import PredictionForm from "./components/prediction-form";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">

          <PredictionForm />
        </div>
      </div>
    </main>
  );
}
