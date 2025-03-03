import React, { Component } from 'react'
import ProductItem from "./ProductItem/ProductItem"
import "./MainItem.css"

export default class MainItem extends Component {
    constructor(props) {
        super(props)
        const data = this.props.data.map(elem => ({ 
            ...elem, 
            count: 1,
        }))
        this.state = {data}
    }

    plus(index) {
        this.setState(prevState => {
            const newData = prevState.data.map((elem, i) => 
                i === index ? { 
                    ...elem, 
                    count: ++elem.count
                } : elem
            )
            return {data: newData}
        })
    }

    minus(index) {
        this.setState(prevState => {
            const newData = prevState.data.map((elem, i) => 
                i === index && elem.count > 1 ? { 
                    ...elem,
                    count: --elem.count
                } : elem
            )
            return {data: newData}
        })
    }
    
    render() {
        return this.state.data.map((elem, index) => (
            <ProductItem
              key={index}
              image={elem.image}
              title={elem.title}
              price={elem.price}
              count={elem.count}
              rate={elem.rating.rate}
              category={elem.category}
              ratingCount={elem.rating.count}
              onPlus={() => this.plus(index)}
              onMinus={() => this.minus(index)}
            />
          ));
    }
}