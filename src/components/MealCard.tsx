import React from 'react'
import { Meal } from '../store/useStore'

const MealCard = ({meal}: {meal: Meal}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {meal.strMeal}
    </h2>
  </div>
</div>
  )
}

export default MealCard