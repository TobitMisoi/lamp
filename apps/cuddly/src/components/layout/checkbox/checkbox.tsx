import React from 'react';

interface Props {
  label: string;
  handleCheckboxChange: (label: string) => void;
}

interface State {
  isChecked: boolean;
}

class Checkbox extends React.Component<Props, State> {
  public state = {
    isChecked: false,
  };

  public render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <div className="checkbox">
        <label htmlFor="">
          <input
            type="checkbox"
            name={label}
            id=""
            value={label}
            onChange={this.toggleCheckboxChange}
          />
        </label>
      </div>
    );
  }

  private toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    //   TODO: //#endregion25
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.setState(({ isChecked }: any) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };
}

export default Checkbox;
