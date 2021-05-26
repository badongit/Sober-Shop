import React from 'react'
import Banner from '../components/Banner/Main/Banner'
import RecommendBanner from '../components/Banner/RecommendBanner/RecommendBanner'
import Header from '../components/Header/Header'
import MainTab from '../features/Product/components/MainTab/MainTab'

export default function Home() {
    return (
        <div className="Home">
            <Header/>
            <Banner/>
            <RecommendBanner/>
            <MainTab/>
        </div>
    )
}
