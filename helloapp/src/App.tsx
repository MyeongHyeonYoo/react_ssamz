import React from 'react'
import CountryList from './CountryList';

const App = () => {
  // let msg = "World";
  // let msg = "<i>World</i>";
  let msg = (<i>World</i>);
  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y} 
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Hello {msg}!</h2>

      {/* HTML 마크업 형태의 값을 보간하는 방법 */}
      {/* <h2>Hello <span dangerouslySetInnerHTML={{__html: msg }} /></h2> */}
      <hr className="dash-style" />
      {addResult(4, 3)}
      <CountryList />
    </div>
  );
};

export default App;