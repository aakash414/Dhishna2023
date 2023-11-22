import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'v8wqj6ao',
    dataset: 'production',
    useCdn: false
})
export default client