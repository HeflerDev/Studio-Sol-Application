import { stash } from '../store';
/**
 * Communicate with the api
 */
export const requestNumber = () => (
  fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    .then((res) => (res.ok ? res.json() : stash('errorCode', res.status)))
    .then((data) => stash('sortedNumber', data.value))
);
