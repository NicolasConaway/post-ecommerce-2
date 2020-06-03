import React from 'react';
import './Products.css'
import productItems from '../../Data/productItems.json'
import ProductsList from './ProductsList.js'

class Products extends React.Component {

    constructor(props){
        super(props)
        this.toggleTagMed = this.toggleTagMed.bind(this)
        this.toggleTagBaby = this.toggleTagBaby.bind(this)
        this.toggleSortPriceLow = this.toggleSortPriceLow.bind(this)
        this.toggleSortPriceHigh = this.toggleSortPriceHigh.bind(this)
        this.state = {
            postList: productItems,
            priceOrder: true,
            tagOrder: true
        }
    }

    /* Sort By Price Low Button */
    sortByPriceLow(){
        const {postList} = this.state
        let newPostList = postList
        if (this.state.priceOrder){
            newPostList = postList.sort((a, b) => a.price - b.price)
        }
        this.setState({
            priceOrder: !this.state.priceOrder,
            postList: newPostList
        })
    }
    toggleSortPriceLow (event) {
        this.sortByPriceLow()
    }

    /* Sort By Price High Button */
    sortByPriceHigh(){
        const {postList} = this.state
        let newPostList = postList
        if (this.state.priceOrder){
            newPostList = postList.sort((a, b) => b.price - a.price)
        }
        this.setState({
            priceOrder: !this.state.priceOrder,
            postList: newPostList
        })
    }
    toggleSortPriceHigh (event) {
        this.sortByPriceHigh()
    }

    /* Medical Button Functionality */
    sortByTagMed(){
        const {postList} = this.state
        let newPostList = postList
        if (this.state.tagOrder){
            newPostList = postList.sort((a, b) => a.id - b.id)
        }
        this.setState({
            tagOrder: !this.state.tagOrder,
            postList: newPostList
        })
    }
    toggleTagMed (event) {
        this.sortByTagMed()
    }

    /* Baby Button Functionality */
    sortByTagBaby(){
        const {postList} = this.state
        let newPostList = postList
        if (this.state.tagOrder){
            newPostList = postList.sort((a, b) => b.id - a.id)
        }
        this.setState({
            tagOrder: !this.state.tagOrder,
            postList: newPostList
        })
    }
    toggleTagBaby (event) {
        this.sortByTagBaby()
    }

    pleaseFix(){
        this.setState({
            postList: productItems,
            priceOrder: true,
            tagOrder: true
        })
    }

    componentDidMount() {
        this.pleaseFix()
    }
 
    render(){
        const {postList} = this.state
        return(
            <>
                <div className="filter__container">
                    <button className="filter__button" onClick={this.toggleTagMed}>Medical</button>
                    <button className="filter__button" onClick={this.toggleTagBaby}>Baby</button>

                    <div className="filter__break"></div>

                    <button className="filter__button" onClick={this.toggleSortPriceHigh}>Price High</button>
                    <button className="filter__button" onClick={this.toggleSortPriceLow}>Price Low</button>
                </div>
                <div className="products__section">
                    {
                        postList.map((stock, i) => {
                            return(<ProductsList 
                                post={stock} 
                                key={`post-list-key ${i}`} />)
                        })
                    }   
                </div>
            </>
        )
    }
}

export default Products