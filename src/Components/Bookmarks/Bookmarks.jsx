
// import PropTypes from 'prop-Types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 m-2 p-4'>
            <h3 className="text-4xl text-center">Reading Time:{readingTime}</h3>
            <h2 className="text-3xl font-semibold p-4 text-center m-4">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

// Bookmarks.propTypes = {
//     bookmarks:PropTypes.array,
//     readingTime: PropTypes.number 

// }


export default Bookmarks;