import { createUseStyles } from 'react-jss';
import {  useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-operations';


const useStyles = createUseStyles({
  listItem: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    background: 'linear-gradient(to left, #f8ab8d 0%, white, #f8ab8d)',
  },
  name: {
    marginRight: 'auto',
  },
  number: {
    fontWeight: '500',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: 'rgb(184, 92, 80)',
    boxShadow: '0px 0px 3px 0px black',
    borderRadius: 5,
    cursor: 'pointer',
  },
});
const ContactItem = ({ contact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={classes.listItem}>
      <p className={classes.name}>{contact.name}</p>
      <p className={classes.number}>{contact.number}</p>
      <button className={classes.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default ContactItem;
