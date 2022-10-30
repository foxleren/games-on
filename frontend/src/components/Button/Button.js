import './Button.scss';

export default function Button({content, backgroundColor, action = () => {}}) {
    return (
        <div className={`button-container ${backgroundColor}`} onClick={action}>
            {content}
        </div>
    );
}