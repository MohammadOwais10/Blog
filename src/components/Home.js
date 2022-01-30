import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import styled from 'styled-components';

//Styled Components
const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;
const PostSubTitle = styled.p `
  font-size: 13px;
`;

//using Styled Components we nested, hover,media in only one component
const Post=styled.div `
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;
  
  &:hover{
    border:3px solid green;
    color: #2196f3;
  }
  
  h3{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

  a{
    text-decoration: none;
  }

  @media (max-width:800px){
    border: 1px solid black;
  }
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts',posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <BlogHeading >React Blog</BlogHeading>  {/**Styled Components here we use */}
      <div id="blog-by">Owais</div>
      {posts.map((post, index) => (
        <Post className="post" key={`post-${index}`}>   {/**Styled Components here we use for multi change */}
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subTitle}</PostSubTitle>   {/**Styled Components here we use */}
        </Post>
      ))}
    </div>
  );
}

export default Home;
  
// Inline styling CSS
const styles ={
  heading:{
    marginTop:30,
    fontSize:56,
  },
};