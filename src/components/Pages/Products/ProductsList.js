import React from 'react';
import './Products.css'

class ProductsList extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            postItem: null
        }
    }

    setPostStateOnProps(){
        const {post} = this.props
        this.setState({
            postItem: post
        })
    }
    componentDidUpdate(prevProps, prevState, snapshop){
        if (this.props !== prevProps) {
            this.setPostStateOnProps()
        }
    }
    componentDidMount(){
        this.setPostStateOnProps()
    }
    render(){
        const {postItem} = this.state
        return(
            <>
            {postItem !== null ? 
                <div className="products__container">
                    <div className="products__list">
                            <img src={postItem.image} alt={postItem.title} />
                            <h2>{postItem.title}</h2>
                            <p className="price">Price: ${postItem.price}</p>
                            <p className="desc">{postItem.description}</p>
                    </div>          
                </div>
            : ''}
            </>
        )
    }
}

export default ProductsList