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

export default Container;