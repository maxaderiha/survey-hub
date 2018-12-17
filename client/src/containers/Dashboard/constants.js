import { addNamespace } from 'common/utils/addNamespace';

export const ActionTypes = addNamespace(
  {
    CREATE_SURVEY: null,
    CREATE_SURVEY_SUCCESS: null,
    FETCH_SURVEYS_REQUEST: null,
    FETCH_SURVEYS_SUCCESS: null,
  },
  'Dashboard',
);
