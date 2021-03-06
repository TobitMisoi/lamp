import * as React from 'react';

interface State {
  selected: string;
}

interface Props {
  options: string[];
  handleOnChange: (value: string) => void;
}

class Selectbox extends React.Component<Props, State> {
  public state = {
    selected: '',
  };

  public render() {
    const { options } = this.props;

    return (
      <select name="" id="" onChange={(e) => this.onChange(e)}>
        {this.createOptions(options)}
      </select>
    );
  }

  private createOptions = (options: string[]) =>
    options.map((o) => (
      <option value={o} key={o}>
        {o}
      </option>
    ));

  private onChange = (e: { target: { value: string } }) => {
    this.props.handleOnChange(e.target.value);
  };
}

export default Selectbox;
