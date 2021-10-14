import './scss/SearchResult.scss'

const SearchResult = ({ item }) => (
	<article>
		<a href={item.html_url}>
			<h1>{item.full_name}</h1>
			<p>Watchers: {item.watchers_count}</p>
			<p>Stars: {item.stargazers_count}</p>
		</a>
	</article>
)
export default SearchResult
