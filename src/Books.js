let Books = (props) => {

    // const { img, title, author } = props.book; // u need to mention the same type here also # // it is required for spread operator
    const { img, title, author } = props; // required for non spread operator

    const clickEvents = () => {
        alert("hello alert !!");
    }

    return (
        <>
            <article className='BookList'>
                <img src={img} alt="Default image is not here" />
                <h3>{title}</h3>
                <h3>{author}</h3>
                <button type="button" onClick={clickEvents}>Use this button</button>
            </article>
        </>
    );
}

export default Books;