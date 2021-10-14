import './scss/SearchForm.scss'

const SearchForm = ({ handleInput, subject }) => (
	<form className="App-form">
		<input
			type="text"
			name="search"
			id="search"
			value={subject}
			onChange={(event) => handleInput(event.target.value)}
		/>
		<button id="reset-icon-button" onClick={() => handleInput('')} type="button">
			x
		</button>
	</form>
)

export default SearchForm
