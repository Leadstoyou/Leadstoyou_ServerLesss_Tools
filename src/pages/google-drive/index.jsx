import { useState } from "react";

const Index = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Submit</button>
    </div>
  );
};

export default Index;
