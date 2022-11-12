import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BookStock } from './BookStock'; // named import , {} mandatory , name can't be changed
import Books from './Books'; // default import , {} is strictly not allowed , name can be changed






const names = ["Navin", "Sanjeevan", "Hyder"];

const namesThroughMap = names.map((nm) => {
  return <h1>{nm}</h1>
})

// const BookStockThroughMap = BookStock.map((book) => {
//   const { img, title, author } = book;
//   return <Books book={book}></Books>
// })

const Index = () => {
  return (
    <>
      <section className='bookList'>{namesThroughMap}</section>
      {/* For this no key has been passed, so warning comes , but for the below section there is no warning because I have used key there */}
      {/* Array can be rendered directly */}
      <section className='bookList'>{BookStock.map((book) => {
        const { img, title, author } = book; // what ever the type u mentioned here, #
        // return <Books key={book.id} book={book}></Books>
        return <Books key={book.id} {...book}></Books>
      })}
      </section>
      {/* Array of objects, directly can not be rendered directly */}
    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));
