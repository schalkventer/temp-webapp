import React, { Component } from 'react';

import Presentation from './Presentation';
import ResizeWindowListener from './ResizeWindowListener';
import { colors } from './data.json';

interface Tvalues {
  fills: string[];
  componentNode: any;
  textNode: any;
  resizeListener?: any;
}

interface Tstate {
  labelOutside: boolean | null;
}

interface Tprops {
  ratio: number;
  title: string;
  amount: number;
  labelOutside: boolean | null;
  textNode: any;
  componentNode: any;
  fills: string[];
  index: number;
}
class Bar extends Component<Tprops, Tstate> {
  public values: Tvalues = {
    fills: colors,
    componentNode: React.createRef(),
    textNode: React.createRef(),
  };

  constructor(props) {
    super(props);
    this.state = {
      labelOutside: null,
    };
  }

  componentDidMount(): void {
    this.values = {
      ...this.values,
      resizeListener: new ResizeWindowListener(this.labelOutsideHandler.bind(this)),
    };
    this.labelOutsideHandler();
  }

  componentWillUnmount(): null {
    const { resizeListener } = this.values;

    if (resizeListener) {
      return resizeListener.stop();
    }

    return null;
  }

  labelOutsideHandler(): null {
    const { componentNode, textNode } = this.values;
    const { clientWidth: ColorBarWidth } = componentNode.current;
    const { clientWidth: TextWidth } = textNode.current;

    if (TextWidth >= ColorBarWidth) {
      this.setState({ labelOutside: true });
      return null;
    }

    this.setState({ labelOutside: false });
    return null;
  }

  render(): JSX.Element {
    const { state, props, values } = this;

    const passedProps = {
      ...props,
      ...state,
      labelOutside: state.labelOutside,
      textNode: values.textNode,
      componentNode: values.componentNode,
      fills: values.fills,
    };

    return <Presentation {...passedProps} />;
  }
}

export default Bar;
