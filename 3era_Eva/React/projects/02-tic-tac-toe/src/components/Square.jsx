export const Square = ({children ,updateBoard, isSelected, index}) => {
    const className = `square${isSelected ? ' is-selected' : ''}`;

    const handleClick = () => {
        updateBoard(index)
    }

    return(
        <section className={className} onClick={handleClick}>
            {children}
        </section>
    )
}