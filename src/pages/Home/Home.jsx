import React from 'react'
import StackedList from '../../components/StackedList/StackedList'
import { useTheme } from '../../context/theme-context'
import './Home.css';


function Home() {
    const { themeData: { primaryBg, primaryText } } = useTheme()

    return (<>
        <div className="div-feed">
            <div className="header-home" style={{ color: primaryText, backgroundColor: primaryBg }}>
                <h3>Home</h3>
            </div>
            <div className="div-status">
                <div>
                    <img alt="avatar" className="avatar" src="https://via.placeholder.com/50" />
                </div>


                <form className='status-form'>
                    <textarea name="status-form" className="form-textarea" placeholder="What's Happening ?"></textarea>
                    <div>
                        <button className="btn btn-primary">Post</button>
                    </div>
                </form>
            </div>
            <StackedList />

        </div>
    </>

    )
}

export default Home
