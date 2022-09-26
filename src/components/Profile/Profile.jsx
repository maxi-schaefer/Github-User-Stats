import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Profile.module.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Profile(props) {
  const { data } = props

  return (
    <div className={styles.main}>
      <div className={styles.profileWrapper}>
        <img src={data.avatar_url} alt="profilePicture" className={styles.profilePicture} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{data.login}</h3>
        <p className={styles.description}>{data.bio || "No description"}</p>
      </div>
      <ul className={styles.socials}>
        <li><a href={data.html_url}><FontAwesomeIcon icon={faGithub}/></a></li>
      </ul>

      <div className={styles.statsWrapper}>

        <div className={styles.statsCard}>
          <div className={styles.statistic}>
            <h3 className={styles.number}>{data.following}</h3>
            <p className={styles.doc}>Following</p>
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statistic}>
            <h3 className={styles.number}>{data.followers}</h3>
            <p className={styles.doc}>Followers</p>
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statistic}>
            <h3 className={styles.number}>{data.public_gists}</h3>
            <p className={styles.doc}>Public Gists</p>
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statistic}>
            <h3 className={styles.number}>{data.public_repos}</h3>
            <p className={styles.doc}>Public Repos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile