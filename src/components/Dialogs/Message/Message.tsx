import s from './Message.module.css';

type MessagePropsType = {
    message: string,
}

const Message = (props: MessagePropsType) => {
    let {message} = props;
    return <div className={s.message}>{message}</div>
}

export default Message;