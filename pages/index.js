import { Container, Header } from '../components';
import Link from 'next/link';
import Markdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';
import posts from '../posts';
import { fonts, colors } from '../styles';

const PostSummary = ({ title, created, summary, index }) => (
  <div className="container">
    <h1><Link prefetch href={{ pathname: 'post', query: { id: index }}}><a>{title}</a></Link></h1>
    <h4>{created}</h4>
    <p>{summary} <Link prefetch href={{ pathname: 'post', query: { id: index }}}><a className="arrow">==></a></Link></p>
    <style jsx>{`
      .container {
        margin-bottom: 64px;
      }
      h1 a {
        color: ${colors.primary};
      }
      a:hover {
        cursor: pointer;
      }
      .arrow {
        margin-left: 5px;
      }
    `}</style>
  </div>
);

const Index = () => (
  <div>
    <Header />
    <Container>
      {
        posts.map(({ data }, index) => <PostSummary key={index} index={index} {...data} />)
      }
    </Container>
    <style jsx>{`

    `}</style>
  </div>
);

export default Index
