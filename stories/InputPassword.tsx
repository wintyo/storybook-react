import { FC } from 'react';

export type Props = {
  password: string;
  /** パスワード表示フラグ */
  isShow: boolean;
  onChangePassword: (newPassword: string) => void;
  onChangeIsShow: (newIsShow: boolean) => void;
};

export const InputPassword: FC<Props> = (props) => {
  return (
    <div>
      <input
        data-testid="input-password"
        value={props.password}
        type={props.isShow ? 'text' : 'password'}
        onChange={(event) => {
          props.onChangePassword(event.currentTarget.value);
        }}
      />
      <button
        data-testid="toggle-show-button"
        onClick={() => {
          props.onChangeIsShow(!props.isShow);
        }}
      >
        {props.isShow ? '非表示' : '表示'}
      </button>
    </div>
  );
};
