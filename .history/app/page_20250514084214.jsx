import PredictionForm from "./components/prediction-form";
import Navbar from "./components/navbar";
import PredictionResults from "./components/prediction-results";

export default function Home() {
  return (
    <main>
      <div className="container w-full mx-auto">
          <PredictionForm />
          <<PredictionResults
        </div>
    </main>
  );
}
