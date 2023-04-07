import React from "react";
import "../../App.css"

const Chatgpt = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
    return (
        <div className="gpt">
            {resetBackground}
            <h1>ChatGPT is Not Here to Take Your Job, Yet</h1>
            <div className="gpt-content">
                <h2>What is ChatGPT?</h2>
                <h3 className="quote">
                    "ChatGPT is a large language model developed by OpenAI, 
                    designed to answer natural language questions and generate human-like responses. 
                    It uses deep learning techniques such as transformer-based neural networks to 
                    understand and generate text. ChatGPT has been trained on a massive corpus of 
                    text data and can generate responses on a wide range of topics, from general 
                    knowledge and current events to personal advice and creative writing prompts. As 
                    a language model, ChatGPT can be used for a variety of applications, including 
                    chatbots, question answering systems, and text generation tools."</h3>
                <h3 className="quote"><span className="quote-attr"> -ChatGPT when asked to define itself.</span></h3>
                <p>
                    ChatGPT is a chatbot that mimics human response.
                </p>
                <h2>Can it code?</h2>
                <p>Yes and no. It can cobble together some code from various repositories it has been trained on. That
                    dosen't mean it is capable of creating code, or solving a problem. You can ask it to solve questions
                    it has seen before and it will sometimes produce a viable result. Take FizzBuzz for instance.
                </p>
                <h2>Is it going to replace developers?</h2>
                <p>
                    No. ChatGPT and AI technology like it are not capable of replacing human developers or computer scientists
                    in their current state and it is unlikely they will be capable of doing so for some time.
                </p>
                <h3>Why not?</h3>
                <p>
                    ChatGPT has no understanding of computer science. It does not understand code, programming, or theory. 
                    It regurgitates information that it has been fed. It's like someone that crammed for a multiple choice history test. 
                    They retain trivia, peices of information. They can even string together some of that information coherently sometimes. 
                    That does not mean they truly understand the topic, let alone make them a historian. History is largely about drawing connections. 
                    Having exact names and dates memorized is not all that important. What is important is being able to contextualize an event, 
                    a culture, a technology, or whatever specific subject one is studying. This same concept applies here, to AI language models like 
                    ChatGPT. It can spit out things it has seen, but it does not understand them. It can't create a new idea or innovate on what exists. 
                    It simply knows what order words or code typically appear in.
                </p>
                <h3 className="quote">
                    "As an AI language model, I am capable of understanding a wide range of topics, as long as they are presented to me in natural language. 
                    However, my understanding is based on patterns and associations in the data I was trained on, rather than true comprehension like a human 
                    being. While I can provide information and answers based on that training, I do not have true comprehension or consciousness."
                </h3>
                <h3 className="quote"><span className="quote-attr"> -ChatGPT when asked if it is capable of understanding a topic.</span></h3>
                <h2>What is the future of this technology?</h2>
                <p>
                    ChatGPT can be a useful tool, especially for people that are trying to learn something.
                </p>
            </div>
        </div>
    )
}

export default Chatgpt;