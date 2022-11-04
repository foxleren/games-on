import './Button.scss';

export default function Button({content, backgroundColor, size = 'small', action = () => {}}) {
    return (
        <div className={`button-container ${size} ${backgroundColor}`} onClick={action}>
            {content}
        </div>
    );
}