import React, { useCallback, useState, lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import './scss/App.scss'
import SearchResult from './SearchResult'
import SearchForm from './SearchForm'
import { getItems as getItemsActions } from './redux/items'

function App({ items, getItems, page }) {
	let newPage
	const [subject, setSubject] = useState('')
	const [offset, setOffset] = useState(0)

	// const onScroll = () => {
	// 	const searchResults = document.querySelector('.search-results')
	// 	console.log('searchResults.offsetHeight', searchResults.offsetHeight)
	// 	console.log('searchResults.scrollTop', searchResults.scrollTop)
	// 	console.log('searchResults.scrollHeight', searchResults.scrollHeight)
	// 	if (searchResults.offsetHeight - searchResults.scrollTop === searchResults.scrollHeight) {
	// 		console.log('scrolled till the bottom')
	// 		// newPage += page
	// 		console.log('subject', subject)
	// 		getItems(subject)
	// 	}
	// }

	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll)
	// }, [page])

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
