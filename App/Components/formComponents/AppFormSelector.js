import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFormikContext} from 'formik';

import AppCheckbox from '../AppCheckbox';
import AppText from '../AppText';
import AppErrorIcon from './AppErrorIcon';
import defaultStyles from '../../Config/defaultStyles';

export default function AppFormSelector({
  name,
  title,
  selectionList,
  check,
  style,
}) {
  const [selected, setSelected] = useState(check ? check : '');
  const {setFieldValue, errors, touched} = useFormikContext();
  const handlePress = item => {
    setSelected(item);
    setFieldValue(name, item);
  };
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>{title}</AppText>
      {touched[name] && errors[name] && (
        <AppErrorIcon
          name="error-outline"
          errors={errors[name]}
          style={styles.errorIcon}
        />
      )}
      <FlatList
        style={styles.flatList}
        data={selectionList}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View style={styles.selectionItem}>
            <AppCheckbox
              checked={item === selected ? true : false}
              onPress={() => handlePress(item)}
            />
            <AppText style={styles.selectionTag}>{item}</AppText>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  errorIcon: {
    position: 'absolute',
    right: wp(5),
    top: 0,
  },
  selectionItem: {
    width: wp(45),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(5.5),
  },
  selectionTag: {
    fontSize: 14,
    marginLeft: wp(4),
    color: defaultStyles.colors.dark,
  },
});
