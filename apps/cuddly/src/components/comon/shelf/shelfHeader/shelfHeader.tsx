import * as React from 'react';
import SortContainer from '../sort/sortContainer';
interface Props {
  productsLength: number;
}

const ShelfHeader: React.FunctionComponent<Props> = (props) => {
  const { productsLength } = props;

  return (
    <div className="shelf-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found.</span>
      </small>
      <SortContainer />
    </div>
  );
};

export default ShelfHeader;
