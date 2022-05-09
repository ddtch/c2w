import * as React from 'react';
import {KeyboardAvoidingView} from 'react-native';

interface Props {
  keyboardVerticalOffset?: number;
}

const KeyboardWrapper: React.FC<Props> = ({children, keyboardVerticalOffset = 64}) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      pointerEvents={'box-none'}
      style={{flex: 1}}
      behavior={'padding'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardWrapper;
