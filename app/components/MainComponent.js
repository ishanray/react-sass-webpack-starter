import React from 'react'
import Header from './Header'
import SearchBoxContainer from './SearchBoxContainer'

const MainComponent = React.createClass({
    onChange(e) {
        this.setState({query: e.target.value})
    },
    getInitialState() {
        return {query: ''}
    },
    clearAll(e) {
        e.preventDefault()
        this.setState(this.getInitialState())
    },
    render() {
        return (
            <div>
                <Header />
                <SearchBoxContainer
                onChange={this.onChange}
                query={this.state.query}
                clearAll={this.clearAll} />
            </div>
        )
    }
})

export default MainComponent
