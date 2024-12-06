import React, { useEffect } from 'react'
import { useStore } from '../store/useStore'
import MealCard from './MealCard';

const Meals = () => {

    const {meals, setMeals, searchFood} = useStore();

    useEffect(() => {
        (async function (){
            const res: Response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
            const data = await res.json();
            setMeals(data.meals);
        }())
    }, [])

  return (
    <div className='flex flex-col items-center justify-center mt-[4rem]'>

        <h1 className='text-[3rem] font-bold'>Meals App</h1>

         <div className="p-[.5rem] rounded-[1rem] border my-[1rem] w-[50%]">
            <input type="text" name="" placeholder='Search Foods..' className="w-full outline-none" id="" onChange={(e) => searchFood(e.target.value)} />
         </div>

        <div className='grid grid-cols-3 gap-[1rem]'>
        {meals.map((meal) => (
            <div key={meal.id}>
                <MealCard meal={meal}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Meals