import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Radium from 'radium';
import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.PostDetail}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  PostDetail:{
    border:'1px solid #e1e1e1',
    padding:5,
    paddingTop:10,
    borderRadius:5,

    '@media(max-width:720px)':{
      color:'pink',
    },
  },
  heading: {
    textAlign: 'center',
    margin:0,
    color: 'yellow',
    ':hover':{
      color: 'red',
    },
  },
};
