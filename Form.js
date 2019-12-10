import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';

const Form = ({props}) => {
    return (
      <View style={styles.container} onSubmit={props.onSubmit}>
        <View style={[styles.header]}>
          <Text style={[styles.headerFont]}> Simple Calculator </Text>
        </View>
        <View style={[styles.section]}>
          <View style={[styles.calculation]}>
            <View style={[styles.inputBox]}>
              <Text style={[styles.whiteFont]}> Number One </Text>
              <TextInput style={[styles.input]} />
              <Text style={[styles.whiteFont]}> Number Two </Text>
              <TextInput style={[styles.input]} />
              <Text style={[styles.whiteFont]}> Operation </Text>
              <View style={[styles.pickerBox]}>
                <Picker style={[styles.pickerText]}>
                  <Picker.Item label="Add" value="+" />
                  <Picker.Item label="Subtrat" value="-" />
                  <Picker.Item label="Multiply" value="*" />
                  <Picker.Item label="Divide" value="/" />
                </Picker>
              </View>
              <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <Text style={[styles.button]}> Calculate </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.results]}>
            <Text style={[styles.resultsTitle]}> Results </Text>
          </View>
          <View style={[styles.fail]}>
            <Text style={[styles.resultsText]}> Results </Text>
          </View>
          <View style={[styles.pass]}>
            <Text style={[styles.resultsText]}> Results </Text>
          </View>
        </View>
      </View >
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    top: 78
  },
  header: {
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#28353E',
  },
  headerFont: {
    top: 30,
    fontSize: 30,
    fontWeight: '400',
    color: '#fff'
  },
  whiteFont: {
    color: '#fff',
    fontSize: 13
  },
  inputBox: {
    margin: 5,
    color: '#fff',
    fontSize: 13,
    textDecorationColor: '#fff'
  },
  pickerBox: {
    margin: 10,
    borderColor: '#ECBC13',
    borderWidth: 1,
    borderRadius: 20,
  },
  pickerText: {
    height: 40,
    width: '100%',
    color: '#ECBC13',
  },
  button: {
    margin: 10,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 100,
    color: '#000',
    fontSize: 15,
    backgroundColor: '#A88818',
    borderColor: '#ECBC13',
    borderWidth: 1,
    borderRadius: 20
  },
  input: {
    padding: 10,
    height: 40,
    margin: 10,
    borderColor: '#ECBC13',
    borderWidth: 1,
    borderRadius: 20
  },
  calculation: {
    width: '95%',
    height: 300,
    margin: 10,
    backgroundColor: '#28353E',
    marginBottom: 10,
    borderRadius: 5
  },
  results: {
    width: '95%',
    height: 40,
    marginLeft: 10,
    backgroundColor: '#28353E',
    marginBottom: 5,
    borderRadius: 5,
  },
  resultsTitle: {
    fontSize: 15,
    color: '#28353E',
    top: 10
  },
  resultsText: {
    fontSize: 15,
    color: '#000',
    top: 10
  },
  fail: {
    width: '95%',
    height: 110,
    backgroundColor: '#FFAEA0',
    marginLeft: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  pass: {
    width: '95%',
    height: 110,
    backgroundColor: '#FFE28A',
    marginLeft: 10,
    borderRadius: 5,
  }
});

export default Form;
