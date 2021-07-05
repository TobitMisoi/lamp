import React from 'react';
import styles from './styles';
import { makeStyles } from '@material-ui/styles';

interface Props {
  label: string;
  handleCheckboxChange: (label: string) => void;
}

interface State {
  isChecked: boolean;
}

const useStyles = makeStyles(styles);

const Checkbox: React.FC<Props> = (props) => {
  const { label } = props;
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState<State | false>(false);

  const toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = props;

    setIsChecked((isChecked) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };

  return (
    <div className={classes.checkbox}>
      <label htmlFor="">
        <input
          type="checkbox"
          name={label}
          id={label}
          value={label}
          onChange={toggleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
