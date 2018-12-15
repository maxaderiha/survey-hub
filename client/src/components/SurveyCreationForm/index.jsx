import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, Button, EditableText, H1, H3, Spinner } from '@blueprintjs/core';

import './styles.css';

class SurveyCreationForm extends Component {
  state = {
    title: '',
    subject: '',
    body: '',
    recipientEmails: '',
    isLoading: false,
  }

  render() {
    const { isLoading } = this.state;

    return (
      isLoading
        ? <Spinner size={75} />
        : this.renderForm()
    );
  }

  renderForm = () => (
    <div className={'survey-form-wrapper'}>
      <div className={'survey-form'}>
        <Label>
          Title*
          <H1>
            <EditableText
              className={'survey-form-field'}
              placeholder={'Title...'}
              value={this.state.title}
              onChange={this.onTitleChange}
              maxLength={30}
            />
          </H1>
        </Label>
        <Label>
          Subject*
          <H3>
            <EditableText
              className={'survey-form-field'}
              placeholder={'Subject...'}
              value={this.state.subject}
              onChange={this.onSubjectChange}
              maxLength={40}
            />
          </H3>
        </Label>
        <Label>
          Body*
          <H3>
            <EditableText
              className={'survey-form-field'}
              placeholder="Edit email body... (multiline)"
              maxLines={12}
              minLines={2}
              maxLength={200}
              multiline={true}
              value={this.state.body}
              onChange={this.onBodyChange}
            />
          </H3>
        </Label>
        <Label>
          Email addresses, at least one*
          <H3>
            <EditableText
              className={'survey-form-field'}
              placeholder="Enter recipient emails separated by comma..."
              value={this.state.recipientEmails}
              onChange={this.onRecipientEmailsChange}
            />
          </H3>
        </Label>
      </div>
      <div className={'survey-form-btn-group'}>
        <Link className={'non-decorated-link'} to={'/surveys'}>
          <Button
            text={'Cancel'}
            icon={'arrow-left'}
            large
          />
        </Link>
        <Button
          text={'Submit'}
          rightIcon={'arrow-right'}
          large
          onClick={this.onSubmit}
        />
      </div>
    </div>
  )

  onTitleChange = title => {
    this.setState({ title });
  }

  onSubjectChange = subject => {
    this.setState({ subject });
  }

  onBodyChange = body => {
    this.setState({ body });
  }

  onRecipientEmailsChange = recipientEmails => {
    this.setState({ recipientEmails });
  }

  onSubmit = () => {
    const {
      title,
      subject,
      body,
      recipientEmails,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    this.props.createSurvey({
      title,
      subject,
      body,
      recipientEmails,
    });
  }
}

export default SurveyCreationForm;
