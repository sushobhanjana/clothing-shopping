import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectshopPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collection-overview.styles.scss'

const CollectionOverview = ({shop}) => {
    console.log(shop)
    return (
        <div className='collections-overview'>
            {
                shop.map(({id,...othercollectionprops}) => (
                    <CollectionPreview key={id} {...othercollectionprops}/>
                ))
            }
        </div>
    )
} 


const mapStateToProps = createStructuredSelector({
    shop:selectshopPreview
})

export default connect(mapStateToProps)(CollectionOverview)