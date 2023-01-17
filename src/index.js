import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter as
    Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink
} from 'react-router-dom'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Home />
//   </Router>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/souvik" element={<h3>Just trial, picture is left</h3>} />
//     </Routes>
//   </Router>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/myapp" element={<MyApp />} /> */}
      <Route path="/myapp" element={<Navigate replace to="/navigatedcomponent" />} />

      <Route path="/learn" element={<Learn />} >
        <Route path="course" element={<Course />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundle" element={<Bundle />} />
      </Route>

      <Route path="/navigatedcomponent" element={<NavigatedComponent />} />
    </Routes>
  </Router>
);



//-------------------------

// const Home = () => {
//   return (
//     <>
//       <div>
//         <h1 style={{ textAlign: 'center' }}>React routing</h1>
//       </div>
//     </>
//   )
// }

// Bro !! Hoisting doesn't work for Arrow functions

//--------------------------

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>React routing</h1>
      </div>
    </>
  )
}


function MyApp() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>It is my App</h1>
      </div>
    </>
  )
}


function NavigatedComponent() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>I am in navigated page</h1>
      </div>
    </>
  )
}


function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/course">courses</Link> |
      <Link className="btn btn-primary" to="/learn/bundle">bundles</Link>
      <Outlet />
    </div>
  )
}


function Course() {
  const courseList = ["Java", "Javascript", "React", "BlockChain"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1>Course list</h1>
      <h4>Course Card</h4>
      <p>
        More list
      </p>
      <NavLink to={`/learn/course/${randomCourseName}`}>{randomCourseName}</NavLink>
      <NavLink className="btn btn-warning" to={`/learn/course/price`}>Price</NavLink>
      <Outlet />
    </div>
  )
}


function Bundle() {
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle Card</h4>
    </div>
  )
}


function CourseId() {
  const { courseid } = useParams()
  return (
    <div>
      <h1>URL Param is: {courseid}</h1>

    </div>
  )
}