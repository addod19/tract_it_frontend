import React from 'react'
import { useSelector } from 'react-redux'

export const WaterList = () => {
  const waters = useSelector(state => state.water)

  const renderedWaters = waters.map(water => (
    <article key={water.id}>
      <h3>{water.amount}</h3>
      <p>{water.total}</p>
    </article>
  ))

  return (
    <section>
      <h2>Waters from store</h2>
      {renderedWaters}
    </section>
  )
}