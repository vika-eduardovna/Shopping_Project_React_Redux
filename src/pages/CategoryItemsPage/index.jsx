import React from 'react'
import s from './style.module.sass'
import ProductContainer from '../../components/ProductContainer'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sort_products_action } from '../../store/reducer/productsReducer'


export default function CategoryItemsPage() {
  const {category} = useParams();
  const dispatch = useDispatch();
  const sortOnChange = e => {
    const value = e.target.value;
    dispatch(sort_products_action(value))
  }
  return (
    <section className='wrapper'>
      <h3 className={s.header}>{category}</h3>
      <div className={s.sorting_container}>
        <div className={s.price_box}>
          <span className={s.price}>Price</span>
          <input type="number" name="from" placeholder='from' />
          <input type="number" name="to" placeholder='to' />
        </div>

        <div className={s.discount_box}>
          <span className={s.price}>Discount %</span>
          <input type="checkbox" name="discount" />
        </div>

        <div className={s.sort_by}>
          <span className={s.price}>Sort by:</span>
          <select defaultValue={'DEFAULT'} onChange={sortOnChange}>
            <option value="DEFAULT" disabled>None</option>
            <option value="title">Name</option>
            <option value="price">Price (high - low)</option>
          </select>
        </div>
      </div>
      <ProductContainer/>
    </section>
  )
}
