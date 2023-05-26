<<<<<<< HEAD

=======
>>>>>>> d30dfa90e7154207ae76c07b3e46c61de1863124
import s from './Button.module.css'
import PropTypes from "prop-types";


export default function Button({ title, variant, size, clicked}) {

    return (
        <button className={`${s[variant]} ${s[size]} `} onClick={clicked}>
            {title}
        </button>
    );
};

Button.defaultProps = {
    variant: 'dark',
    title: 'Button',
    size: 'md'
}

Button.propTypes = {
    variant: PropTypes.oneOf(["dark", "light", "warn","dark-animated"]),
    children: PropTypes.element,
    title:PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    clicked: PropTypes.func
}