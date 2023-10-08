import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg'
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { useState, useRef } from "react";
import { sendMsgToOpenAI } from './openai';


function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
    text: "Hi! I am ChatGPT, a state-of-art language model developed by Faith Ujunwa",
    isBot: true,
  }
]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([...messages,
    {text: input, isBot: false},
    {text: res, isBot: true}
    ])
  }

  return (
    <div className='App'>
      <div className='sideBar'>
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt='Logo' className='logo' /> <span className="brand">ChatGPT</span> </div>
            <button className="midBtn"><img src={addBtn} alt="new chat" className='addBtn' />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is programming?</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
            </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className='listItemsImg' />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className='listItemsImg' />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className='listItemsImg' />Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
     
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
            <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="User Icon" /> <p className="txt">{message.text}</p>
          </div>
          )}
          <div ref={msgEnd} />
        </div>
        <div className="chatFotter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onChange={(e) => {setInput(e.target.value)}} /> <button className="send" onClick={handleSend}> <img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  )
}

export default App;
     {/* <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita sunt laboriosam amet molestiae, totam eligendi obcaecati voluptatum repellendus tenetur.</p>
          </div> */}
          {/* <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /> <p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat ad aliquam non similique optio quod? Tempora nemo, voluptatibus voluptates corrupti aspernatur sint repudiandae quibusdam exercitationem cum delectus aliquam alias culpa praesentium esse blanditiis debitis sed incidunt quod impedit, dolore vero! Nobis tempora illum, cum asperiores, quos ducimus excepturi inventore molestias recusandae tempore accusamus rem. Impedit sint tempora dignissimos doloremque? Quo fugit maiores corporis deleniti, vitae eaque alias exercitationem sapiente possimus eveniet dolore qui iure et blanditiis totam. Eligendi ut voluptas eum accusantium eveniet distinctio, rerum amet natus sequi expedita repudiandae, ipsam magni voluptates delectus sunt minima eaque vero quaerat?</p>
          </div> */}