import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export function ErrorNotify(text) {
    toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    })
}

export function GithubNotify(text) {
       toast.info(text, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        icon: "⭐"
    })
}

export function DiscordNotify(text) {
    toast.info(text, {
     position: "top-right",
     autoClose: false,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: 'dark',
     icon: ({theme, type}) =>  <FontAwesomeIcon color='#7289da' icon={faDiscord} />
 })
}