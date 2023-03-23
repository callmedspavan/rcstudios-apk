import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from '../AppButton';

export default function AppFormSubmitButton({title, style}) {
  const {handleSubmit} = useFormikContext();
  return <AppButton onPress={handleSubmit} style={style} title={title} />;
}
