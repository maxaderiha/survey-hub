import { connect } from 'react-redux';

import SurveyCreationForm from 'components/SurveyCreationForm';
import { createSurvey } from 'containers/Dashboard/actions';

const mapStateToProps = null;

const mapDispatchToProps = {
  createSurvey,
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyCreationForm);
