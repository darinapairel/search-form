import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import './scss/App.scss'
import SearchResult from './SearchResult'
import SearchForm from './SearchForm'
import { getItems as getItemsActions } from './redux/items'

function App({ items, getItems, page }) {
	const [subject, setSubject] = useState('')

	const debounceGetItems = useCallback(
		debounce((value) => getItems(value), 500),
		[]
	)

	const handleInput = (value) => {
		setSubject(value)
		if (value.length >= 3) debounceGetItems(value)
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Search {page}</h1>
			</header>
			<SearchForm handleInput={handleInput} subject={subject} />
			<section className="search-results">
				{items.map((item) => (
					<SearchResult key={item.id} item={item} />
				))}
			</section>
			<footer>
				<div className="name">Made by Darina Pairel</div>
			</footer>
		</div>
	)
}

const mapStateToProps = ({ items }) => ({
	items: items.items,
	page: items.page,
})

export default connect(mapStateToProps, { getItems: getItemsActions })(App)
