// import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contact-actions';

const useStyles = createUseStyles({
  title: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    marginBottom: 20,
  },
});

const Filter = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={classes.title}>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

export default Filter;
