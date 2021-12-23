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

export const getItems = (value) => async (dispatch) => {
	if (!['', undefined, null].includes(value))
		await fetch(`https://api.github.com/search/repositories?q=${value}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: Actions.GET_ITEMS, payload: { items: data.items } })
			})
	else console.log('nothing to search, fill the field')
}
