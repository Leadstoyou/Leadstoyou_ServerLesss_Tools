import { useState } from "react";
import { transferDriveUrlToText } from "../../utils/getText";

const Index = () => {
  const [text, setText] = useState("");
  const [arrayText, setArrayText] = useState();
  const handleSubmit = async () => {
    const audioText = await transferDriveUrlToText(text);
    alert(audioText);
  };
  const handleSubmitListUrl = async () => {
    alert(typeof arrayText);
    alert(Array.isArray(arrayText));
    const parsedArray = JSON.parse(arrayText);
    alert(parsedArray);
    alert(Array.isArray(parsedArray));
    // const audioText = await transferDriveUrlToText(text);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <input
        type="text"
        value={arrayText}
        onChange={(e) => {
          setArrayText(e.target.value);
        }}
      />
      <button onClick={handleSubmitListUrl}>Submit</button>
    </div>
  );
};

export default Index;
