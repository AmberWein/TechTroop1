import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleFruitChange = (e) => {
    const newFruit = e.target.value;
    setFruit(newFruit);
    console.log(`${name} selected ${newFruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={handleFruitChange}
        value={fruit}
      >
        <option value="">Fruits</option>
        <option value="Mango">Mango</option>
        <option value="Kiwi">Kiwi</option>
        <option value="Banana">Banana</option>
      </select>
    </div>
  );
};

export default Exercise2;