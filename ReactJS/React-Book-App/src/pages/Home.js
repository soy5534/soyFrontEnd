
import "../css/home.css"

const Home = (props) => {
    const books = props.books;
    return (
        <>
            <h1>Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Writer</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Action</th>
                    </tr>  
                </thead>
                <tbody>                                                
                    {books.map((book)=>
                        (<tr key={book.id}>
                            <td>{book.id}</td>    
                            <td>{book.writer}</td>
                            <td>{book.title}</td>
                            <td>{book.releaseDate}</td>
                            <td>
                                <button
                                onClick={()=> props.onDeleteBook(book.id)}>
                                Delete
                                </button>
                            </td>
                        </tr>) 
                    )}
                </tbody>     
                {/* <tr>
                    <td>2</td>    
                    <td>Writer2</td>
                    <td>Title2</td>
                    <td>2024-03-27</td>
                    <td><button>Delete</button></td>
                </tr>      
                <tr>
                    <td>3</td>    
                    <td>Writer3</td>
                    <td>Title3</td>
                    <td>2024-03-27</td>
                    <td><button>Delete</button></td>
                </tr>       */}
            </table>
        </>
    )
}

export default Home;