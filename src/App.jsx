import 'tailwindcss/tailwind.css';
import 'flowbite';
import 'daisyui';

import NavFlowbite from "./components/NavFlowbite";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <NavFlowbite/>
    <NavbarComponent/>
    <Home/>

    </div>

  )
}