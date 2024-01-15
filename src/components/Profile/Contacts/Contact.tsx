type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}
// const MyInput = ({ field, form, ...props }) => {
//     return <input {...field} {...props} />;
// };
 const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <tr>
            <td>{contactTitle}: </td> <td>{contactValue}</td>
        </tr>
    );
};

export default Contact