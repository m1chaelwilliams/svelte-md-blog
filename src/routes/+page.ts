import type { Post } from '$lib/types.js'

export async function load({ fetch }) {
    try {
        const response = await fetch('api/posts')
        const posts: Post[] = await response.json()
        return { posts }
    } catch(e) {
        console.error('Error loading posts:', e);
        throw new Error('Failed to fetch posts data');
    }
}