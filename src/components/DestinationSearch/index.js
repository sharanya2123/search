// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component{
    state = {searchInput: ''}


searchUserInput = event => this.setState({searchInput: event.target.value})

    render(){
    

    const {destinationsList} = this.props

      const {searchInput} = this.state 


    const filtersearchResults = destinationsList.filter(eachItem =>
    eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return(
        <div className="destination-search-bg-con">
        <div className="destination-search-con">
        <h1 className="heading">Destination Search</h1>

        <div className="search-input-container">
        <input 
        type="search" className="search-input" placeholder="Search" value={searchInput} onChange={this.SearchUserInput} />
        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="search-icon" />

        </div>
        <ul className="destination-items-con">
           {filtersearchResults.map(eachItem =>{
            <DestinationItem destinationItem={eachItem} key={eachItem.id} />
        })}
         </ul>
        </div>
        </div>
    )
}
}

export default DestinationSearch