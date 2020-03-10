import React from 'react';
import Body from '../body/splashpage';
import MainBodyProducts from '../main_body_products/main_page_products_body'
// import ProductIndexItem from '../products/product_index_item'
import Footer from '../footer/footer'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='main'>
                    <header>

                    </header>
                    <div>
                        <Body />
                        <MainBodyProducts />
                        {/* <ProductIndexItem /> */}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main; 