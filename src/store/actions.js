import axiosClient from '../axiosClient.js';

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchMeals', data.meals)
        })
}
export function searchMealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
}
export function searchMealsByIngredient({commit}, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({data}) => {
            commit('setMealsByIngredient', data.meals)
        })
}