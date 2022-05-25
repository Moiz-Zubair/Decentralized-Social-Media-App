
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'fhx3ohdh',
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})