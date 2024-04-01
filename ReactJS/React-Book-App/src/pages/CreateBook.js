
const CreateBook = (props) => {
    // const newBook = props.newBook;
    // const onAddBook = props.onAddBook;
    const {newBook, onAddBook, onInputChange} = props;
    return (
        <>
            <h1>Create Book</h1>
            <input type="number" name="id" placeholder="책 번호을 입력하세요" value={newBook.id} onChange={onInputChange}></input><br />
            <input type="text" name="writter" placeholder="작가 이름을 입력하세요" value={newBook.writer} onChange={onInputChange}></input><br />
            <input type="text" name="title" placeholder="책 제목을 입력하세요" value={newBook.title} onChange={onInputChange}></input><br />
            <label>출판일 : </label>
            <input type="date" name="releaseDate" value={newBook.releaseDate}></input><br />            
            <button onClick={onAddBook}>Add Book</button>
            

        </>
    )
}

export default CreateBook;