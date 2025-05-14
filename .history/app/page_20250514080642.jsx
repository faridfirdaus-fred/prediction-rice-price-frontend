import PredictionForm from "./components/prediction-form";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="container w-full mx-auto px-4 py-12">
          <PredictionForm />
        </div>
      </div>
    </main>
  );
}
