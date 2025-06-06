export const Square = ({children, updateBoard, isSelected, index}) => {
    const className = `square${isSelected ? ' is-selected' : ''}`;

    console.log("Render del componente Square");

    const handleClick = () => {
        updateBoard(index)
    }
    // children es un prop nativo de cualquier componente y hace referencia al contenido que reciba el componente en si al ser llamado
    // Por ejemplo, si este componente es instanciado en otro componente y su contenido es "X" el valor del prop children sera "X" (<Square>X</Square>)
    // Si contiene mas elementos, por ejemplo <section><h4>X</h4></section> el valor del prop será un objeto por cada elemento html
    // Para llegar a ese X, tendríamos que referenciar un "children" por cada elemento que sea parte del contenido del componente
    // para el ejemplo anterior sería: children.props.children.props.children
    //console.log("children:",children);
    //if (children?.props?.children?.props?.children) console.log("children:",children.props.children.props.children);
    return(
        <section className={className} onClick={handleClick}>
            {children}
        </section>
    )
}