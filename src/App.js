import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import Apartments from "./components/Apartments";
import Appbar from "./components/Appbar";

function App() {
  return (
    <>
      <Appbar />
      <Apartments />
    </>
  );
}

export default App;
