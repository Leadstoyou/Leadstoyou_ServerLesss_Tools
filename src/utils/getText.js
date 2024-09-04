// npm install assemblyai

import { AssemblyAI } from "assemblyai";
const client = new AssemblyAI({
  apiKey: "4736692a3325492f96017fcf0ce504fd",
});

const urlMp3Driver = (input) => {
  const regex = /\/file\/d\/(.*?)\//;
  const match = input.match(regex);

  let id;
  if (match && match[1]) {
    id = match[1];
  } else {
    id = input;
  }

  return `https://drive.usercontent.google.com/download?id=${id}&export=download&authuser=0&confirm=t&uuid=42287767-eb48-4f61-be51-941a919b4511&at=APZUnTX-19sKwJITW3WjW6JO65D6:1723819143114`;
};

export const transferDriveUrlToText = async (url) => {
  const data = {
    audio_url: urlMp3Driver(url),

    auto_highlights: true,
  };
  const transcript = await client.transcripts.create(data);
  return transcript.text;
};
export const transferListDriveUrlToText = async (arr) => {
  console.log("🚀 ~ transferListDriveUrlToText ~ arr:", arr);
  const result = [];
  for (const e of arr) {
    try {
      const audio = await client.transcripts.create({
        audio_url: urlMp3Driver(e),
        auto_highlights: true,
      });
      result.push(audio.text)
    } catch (error) {
      console.error(`Error processing ${e}:`, error);
    }
  }
  return result;
};

// const runListLink = async (arr) => {
//     for (const e of arr) {
//       try {
//         const a = await client.transcripts.create({
//           audio_url: urlMp3Driver(e),
//           auto_highlights: true,
//         });
//         console.log(a.text);
//       } catch (error) {
//         console.error(`Error processing ${e}:`, error);
//       }
//     }
//   };
  
//   const arr = [
    // "1Bq7Iy3k92k7YTNQj-vBSd1MEIrkjFEQw",
    // "19EsaeupHFisGZGttz4h20M3iQZrzgXKJ",
    // "1XHShOO9AmuGhsGG3PomQk15_vYu3BIPt",
    // "1sM5TuV5jTv-NEn77mEXJdq_mwpffllF2",
    // "1IPkqIqx29Ns3-2BRfMGiV17zDuZ_7J7P",
    // "1fpVzfr-MqmirEa8tN15npgHUMjN42X_w",
    // "1ai5kVSsSqAcIsMSv4fTnCydYESUYdL_O",
    // "1rtgPgnnMSnGAB_yVWAnS69RyG-yzxVrU",
    // "16DyczuR6tmVdZlid571IECN6cKrCsEJn",
    // "1T03af1cp2kVqPKUwiukxJkRjMWamb-6c",
    // "1zvGo7-H17zEMjYHpgtFP3045g-GIW3uS",
    // "1_oEqO2komj_9ouIuyAf07lp1YeNSUn5U",
    // "1WRu3zwg8nSXSi8qq56IjgpCqlpegDcbT",
    // "1nDcheJjJfsWLSwo8E5TXTj1emxED4Un0",
    // "1zo508w4GvABwzpwFX2ZWEgpESlU47P_j",
    // "1B0u_LBWfYQb1sNxXT7b1KUX0_HAaiV9v",
    // "11e4CDksxQ5O4WyiLCfGh70FwoK3dtf0j",
    // "1aC_1RG0-Ac8GwNzZiWS7LzfEuclxAJxX",
    // "1XZMZH1yH91-ifC28SYFJpckqtmV2gSFD",
    // "1nLeROMyQNsVj2P6817uwmUjOuiFNl5gO",
    // "1Ysq6CvTnc1loRitAb7MkM2-VlNXpLX9j",
    // "1uuDU9cEnmqc3si3WsitQlekmpPmSmVvN",
    // "1MtLirY8mn8x4sO2lN6CQ4yQOBp2bIr25"
//   ];
// const run = async () => {
// const transcript = await client.transcripts.create(data);
// console.log(transcript.text);
//   runListLink(arr);
// for (let result of transcript.auto_highlights_result.results) {
//   console.log(
//     `Highlight: ${result.text}, Count: ${result.count}, Rank: ${result.rank}`
//   );
// }
// };

// run();

// const fs = require("fs");
// const axios = require("axios");
// const { AssemblyAI } = require("assemblyai");

// const client = new AssemblyAI({
//   apiKey: "4736692a3325492f96017fcf0ce504fd",
// });

// // Upload the local file to get a URL
// const uploadFile = async (filePath) => {
//   const fileData = fs.readFileSync(filePath);
//   console.log(client.ge)
//   const response = await axios.post(
//     "https://api.assemblyai.com/v2/upload",
//     fileData,
//     {
//       headers: {
//         "authorization": "4736692a3325492f96017fcf0ce504fd",
//         "content-type": "application/octet-stream",
//       },
//     }
//   );
//   return response.data.upload_url;
// };

// const run = async () => {
//   try {
//     const filePath = "D:\\demo.mp3";
//     const audio_url = await uploadFile(filePath);

//     const data = {
//       audio_url,
//       auto_highlights: true,
//     };

//     const transcript = await client.transcripts.create(data);
//     console.log(transcript.text);

//     for (let result of transcript.auto_highlights_result.results) {
//       console.log(
//         `Highlight: ${result.text}, Count: ${result.count}, Rank: ${result.rank}`
//       );
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// run();
