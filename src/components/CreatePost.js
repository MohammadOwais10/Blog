import { useState } from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';

function CreatePost() {
  // const [title, setTitle] = useState();
  // const [subTitle, setSubTitle] = useState();
  // const [content, setContent] = useState();
  // below code we use hooks and above without hooks
  const title = useFormInput('');
  const subTitle= useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    //these three line show code run in console section of inspect
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);
    
    //here firestore use for create section of title,content,subTitle,createdDate  and also store their Data in firebase
    firestore.collection('posts').add({
      // title,
      // content,
      // subTitle,
      // below code we use hooks and above without hooks
      title:title.value,
      content:content.value,
      subTitle:subTitle.value,
      createdAt:new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} />   ---->here we write code without hooks and below line same but with hoooks */}
          <input {...title}/>
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          {/* <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)}  ---->here we write code without hooks and below line same but with hoooks/>  */}
        <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* <textarea value={content} onChange={(e) => setContent(e.target.value)} /> ---->here we write code without hooks and below line same but with hoooks */}
          < textarea {...content} />
        </div>

        <button className="create-post-btn">Create Post</button>

      </form>
    </div>
  );
}

export default CreatePost;