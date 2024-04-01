import Button from "./component/Button";
import Select from "./component/Select";
import "./css/main.css"

function App() {
  return (
    <div>
      <h1>Soy Super Good Converter</h1>
      <Button text="Save" /><Button text="Update" />
      <Button text="Delete"/><Button text="Submit"/> <br />
      <Select /> 
    </div>
  );
}

export default App;
