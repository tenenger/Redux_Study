import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // router사용법: router를 최상위, routes를 그다음, route를 하위 태그로 작성한다.
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* (:)를 사용하여 가변적인 값에 따라 Route가 정해진다. */}
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
