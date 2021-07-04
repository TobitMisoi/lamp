import * as React from 'react';

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
    </div>
  );
};

export default ShelfHeader;
