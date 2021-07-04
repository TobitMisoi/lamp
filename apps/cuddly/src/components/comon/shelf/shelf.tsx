import React from 'react';

interface State {
  selectedSizes: [];
  allSelected: boolean;
}

class Shelf extends React.Component<State> {
  public render(): React.ReactNode {
    return (
      <>
        <div className="shelf"></div>
        {/* <FilterContainer /> */}
        <div className="shelf-container">{/* <ProductView props /> */}</div>
      </>
    );
  }
}
