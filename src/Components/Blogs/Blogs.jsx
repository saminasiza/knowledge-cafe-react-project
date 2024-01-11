import { useInsertionEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";


const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useInsertionEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" md:w-2/3 p-4">
            <h1 className="text-3xl font-semibold">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead} ></Blog>)
            }

        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;