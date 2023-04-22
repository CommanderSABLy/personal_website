import React from "react";
import "../../App.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const strings = require("./chatgpt.json")

const Chatgpt = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
    return (
        <div className="gpt">
            {resetBackground()}
            <h1>ChatGPT is Not Here to Take Your Job, Yet</h1>
            <div className="gpt-content">
                <h2>What is ChatGPT?</h2>
                <h3 className="quote">
                    "{strings.what_is_gpt_quote}"</h3>
                <h3 className="quote"><span className="quote-attr"> -ChatGPT when asked to define itself.</span></h3>
                <p>
                    {strings.what_is_gpt}
                </p>
                <h2>Can it code?</h2>
                <p>
                    {strings.can_it_code}
                </p>
                <span className="content-container"><SyntaxHighlighter language="python" style={dark}>{strings.hardcoded}</SyntaxHighlighter></span>
                <p>{strings.cic2}</p>
                <span className="content-container"><SyntaxHighlighter language="python" style={dark}>{strings.improved}</SyntaxHighlighter></span>
                <p>{strings.cic3}</p>
                <span className="content-container"><SyntaxHighlighter language="python" style={dark}>{strings.improved_v2}</SyntaxHighlighter></span>
                <p>{strings.cic4}</p>
                <h2>Is it going to replace developers?</h2>
                <p>
                    {strings.replace_dev}
                </p>
                <h3>Why not?</h3>
                <p>
                    {strings.why1}
                </p>
                <h3 className="quote">
                    "{strings.why_quote}"
                </h3>
                <h3 className="quote"><span className="quote-attr"> -ChatGPT when asked if it is capable of understanding a topic.</span></h3>
                <p>
                    {strings.why2}
                </p>
                <span className="content-container"><SyntaxHighlighter language="python" style={dark}>{strings.palindrome}</SyntaxHighlighter></span>
                <p>{strings.why3}</p>
                <span className="content-container"><SyntaxHighlighter language="python" style={dark}>{strings.balancedSubstring}</SyntaxHighlighter></span>
                <p>{strings.why4}</p>
                <p>{strings.why5}</p>
                <img className="gpt-img" src="image/gpt_chess_move.png" alt="The state of the chess board" draggable="false" />
                <p>{strings.why6}</p>
                <img className="gpt-img" src="image/gpt_chess.jpg" alt="All the attempts from ChatGPT to make a legal move" draggable="false" />
                <h2>What is the future of this technology?</h2>
                <p>
                    {strings.future}
                </p>
                <h3>More on ChatGPT and Developers</h3>
                <p>{strings.video}</p>
                <div className="video-container">
                    <div className="videoWrapper">
                        <div className="video">
                            <iframe src="https://www.youtube.com/embed/3HoEJNyghFU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="videoWrapper">
                        <div className="video">
                        <iframe src="https://www.youtube.com/embed/tqN5NKHT7N0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Chatgpt;