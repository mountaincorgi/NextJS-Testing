import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');


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