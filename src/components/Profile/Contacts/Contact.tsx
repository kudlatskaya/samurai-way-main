type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}
// const MyInput = ({ field, form, ...props }) => {
//     return <input {...field} {...props} />;
// };
 const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default Contact