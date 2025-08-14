// import React, { useReducer } from "react";
// import cartReducer, { initialState } from './reducers/cartReducer';
// import "./App.css";

// export default function App() {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <div>
//       <h1>Shopping cart</h1>

//       <button
//         onClick={() =>
//           dispatch({ type: "ADD_ITEM", data: { name: `Item ${state.items.length + 1}`, price: 10 } })
//         }
//       >
//         Add item
//       </button>

//       <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
//         Clear cart
//       </button>

//       <h2>
//         ({state.itemCount} items) - total: ${state.total}
//       </h2>

//       <ul>
//         {state.items.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price}{" "}
//             <button onClick={() => dispatch({ type: "REMOVE_ITEM", data: item.id })}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>

//       <h3>State:</h3>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </div>
//   );
// }

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

function Layout() {
  const { theme } = useTheme();
  const bgColor = theme === "light" ? "#ffffff" : "#1a1a1a";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div style={{ backgroundColor: bgColor, color, minHeight: "100vh", padding: "20px" }}>
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <Navigation />
      <Controls />
    </header>
  );
}

function Navigation() {
  const { fontSize } = useTheme();
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <nav style={{ fontSize: size, marginBottom: "10px" }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls() {
  return (
    <div>
      <ThemeToggle />
      <FontControl />
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function FontControl() {
  const { fontSize, setFontSize } = useTheme();
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content() {
  const { fontSize } = useTheme();
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <main style={{ fontSize: size }}>
      <Article />
      <Sidebar />
    </main>
  );
}

function Article() {
  const { theme } = useTheme();
  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. No props are passed down!</p>
    </article>
  );
}

function Sidebar() {
  const { theme } = useTheme();
  return (
    <aside style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}

export default App;