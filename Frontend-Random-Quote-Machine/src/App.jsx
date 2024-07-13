import React, { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    const { content, author } = response.data;
    setQuote(content);
    setAuthor(author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} />
    </div>
  );
};

export default App;
