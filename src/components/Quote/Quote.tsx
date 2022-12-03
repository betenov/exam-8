import React, {useCallback, useEffect, useState} from 'react';
import './Quote.css'
import {QuoteInt, QuotesList} from "../../types";
import axiosApi from "../../axiosApi";

const Quote = () => {
  const [quotes,setQuotes] = useState<QuoteInt[]>([])

  const fetchQuote = useCallback( async () => {
    try{
      const quotesResponse = await axiosApi.get<QuotesList> ('/quotes.json');
      const qoutes1 =  Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote
      });
      setQuotes(qoutes1)
    }finally {

    }
  },[]);
  useEffect(() => {
    void  fetchQuote()

  },[fetchQuote])



  return (
        <div>{quotes.map(quote => (
           <div className='quote-card'>
             <p>{quote.text}
               <p> © <b>{quote.author}</b> </p>
             </p>
             <div className="buttons">
               <button>Edit</button>
               <button>Delete</button>
             </div>
           </div>
      ))}</div>


  );
};

export default Quote;