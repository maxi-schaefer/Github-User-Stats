import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.scss'
import { ErrorNotify } from '../../utils/Toastify'

function Projects(props) {
    const { data } = props

    return(
        <>
            <div className={styles.headline}>
                <h2>Public Repositories (first 30)</h2>
            </div>
            <div className={styles.main}>
                {
                    data.map((repo) => {
                        return(
                            <ProjectCard name={repo.name} description={repo.description} language={repo.language} link={repo.html_url} stars={repo.stargazers_count} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects