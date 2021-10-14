/* eslint-disable import/no-anonymous-default-export */
import Actions from './types'

const defaultState = {
	items: [],
}

export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case Actions.GET_ITEMS:
			return { ...state, items: payload.items }
		default:
			return state
	}
}

export const getItems = (value) => async (dispatch, getState) => {
	if (!['', undefined, null].includes(value))
		await fetch(`https://api.github.com/search/repositories?q=${value}?&per_page=100`)
			.then((res) => res.json())
			.then((data) => {
				console.log('data.items', data.items)
				console.log('getState().items', getState().items.items)
				// console.log('data.items', data.items)
				dispatch({ type: Actions.GET_ITEMS, payload: { items: data.items } })
			})
	else console.log('nothing to search, fill the field')
}
