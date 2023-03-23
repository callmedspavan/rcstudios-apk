import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFormikContext} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AppPicker from '../AppPicker';
import AppErrorIcon from '../formComponents/AppErrorIcon';

export default function AppFormPicker({
  name,
  style,
  preCheck,
  conditionalFunction,
  ...otherProps
}) {
  const {setFieldValue, values, touched, errors} = useFormikContext();
  const handleSetPickedItem = item => {
    setFieldValue(name, item);
    conditionalFunction ? conditionalFunction(item) : null;
  };
  return (
    <View style={style}>
      {preCheck
        ? touched[name] && (
            <AppErrorIcon
              name={errors[name] ? 'error-outline' : 'check'}
              errors={errors[name]}
              style={styles.icon}
            />
          )
        : touched[name] &&
          errors[name] && (
            <AppErrorIcon
              name="error-outline"
              errors={errors[name]}
              style={styles.icon}
            />
          )}
      <AppPicker
        pickedItem={values[name]}
        setPickedItem={item => handleSetPickedItem(item)}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: hp(-1),
    right: wp(5),
  },
});
