import React from 'react'
import StackedList from '../../components/StackedList/StackedList'
import { useTheme } from '../../context/theme-context'
import './Home.css'
function Home() {
    const { themeData: { primaryBg, primaryText } } = useTheme()

    return (<>
        <div className="div-feed">
            <div className="header-home" style={{ color: primaryText, backgroundColor: primaryBg }}>
                <h3>Home</h3>
            </div>
            <StackedList />
        </div>
    </>

    )
}

export default Home
