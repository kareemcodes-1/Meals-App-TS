import { create } from "zustand";

export type Meal = {
    id: string;
    strMeal: string;
    strMealThumb: string
}

type State = {
    meals: Meal[],
    originalMeals: Meal[],
    setMeals: (meals: Meal[]) => void;
    searchFood: (value: string) => void;
}


export const useStore = create<State>((set) => ({
    meals: [],
    originalMeals: [],
    setMeals(meals) {
        return set((state) => ({
            ...state,
            meals: [...meals],
            originalMeals: [...meals],
        }))
    },
    searchFood(value){
        return set((state) => ({
            ...state,
            meals: state.originalMeals.filter((meal) => meal.strMeal.toLowerCase().includes(value.toLowerCase())),
        }))
    }
}))