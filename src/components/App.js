import {Routes , Route } from 'react-router-dom';     /****In update "Switch" change into "Routes" */
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
// import {Navbar,Home,CreatePost,PostDetail} from './';   /******This format not support in Update  */
  
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />  {/*in Update "component" change into "elememt"  , we cant write name in simple curly bracket but also use  "<>" this like that "{<Home>}*/}
        <Route exact path='/post/:postId' element={<PostDetail/>} />
        <Route exact path='/create-post' element={<CreatePost/>} />
      </Routes>
    </div>
  );
}


export default App;