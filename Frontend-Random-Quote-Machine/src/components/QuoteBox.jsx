import React from "react";

const QuoteBox = ({ quote, author, fetchQuote }) => {
  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

  return (
    <div id="quote-box" className="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer">
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;
