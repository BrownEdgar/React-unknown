import style from  './Button.module.css'

export default function Modal({children}) {
    return(
        <div className={style.modal}> 
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}