import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SurveysList from 'components/SurveysList';
import { fetchSurveys } from 'containers/Dashboard/actions';
import { surveys, isSurveysLoading, isSurveysLoaded } from 'containers/Dashboard/selectors';

const mapStateToProps = createStructuredSelector({
  isSurveysLoading,
  isSurveysLoaded,
  surveys,
});

const mapDispatchToProps = {
  fetchSurveys,
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveysList);
