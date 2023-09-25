import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');


// Get list of posts and metadata to populate the homepage
export function getSortedPostsData() {
    // Get file names
    const fileNames = fs.readdirSync(postsDirectory);

    // map names to array data
    const allPostsData = fileNames.map((fileName) => {
        // removed .md from all posts files names
        const id = fileName.replace(/\.md$/, '');

        // read md file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // parse post metadata
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        }
    });

    // sort data
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}


// Get all post IDs to use as our dynamic routes
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Return an array like:
    // [
    //     {params: {id: 'ssg-ssr'}},
    //     {params: {id: 'pre-rendering'}},
    // ]
    // MUST BE IN THIS FORMAT
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}


// Get data for a single post
export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse post metadata
    const matterResult = matter(fileContents);

    // Combine data with the ID
    return {
        id,
        ...matterResult.data,
    };
}
