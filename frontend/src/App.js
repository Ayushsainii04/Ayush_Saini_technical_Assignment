import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;