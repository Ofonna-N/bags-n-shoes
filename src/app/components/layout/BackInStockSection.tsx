import React from "react";
import Container from "../containers/Container";

const BackInStockSection = () => {
  return (
    <Container>
      <div className="mb-[3rem]">
        <h3 className="text-[2rem] md:text-[2.4rem]">Back in stock!</h3>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="col-span-2 md:row-span-2 md:col-span-2">
            <div className="max-w-[100rem] bg-blue-950 justify-self-center">
              <div className="aspect-square w-40rem">img</div>
              <p>Bags</p>
            </div>
          </div>
          <div>
            <div className="max-w-[40rem] bg-blue-900 justify-self-center">
              <div className="aspect-square w-20rem">img</div>
              <p>Name</p>
              <p>Price</p>
            </div>
          </div>
          <div>
            <div className="max-w-[40rem] bg-blue-800 justify-self-center">
              <div className="aspect-square w-20rem">img</div>
              <p>Shoes</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BackInStockSection;
