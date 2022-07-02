import { FC } from 'react';

import './Counter.css';

export type Props = {
  count: number;
  onChange: (newCount: number) => void;
};

export const Counter: FC<Props> = (props) => {
  return (
    <div className="counter">
      <button onClick={() => props.onChange(props.count - 1)}>-</button>
      <div className="counter__count">{props.count}</div>
      <button onClick={() => props.onChange(props.count + 1)}>+</button>
    </div>
  );
};
