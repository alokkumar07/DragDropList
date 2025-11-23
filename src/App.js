import DragAndDrop from "./components/DragAndDrop";
import "./styles.css";
const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up Project repo",
    "Write Unit test",
    "Integrate payment hsitory",
  ],
  "In progress": ["Develop authenticatin flow", "Implemnent Payment"],
  Completed: [
    "Set up CI/CD pipeLIne",
    "Conduct code review",
    "Deploy initail version to staging",
  ],
};

export default function App() {
  return <DragAndDrop initialState={initialData} />;
}
