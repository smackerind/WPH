import { useState, useEffect } from 'react';
import type { PostData } from './post.type';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostCard = () => {
  const [post, setPost] = useState<PostData[] | null>([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error nih API nya');
        const data = await response.json();
        setPost(data);
      } catch (error: unknown) {
        console.error(
          error instanceof Error
            ? error.message
            : 'Ini juga error nih yang bikin'
        );
      }
    }
    fetchPost();
  }, []);

  console.log(post);
  return (
    <div>
      {post?.map((post) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            border: '1px solid black',
            margin: '20px',
            padding: '18px',
            borderRadius: '18px',
          }}
          key={post.id}
        >
          <div>
            <div
              className="profile"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'black',
                borderRadius: '360px',
              }}
            ></div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
              <img src="" alt="" style={{ width: '20px', height: '20px' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
