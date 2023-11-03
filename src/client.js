import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'ljidr7g9',
    dataset: 'production',
    useCdn: false
})
export default client