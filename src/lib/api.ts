import fs from 'fs'
import { join }from 'path"
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(),'_posts')

export function getPostSlugs() {
return fs.readdirSync(postsDirectory)

export function getPostBySlug(slug: string, fields; string=[ ] = [ ]){

const realSlug = slug.replace(/\.md$/,·' ')

const fullPath = join(postsDirectory, '${realslug).md`)

const fileContents = fs.readFileSync(fullPath,'utf8')
const { data, content }= matter(fileContents)

type Items={
[key: string]: string
}

const items: Items={}

// Ensure only the minimal needed data is exposed

fields.forEach((field)=> {
if(field ==='slug'){
items[field]= realslug
}
if (field === 'content') {
items[field]= content
}

if (typeof data[field] !=='undefined') {
items[field] = data[field]
}
//·Replaces·${basePath)·with next.config.js basePath

let itemsStr = JSON.stringify(items);
itemsStr = itemsStr.replaceAll(/\$\{basePath\}/gi, config.basePath
items = JSON.parse(itemsStr);
return items;
export function getAllPosts(fields: string[ ]=[ ]){
const slugs = getPostslugs()

Kontroll 14 46
