import style  from './Button.module.css'

export default function Button({children, variant, handleClick}) {
    return(
        <div>
            <button className={`${style[variant]}`} onClick={ handleClick}>
                {children}
            </button>
        </div>
    )
}