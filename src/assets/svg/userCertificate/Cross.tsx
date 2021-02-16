import { Icon } from '@blueprintjs/core';
import * as React from 'react';

interface IProps {
  onCrossClick: any;
}

interface IState {}

export class Cross extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="close-icon">
        <Icon icon="cross" onClick={() => this.props.onCrossClick()} />
      </div>
    );
  }
}
