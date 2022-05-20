import './SnackBar.css';

//SnackBar = pop up
//con el {children} recibe todo lo que yo ponga dentro de SnackBar en App.js y se va a mostrar en el lugar donde lo llamo (abajo de "Alerta")
const SnackBar = ({children}) => {
    return (
        <div className="snackbar-custom">
            Alerta!
            {children}
        </div>
    )
}

export default SnackBar