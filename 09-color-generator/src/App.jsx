import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#315c72").all(10));

  const addColor = (color) => {
    console.log(color);
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);


      
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="bottom-center" />
    </>
  );
};
export default App;
