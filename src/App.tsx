import React from "react";
import "./App.css";
import Select from "./components/select";
import ReactSelect from "./components/ReactSelect";
import PropsTest from "./components/PropsTest";
import ButtonsMUI from "./components/MaterialUI/ButtonsMUI";
import TextFieldMUI from "./components/MaterialUI/TextFieldMUI";
import ToggleButtonGoup from "./components/MaterialUI/ToggleButtonGoup";
import SwitchMUI from "./components/MaterialUI/SwitchMUI";
import RatingsMUI from "./components/MaterialUI/RatingsMUI";
import SliderMUI from "./components/MaterialUI/SliderMUI";
import FloatingActionButtonMUI from "./components/MaterialUI/FloatingActionButtonMUI";
import AutoCompleteMUI from "./components/MaterialUI/AutoCompleteMUI";
import Counter from "./components/Counter";
import Home from "./components/parent_child/Home";
import Parent from "./components/LiftingState/user";
import LoadingButtons from "./components/MaterialUI/LoadingButton";
function App() {
  const { increment, counter } = Counter();
  return (
    <div className="App">
      <div className="div_area">
        <h1>Select Div</h1>
        <Select />
      </div>

      <div className="div_area">
        <h1>React Select Div</h1>
        <ReactSelect />
      </div>

      <div className="div_area">
        <h1>PropsTest Div</h1>
        <PropsTest name={"Rajesh"} />
      </div>

      <div className="div_area">
        <h1>Counter div</h1>
        <button onClick={increment}>&nbsp; Increment</button>
        &nbsp;{counter}
      </div>

      <div className="div_area parent_child">
        <h1>Parent Child JSX Component</h1>
        <Home />
      </div>

      <div className="div_area">
        <h2>Material UI Buttons</h2>
        <ButtonsMUI />
      </div>

      <div className="div_area">
        <h2>Material UI TextField</h2>
        <TextFieldMUI />
      </div>

      <div className="div_area">
        <h2>Material UI ToggleButtonGoup</h2>
        <ToggleButtonGoup />
      </div>

      <div className="div_area">
        <h2>Material UI Switch</h2>
        <SwitchMUI />
      </div>

      <div className="div_area">
        <h2>Material UI Ratings</h2>
        <RatingsMUI />
      </div>

      <div className="div_area">
        <h2>Material UI Slider</h2>
        <SliderMUI />
      </div>

      <div className="div_area">
        <h2>Material UI Floating Action Button</h2>
        <FloatingActionButtonMUI />
      </div>

      <div className="div_area">
        <h2>Loading Button</h2>
        <LoadingButtons />
      </div>

      <div className="div_area">
        <h2>Material UI Autocomplete</h2>
        <AutoCompleteMUI />
      </div>

      <div className="div_area">
        <h1>Example of Lifting State Up</h1>
        <Parent />
      </div>
    </div>
  );
}

export default App;
