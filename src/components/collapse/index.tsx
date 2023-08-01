import classnames from 'classnames';
import CollapseProps from "./collapse.types";

import './styles.scss'

export const Collapse: React.FC<CollapseProps> = ({
  className = "",
  children = "some...",
}) => {
  //* ClassNames
  const componentClassName = 'collapse'
  const CollapseClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={CollapseClassName}>
      {children}
    </div>
  );
};