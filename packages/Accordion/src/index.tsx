import React, {
  PureComponent, Component
} from 'react';

import { Wrap } from './styled';

import Row, { Props as RowProps } from './Row';

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Button {
  children:
   | React.ReactElement<RowProps, typeof Row>
   | React.ReactElement<RowProps, typeof Row>[]
}

class Accordion extends PureComponent<Props> {
  state = { expandedRow: undefined };

  setExpanded(value: string) {
    this.setState({
      expandedRow: value
    });
  }

  handleExpand(row: string) {
    const { expandedRow } = this.state;
    this.setExpanded(
      expandedRow !== row
        ? row
        : null
    );
  }

  renderRows() {
    const { children } = this.props;
    const { expandedRow } = this.state;

    return (
      React.Children.map(children, (child: any) => (
        React.cloneElement(child, {
          key: child.props.title,
          onClick: () => this.handleExpand(child.props.title),
          open: expandedRow === child.props.title
        })
      ))
    );
  }


  render() {
    return (
      <Wrap>
        {this.renderRows()}
      </Wrap>
    );
  }
}

export { Row, RowProps, Props };
export default Accordion;
