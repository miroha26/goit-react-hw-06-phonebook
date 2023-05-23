import { Heading } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
