import { useState } from "react";
import { transferDriveUrlToText, transferListDriveUrlToText } from "../../utils/getText";

const Index = () => {
  const [text, setText] = useState("");
  const [arrayText, setArrayText] = useState();
  const handleSubmit = async () => {
    const audioText = await transferDriveUrlToText(text);
    alert(audioText);
  };
  const handleSubmitListUrl = async () => {
    const parsedArray = JSON.parse(arrayText);
    const audioText = await transferListDriveUrlToText(parsedArray);
    alert(audioText);
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
