
import PropTypes from 'prop-types';
import { FaBong, FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const { id, title, cover, author_img, author, reading_time, posted_date, hashtags } = blog
    return (
        <div className='space-y-4 mb-20 '>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex  justify-between items-center  mb-4'>
                <div className='flex mt-2'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6 mt-4'>
                        <h3 className="text-2xl mb-1 font-medium">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time}   read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-300'> <FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h3 className='text-4xl font-semibold'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=''> #{hash} </a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 underline font-bold'>mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func


}

export default Blog;