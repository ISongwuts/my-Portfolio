import React, { useState, useEffect } from "react";
import "../style/TypingText.css";
import Typist from "react-typist";


function TypingText() {
  const [count, setCount] = useState(1);
  const [count_2, setCount_2] = useState(1);

  useEffect(() => {
    setCount(1);
    setCount_2(1);
  }, [count, count_2]);

  return (
    <div className="Typing-container">
      <div className="wrap-content-1">
        <span className="content-1">
          &lt;\
          {count ? (
            <Typist
              className="inline"
              avgTypingDelay={80}
              onTypingDone={() => setCount(0)}
            >
              <span>Welcome to my personal website.</span>
              <Typist.Backspace count={35} delay={800} />
              <span>Never give up.</span>
              <Typist.Backspace count={20} delay={800} />
              <span>Keep coding.</span>
              <Typist.Backspace count={20} delay={800} />
              <span>You can do it.</span>
              <Typist.Backspace count={20} delay={800} />
            </Typist>
          ) : (
            ""
          )}
          &gt;
        </span>
      </div>
      <div className="wrap-content-2">
        <span className="content-2">
          Hello!, I'm &nbsp;
          {count_2 ? (
            <Typist
              className="inline"
              avgTypingDelay={80}
              onTypingDone={() => setCount_2(0)}
            >
              <span className="highlight">Songwut Malisri</span>
              <Typist.Backspace count={35} delay={800} />
              <span className="highlight">ICE</span>
              <Typist.Backspace count={3} delay={800} />
            </Typist>
          ) : (
            ""
          )}
        </span>
        <span className="wave">👋</span>
      </div>
      <div className="wrap-content-3">
        <p className="content-3">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;This website was developed for the purpose of introducing myself
          to my visitors.
          <br /> After visiting my site, I hope visitors will gain a better
          understanding of who I am.
        </p>
      </div>
    </div>
  );
}

export default TypingText;
