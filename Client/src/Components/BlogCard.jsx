import React from 'react'
import { useNavigate } from 'react-router-dom';


const BlogCard = ({blog}) => {


    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/blog/${_id}`)} className='w-full max-w-[240px] h-[280px] rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
            <img src={image} alt="" className='w-full h-28 object-cover'/>
            <span className='ml-3 mt-2 px-2.5 py-0.5 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
            <div className='p-3 pt-2'>
                <h5 className='mb-1 font-medium text-sm text-gray-900 line-clamp-2'>{title}</h5>                
                <p className='mb-2 text-xs text-gray-600 line-clamp-2' dangerouslySetInnerHTML={{"__html" : description.slice(0,80)}}></p>
            </div>
        </div>
    )
}


export default BlogCard