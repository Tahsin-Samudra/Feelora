import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../assets/assets";
import Navbar from "../Components/Navbar";
import {assets} from "../assets/assets";
import Moment from "moment";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";  


const Blog = () => {
    const {id} = useParams()

    const [data, setData] = useState(null)
    const [comments, setComments] = useState([])
    
    const [Name, setName] = useState(null)
    const [Content, setContent] = useState(null)

    const fetchData = async () => {
        const data = blog_data.find(item => item._id === id)
        setData(data)
    }

    const fetchComments = async () => {
        setComments(comments_data)
    }

    const addComment = async (e) => {
        e.preventDefault();        
    }

    useEffect(() => {
        fetchData()
        fetchComments()
    },[])

    return data ? (
        <div className="relative">
            <img src={assets.gradientBackground} alt="" className="absolute -top-50 -z-1 opacity-20"/>

            <Navbar />


            <div className="text-center mt-20 text-gray-600">
                <p className='text-primary py-4 font-medium'>Published On {Moment(data.createdAt).format("MMMM Do YYYY")}</p>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
                <h2 className='text-xl font-medium text-gray-600'>{data.subtitle}</h2>
                <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Some Guy</p>   
            </div>

            <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
                <img src={data.image} alt="" className='rounded-3xl mb-5'/>

                <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }} />   

                {/*Comment Section*/}
                <div className='mt-14 mb-10 max-w-3xl mx-auto'>
                    <p className='font-semibold mb-10'>Comments : ({comments.length})</p>
                    <div className='flex flex-col gap-4'>
                        {comments.map((item, index) => (
                            <div key={index} className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
                                <div className="flex items-center gap-2 mb-2">
                                    <img src={assets.user_icon} alt="" className = 'w-6'/>
                                    <p className='font-medium'> {item.name} </p>
                                </div>
                                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>
                            </div>
                        ))}
                    </div>

                    <div className='max-w-3xl mt-4'>
                        <p className='font-semibold mb-4'>Leave a Comment</p>
                        <form onsubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
                            <input onchange={(e) => setName(e.target.value)} value={Name} type="text" placeholder="Your Name" className='w-full p-2 border border-gray-300 rounded outline-none' required/>
                            <textarea onchange={(e) => setContent(e.target.value)} value={Content} placeholder="Your Comment" className='w-full p-2 border border-gray-300 rounded outline-none h-48' required></textarea>

                            <button type='submit' className='bg-primary text-white p-2 px-8 hover:scale-102 transition-all cursor-pointer'>
                                Submit
                            </button>
                        </form>
                    </div>
                    {/* Share Section */}
                    <div className='my-24 max-w-3xl mx-auto'>
                        <p className = 'font-semibold my-4'>Share this article on Social Media</p>
                        <div className = 'flex'>
                            <img src={assets.facebook_icon} alt="Facebook" className = 'w-8 h-8 mx-2 cursor-pointer'/>
                            <img src={assets.twitter_icon} alt="Twitter" className = 'w-8 h-8 mx-2 cursor-pointer'/>
                            <img src={assets.googleplus_icon} alt="Google+" className = 'w-8 h-8 mx-2 cursor-pointer'/>
                        </div>
                    </div>                    
                </div>
                <Footer/> 

            </div>

        </div>
    ) : (
        <div>
            <h1>Loading...</h1>
            <Loader/>
        </div>
    )
}

export default Blog