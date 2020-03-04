import React from 'react';

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div className="shopping-list">
          <h1>ProductsList for {this.props.name}</h1>
          <ul>
            <li>p1</li>
            <li>p2</li>
            <li>p3</li>
          </ul>
        </div>
      );
    }
  }

export default ProductsList;