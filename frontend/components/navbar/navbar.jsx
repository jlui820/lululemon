import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container'


class NavBar extends React.Component {
    constructor(props) {
        super(props) 

        this.state = { filteredProducts: this.props.products, searchTerm: '' };
    }

    handleOnInputChange(e) {
        let matchingResults = new Set()
        for (let i = 0; i < allProducts.length; i++) {
            if (this.props.products[i].itemtype.toLowerCase().includes(e.target.value.toLowerCase())) {
                matchingResults.add(this.props.products[i].itemtype);
            }
        } 

        let filteredProducts = this.props.products.filter(product => {
            return matchingResults.has(this.props.products[i].itemtype);
        })

        this.setState({
            searchTerm: e.target.value,
            filteredProducts: filteredProducts
        })
    }

    

    render() {
        const display = this.props.currentUser ? (
            <div className='logged-in'>
                <div className='logout-button'>
                    <button className='logout-button' type='logout-button' onClick={this.props.logout}>SIGN OUT</button>
                </div>
                <div className='welcome-greeting'>
                    <h3 className='user-greeting'>HI {this.props.currentUser.email}</h3>
                </div>
            </div >
        ) : (
                <div className='login'>
                    <Link to='/UserSession' className='login-button'>SIGN IN</Link>
                </div >             
            )
        return (
            <div className='nav-bar-head'>
                <div className='nav-bar-head-container'>
                    <div className='left-side-nav-bar'>
                        <div className='nav-bar-logo'>
                            <Link to='/'>
                                <img className='nav-logo' src={window.navlogo2} />
                            </Link>
                        </div>
                        <div className='dropdown-nav'>
                            <ul className='dropdrop'>
                                <li className='dropdown'>
                                    {/* <a href=""></a> */}
                                    {/* <div className='dropdown-content'> 
                                        <a className='dropdown-content-list' href="">Womens Clothes</a>
                                    </div> */}
                                </li>   
                                <li className='dropdown'>
                                    <a href="" className='dropbtn'>Clothing</a>
                                    <div className='dropdown-content'> 
                                        <a className='dropdown-content-list' href="#products">Mens Clothes</a>
                                    </div>
                                </li>   
                                <li className='dropdown'>
                                    {/* <a href="" className='dropbtn'></a> */}
                                    {/* <div className='dropdown-content'>
                                        <a className='dropdown-content-list' href="">Girls</a>
                                    </div> */}
                                </li>   
                                <li className='dropdown'>
                                    {/* <a href="" className='dropbtn'></a> */}
                                    {/* <div className='dropdown-content'>
                                        <a className='dropdown-content-list' href="">Accessories</a>
                                    </div> */}
                                </li>   
                            </ul>    
                        </div>
                    </div>
                    
                    
                    <div className='right-side-nav-bar'>
                        {display}
                        <div className="line-break">|</div>
                        <div className='right-side-inner-container'>
                            <div className='search-bar-nav'>
                                <div onClick={this.props.clearSearch} className='searchbar-icon-nav'>                                  
                                    <SearchContainer />
                                </div>
                                <div className='nav-cart'>
                                    <Link to='/cart'>
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
