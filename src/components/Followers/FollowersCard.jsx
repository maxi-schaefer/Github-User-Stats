import React from 'react'
import styles from './Followers.module.scss'

function FollowersCard(props) {
    const { name, description, avatar } = props

  return (
    <div className={styles.followersCard}>
        <div className={styles.pictureWrapper}>
            <img className={styles.profilePicture} src={avatar} alt="" />
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default FollowersCard