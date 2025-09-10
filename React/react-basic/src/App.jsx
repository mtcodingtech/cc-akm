import { Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./components/BookShop/Books";
import Input from "./components/CustomHooks/Input";
import HOC from "./components/HOC/HOC";
import Test from "./components/HOC/Test";
import ComponentA from "./components/PropsDrilling/ComponentA";
import APIData from "./components/UseEffect/APIData";
import Clock from "./components/UseEffect/Clock";
import SimpleUseEffect from "./components/UseEffect/SimpleUseEffect";
import VideoPlayer from "./components/UseRef/VideoPlayer";
import CRUD from "./components/UseState/CRUD";
import DynamicStyle from "./components/UseState/DynamicStyle";
import InputFormUseState from "./components/UseState/InputFormUseState";
import InputWithUseState from "./components/UseState/InputWithUseState";
import SimpleUseState from "./components/UseState/SimpleUseState";
import ThemeContextProvider from "./context/ThemeContext";
import Hooks from "./pages/Hooks";
import About from "./pages/About";
import Nav from "./components/Nav";
import HookDetail from "./pages/HookDetail";

function App() {
  return (
    <>
      {/* <SimpleUseState /> */}
      {/* <InputWithUseState /> */}
      {/* <InputFormUseState /> */}
      {/* <DynamicStyle /> */}
      {/* <CRUD /> */}
      {/* <SimpleUseEffect /> */}
      {/* <Clock /> */}
      {/* <APIData /> */}
      {/* <VideoPlayer /> */}
      {/* <ComponentA /> */}
      {/* <Input /> */}
      {/* <HOC />
      <Test /> */}
      <ThemeContextProvider>
        {/* <Books />
        <ComponentA />  */}
        <Nav />
        <Routes>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/hooks/:id" element={<HookDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
