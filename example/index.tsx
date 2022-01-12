import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
ProductCard,
ProductTitle,
ProductButtons,
ProductButtonsLite,
} from '../.';

const product = {
  id: "1",
  title: "Taza Developer",
  //img: "./coffee-mug.png",
};


const App = () => {
  return (
    <>
      <ProductCard 
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({count, isMaxCountReached, reset, increaseBy, }) => (
            <>
              <ProductImage />
              <ProductTitle />
              {/* <ProductButtons className="custom-buttons"/> */}
              <ProductButtonsLite 
                counter={count} 
                isMaxCountReached={isMaxCountReached} 
                increaseBy={() => increaseBy(+2)}
                decreaseBy={() => increaseBy(-2)}
                reset={reset}
              />

            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
