import {useEffect, useState} from "react"

import iconABCD from "../img/abcd-icon.png";
import word from "../img/67px-Notepad_icon_small.svg.png";
import handle from "../img/handle.png"
import oldScroll from "../img/old-scroll.png"

function WordCounter() {
  const [inputValue, setInputValue]=useState("")
  const [letterLength, setLetterLength]=useState(0)
  const [wordLength, setLengthWord] = useState(0)
  const [paragraphLength, setParagraph] = useState(0)
  
  
  useEffect(()=>{
    const regexLetter = /^[a-zA-Z0-9]*$/
    const letterSplit = inputValue.split("")
    const letterValid= letterSplit.filter(item=>regexLetter.test(item))
    setLetterLength(letterValid.length)
  }, [letterLength, inputValue])

  useEffect(()=>{
    const wordValid= inputValue.split(" ")
    // console.log(wordValid)
    console.log(inputValue)
    setLengthWord(inputValue!==""?wordValid.length:0)
    
  }, [inputValue, wordLength])

  useEffect(()=>{
    // const regexParagraph=/ \b.*?[.?!](?=\s|$) /g
    const paragraphSplit = inputValue.replace(/\n$/gm, '').split(/\n/).length
    setParagraph(inputValue!==""?paragraphSplit:0)
    // const paragraphValid= paragraphSplit.filter(item=>regexParagraph.test(item))
  }, [inputValue])

  const handleInput=(e)=>{
    setInputValue(e.target.value)
  }

  return (
    <div className=" bg-gradient-to-r from-[#c6ffdd] via-[#fbd786] to-[#f7797d] min-h-[100vh]">
      <div className="flex h-12 pt-4 justify-center gap-2 mb-20">
        <img
          className="h-full object-cover w-auto"
          src={iconABCD}
          alt="icon"
        ></img>
        <h1 className="font-semibold text-xl">Word Counter</h1>
      </div>
      <div className=" grid grid-cols-3 max-w-6xl mx-auto justify-items-center mb-8">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] rounded-lg py-4 text-center text-lg text-white bg-gradient-to-tr from-[#c94b4b] to-[#4b134f]">
          <div className="h-5 flex justify-center gap-2 mb-5">
            <img className="" src={word} alt="icon"></img>
            <div>Word</div>
          </div>
          <span className="block">{wordLength}</span>
        </div>
        <div className="w-[90%] md:w-[60%] lg:w-[40%] rounded-lg py-4 text-center text-lg text-white bg-gradient-to-tr from-[#c94b4b] to-[#4b134f]">
          <div className="h-5 flex justify-center gap-2 mb-5">
            <img className="" src={handle} alt="icon"></img>
            <div>Letter</div>
          </div>
          <span className="block">{letterLength}</span>
        </div>
        <div className="w-[90%] md:w-[60%] lg:w-[40%] rounded-lg py-4 text-center text-lg text-white bg-gradient-to-tr from-[#c94b4b] to-[#4b134f]">
          <div className="h-5 flex justify-center gap-2 mb-5">
            <img className="w-7 h-7" src={oldScroll} alt="icon"></img>
            <div>Paragraph</div>
          </div>
          <span className="block">{paragraphLength}</span>
        </div>
      </div>
      <div className="w-3/4 mx-auto mb-7">
        <textarea placeholder="Enter/Paste Your Text Here" value={inputValue} onChange={handleInput} className="w-full h-80 p-4 rounded-xl border border-sky-200 focus:border-sky-600 outline-none" />
      </div>
      <div className="max-w-5xl mx-auto flex justify-center gap-20 px-3">
        <button onClick={()=>setInputValue(inputValue.toUpperCase())} className="border bg-[#5f1773] px-8 py-3 text-white font-bold rounded-2xl">Click to Uppercase</button>
        <button onClick={()=>setInputValue(inputValue.toLowerCase())} className="border bg-[#5f1773] px-8 py-3 text-white font-bold rounded-2xl">Click to Lowercase</button>

      </div>
    </div>
  );
}

export default WordCounter;
