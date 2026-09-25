import {React,useState} from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"

const BlogList = () => {

        const[menu, setMenu] = useState("All")

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((items) => (
                    <div key = {items} className='relative'>
                        <button onClick={() => setMenu(items)} className={`cursor-pointer text-gray-500 ${menu === items && 'text-white px-4 pt-0.5'}`}>
                            {items}
                            {menu === items && (
                                <motion.div layoutId='underline' 
                                transition={{type : 'spring', stiffness : 500, damping:30}}
                                className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></motion.div> 
                            )}
                            
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {/* blog cards  */}
            </div>
        </div>
    )
}

export default BlogList