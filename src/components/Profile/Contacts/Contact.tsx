type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

 const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default Contact