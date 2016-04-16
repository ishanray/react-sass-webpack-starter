import React from 'react'
import _ from 'lodash'
import faker from 'faker'

const MovieList = React.createClass({
    getInitialState() {
        return {
            movies: _.range(1, 100).map(i => {
                return {
                    name: faker.name.findName(),
                    job: faker.name.jobType()
                }
            })
        }
    },
    render() {
        return (
            <div>
                {_.filter(this.state.movies, item =>
                    _.includes(
                            _.lowerCase(item.name),
                            _.lowerCase(this.props.query)
                        )
                    ).map((item, index) =>
                    <div key={index}>
                        {item.name} - <b>{item.job}</b>
                    </div>)
                }
            </div>
        )
    }
})

export default MovieList
