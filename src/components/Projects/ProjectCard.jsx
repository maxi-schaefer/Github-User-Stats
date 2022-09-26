import React from 'react'
import styles from './Projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
const { name, description, language, link, stars } = props;
  return (
    <div className={styles.projectCard}>
        <div className={styles.project_info}>
            <h3 className={styles.projectName}>{name}</h3>
            <p className={styles.projectInfo}>{description || "No Description"}</p>

            <div className={styles.github}>
                <a href={link} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <div className={styles.language}>
                    <FontAwesomeIcon className={styles.circle} icon={faCircle} />
                    <p>{language || "Forked/No Language"}</p>
                </div>
                <div className={styles.language}>
                    <FontAwesomeIcon className={styles.stars} icon={faStar} />
                    <p>{stars}</p>
                </div>
                <div className={styles.language}>
                    <FontAwesomeIcon className={styles.forks} icon={faCodeFork} />
                    <p>{stars}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard