import React from 'react'
import MovieList from './MovieList'

const SearchBoxContainer = ({query, onChange, clearAll}) =>
    <div>
        <div>
            <input
            onChange={onChange}
            value={query}
            type="text"
            placeholder="Search something"/>
            <a href="#" onClick={clearAll}>Clear all</a>
        </div>
        <div><pre>searching for: {query}</pre></div>
        <MovieList query={query} />
    </div>

export default SearchBoxContainer
