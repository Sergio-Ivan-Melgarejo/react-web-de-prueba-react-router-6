import React from 'react'
import { Link } from 'react-router-dom'
import "./category.css"

const Category = (props) => {
  return (
    <section className='category'>
      <h2 className='title'>Products</h2>
      {props.products.map(product => (
        <Link className='card'
          key={product}
          to={`/products/${product}`} >
          <figure>
            <img className="img" src={`https://api.lorem.space/image/${product}?w=350&h=250`} alt={product} ></img>
            <figcaption className='title'>{product}</figcaption>
          </figure>
        </Link>
      ))}
    </section>
  )
}

export default Category