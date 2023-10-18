type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}

 const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <div>


            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default Contact