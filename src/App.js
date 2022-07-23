import DemoClass from "./Components/DemoClass";
import DemoFunction from "./Components/DemoFunction";
import Home from "./Components/Home/Home";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapState from "./State/BaiTapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";


//Component 
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <p className="color-red">App</p>
      <StyleRender /> */}
      {/* <BaiTapState /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderMap /> */}
      <DemoProps />
    </div>
  );
}

export default App;
