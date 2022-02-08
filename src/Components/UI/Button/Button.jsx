import './Button.css';
import propTypes from 'prop-types';

export const Button = ({ ButtonClass, text }) => {
    return(
        <button className={ButtonClass}>{text}</button>
    )
};

Button.prototype ={
    ButtonClass:propTypes.string,
    text:propTypes.string
}