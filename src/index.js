import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Book1 = {
  image: "https://rukminim1.flixcart.com/image/612/612/khxqt8w0-0/book/9/t/k/java-the-complete-reference-eleventh-edition-original-imafxuybqqhdthsc.jpeg?q=70",
  name: "Java the Complete Reference"
}

const Book2 = {
  image: "https://rukminim1.flixcart.com/image/416/416/kjbr8280-0/book/d/d/l/think-java-how-to-think-like-a-computer-scientist-original-imafyxhmzwmqhfby.jpeg?q=70",
  name: "Think Java How To Think Like A Computer Scientist - How to Think Like a Computer Scientist"
}

const Index = () => {
  return (
    <>
      <div><h1 className="textCenter"><u>Hello React !! ( Hyder version )</u></h1></div>
      <Student></Student>
      <Student />
      <div className='somedecorations'>
        <Books image={Book1.image} author={Book1.name} />
        <Books image={Book2.image} author={Book2.name}></Books>
      </div>
    </>
  );
}

let Student = () => {
  return (
    <h3>Yes, I am a student !!</h3>
  );
}

let Books = (pp) => {
  const { image, author } = pp;
  return (
    <>
      <img src={image} alt="Default image is not here" />
      <h3>{author}</h3>
    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));
