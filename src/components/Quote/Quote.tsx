import React, {useCallback, useEffect, useState} from 'react';
import './Quote.css'
import {QuoteInt, QuotesList} from "../../types";
import axiosApi from "../../axiosApi";
import {Link} from "react-router-dom";
import NavMenu from "../../containers/NavMenu/NavMenu";

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
    <div className="main-content">
      <div>
        <NavMenu/>
      </div>
        <div> {quotes.map(quote => (
           <div key={quote.id} className='quote-card'>
             <div>{quote.text}
               <p> © <b>{quote.author}</b> </p>
             </div>
             <div className="buttons">
               <Link to={'edit-quote/' + quote.id} >Edit</Link>
               <button>Delete</button>
             </div>
           </div>
      ))}
        </div>
    </div>


  );
};

export default Quote;