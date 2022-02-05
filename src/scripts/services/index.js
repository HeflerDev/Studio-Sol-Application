import { stash } from "../store"
/**
 * Communicate with the api
 */
export const requestNumber = () => {
    return (
        fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=9')
        .then((res) => {
            return res.ok ? res.json() : stash('errorCode', res.status)
        })
        .then(data => stash('sortedNumber', data.value))
    )
}
