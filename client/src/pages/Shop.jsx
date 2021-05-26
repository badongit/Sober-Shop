import React from 'react'
import Header from '../components/Header/Header'
import NewBanner from '../components/Banner/NewBanner/NewBanner'
import ShopBody from '../components/Shop/ShopBody/ShopBody'

export default function Shop() {
    return (
        <div>
            <Header/>
            <NewBanner/>
            <ShopBody/>
        </div>
    )
}
