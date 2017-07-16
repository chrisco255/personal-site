import Header from '../components/header';
import Link from 'next/link';
import Markdown from 'react-markdown';
import input from '../markdown/test';

const fonts = {
  primary: 'Lora, Times, serif',
  secondary: ''
};

const colors = {
  primary: '#5DCEBA',
  secondary: '#ED640B',
  tertiary: '#E0B944',
  complementary: '#5B3214',
};

const Container = ({ children }) => (
  <div className="outer">
    <div className="inner">
      { children }
    </div>
    <style jsx>{`
      .outer {
        display: flex;
        justify-content: center;
      }
      .inner {
        margin: 0 16px;
        max-width: 600px;
      }
      @media (min-width: 600px) {
        .inner {
          width: 600px;
        }
      }
    `}</style>
  </div>
);

const Index = () => (
  <div>
    <Header />
    <Container>
      <h1>Chris Cordle</h1>
      <p>
        What? Is this what font looks like? Lorem ipsum. I think when it's typed
        out and covers more lines. It looks better. Don't you think? I like this
        formatting it seems like a good fit for a blog.
      </p>
    </Container>
    <Container>
      <Markdown source={input} />
    </Container>
    <style jsx>{`

    `}</style>
  </div>
);

export default Index
