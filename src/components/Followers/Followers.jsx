import React from 'react'
import styles from './Followers.module.scss'
import { ErrorNotify } from '../../utils/Toastify'
import FollowersCard from './FollowersCard'

function Followers(props) {
    const { data } = props

    return(
        <>
            <div className={styles.headline}>
                <h2>Followers (first 30)</h2>
            </div>
            <div className={styles.main}>
                {
                    data.map((user) => {
                        return (
                            <FollowersCard name={user.login} description={user.bio || "No Description"} avatar={user.avatar_url}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Followers