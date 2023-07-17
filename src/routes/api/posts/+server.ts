import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";

async function getPosts() {
    let posts: Post[] = []

    // getting every path in the posts directory
    const paths = import.meta.glob('/src/posts/*.md', {eager: true})
    // looping through all the paths
    for (const path in paths) {
        // getting the current file
        const file = paths[path]
        
        // getting the slug value
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            // getting the metadata
            const metadata = file.metadata as Omit<Post, 'slug'>
            // creating a post from the metadata and slug
            const post = { ...metadata, slug } satisfies Post
            posts.push(post)
        }
        
    }
    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}