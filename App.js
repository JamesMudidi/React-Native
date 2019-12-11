import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';

export default class FetchExample extends React.Component {

  constructor() {
    super();
    this.state = {
      number2: '',
      number1: '',
      operator: ''
    }
  }

  updateValue(text, field) {
    if (field == 'number1') {
      this.setState({
        number1: text
      })
    }
    else if (field == 'number2') {
      this.setState({
        number2: text
      })
    }
    else if (field == 'operator') {
      this.setState({
        operator: text
      })
    }
  }

  submit() {
    let postData = {
      expr: `${this.state.number1} ${this.state.operator} ${this.state.number2}`,
      precision: 14
    }
    console.warn(postData);

    url = `http://api.mathjs.org/v4/&{postData}`;

    fetch((url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn(responseJson.result);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.header]}>
          <Text style={[styles.headerFont]}> Simple Calculator </Text>
        </View>

        <View style={[styles.calculation]}>
          <View style={[styles.inputBox]}>

            <Text style={[styles.whiteFont]}> Number One </Text>

            <TextInput style={[styles.input]}
              style={[styles.input]}
              onChangeText={(text) => this.updateValue(text, 'number1')} />

            <Text style={[styles.whiteFont]}> Number Two </Text>

            <TextInput style={[styles.input]}
              style={[styles.input]}
              onChangeText={(text) => this.updateValue(text, 'number2')} />

            <Text style={[styles.whiteFont]}> Operation </Text>

            <View style={[styles.pickerBox]}>
              <Picker style={[styles.pickerText]} on={(text) => this.updateValue(text, 'operator')}>
                {/* <Picker.Item label="Operator" /> */}
                <Picker.Item label="Add" value="+" />
                <Picker.Item label="Subtrat" value="-" />
                <Picker.Item label="Multiply" value="*" />
                <Picker.Item label="Divide" value="/" />
              </Picker>
            </View>

            <TouchableOpacity onPress={() => this.submit()}>
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
    );
  }
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
    marginBottom: -5,
    marginLeft: 20,
    marginTop: -5,
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
    height: 35,
    width: '100%',
    color: '#ECBC13',
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    height: 35,
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
    fontSize: 15,
    padding: 10,
    height: 35,
    margin: 10,
    color: '#ECBC13',
    borderColor: '#ECBC13',
    borderWidth: 1,
    borderRadius: 20
  },
  calculation: {
    width: '95%',
    paddingTop: 15,
    height: 275,
    marginLeft: 10,
    marginTop: 60,
    backgroundColor: '#28353E',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  
    elevation: 5
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
    color: '#A88818',
    top: 10
  },
  resultsText: {
    fontSize: 12,
    color: '#000',
    top: 10
  },
  fail: {
    width: '95%',
    height: 120,
    backgroundColor: '#FFAEA0',
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  
    elevation: 5
  },
  pass: {
    width: '95%',
    height: 120,
    backgroundColor: '#FFE28A',
    marginLeft: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  
    elevation: 5
  },
});
