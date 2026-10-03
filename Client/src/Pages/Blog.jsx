import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import Navbar from "../Components/Navbar";
import {assets} from "../assets/assets";
import Moment from "moment";


const Blog = () => {
    const {id} = useParams()

    const [data, setData] = React.useState(null);

    const fetchData = async () => {
        const data = blog_data.find(item => item._id === id)
        setData(data)
    }

    useEffect(() => {
        fetchData()
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

            </div>

        </div>
    ) : (
        <div>
            <h1>Blog not found</h1>
        </div>
    )
}

export default Blog