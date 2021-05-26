import React from 'react'
import NewBanner from '../components/Banner/NewBanner/NewBanner'
import CollectionList from '../components/Collection/CollectionList/CollectionList'
import Header from '../components/Header/Header'

export default function Collection() {
    return (
        <div className="Collection">
            <Header/>
            <NewBanner/>
            <CollectionList/>
        </div>
    )
}
