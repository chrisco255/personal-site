import Markdown from 'react-markdown';
import { Header, Container } from '../components';

import posts from '../posts';

const Post = ({ url }) => {
  let { content } = posts[url.query.id];

  return (
    <div>
      <Header />
      <Container>
        <Markdown source={content}/>
      </Container>
    </div>
  );
};



export default Post;