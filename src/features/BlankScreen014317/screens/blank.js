import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_11: true,
    CheckBox_12: true,
    CheckBox_13: true,
    TextInput_15: "",
    TextInput_16: "",
    DateTimePicker_17: new Date("")
  }

  render = () => (
    <ImageBackground>
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_11}
        onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_12}
        onPress={nextChecked => this.setState({ CheckBox_12: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_13}
        onPress={nextChecked => this.setState({ CheckBox_13: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_15}
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        style={styles.TextInput_16}
        value={this.state.TextInput_16}
        onChangeText={nextValue => this.setState({ TextInput_16: nextValue })}
      />
      <DateTimePicker
        date={this.state.DateTimePicker_17}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_17: selectedDate })
        }
      />
      <Text>Sample text content</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  View_2: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch",
    backgroundSize: "auto"
  },

  View_3: {},
  View_4: {},
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  Button_6: {},
  View_4: {},
  Switch_10: { alignSelf: "flex-start" },
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  Button_6: {},
  View_4: {},
  Switch_10: { alignSelf: "flex-start" },
  View_1: {},
  CheckBox_11: {},
  View_1: {},
  CheckBox_11: {},
  CheckBox_12: {},
  CheckBox_13: {},
  ImageBackground_1: {},
  CheckBox_11: {},
  CheckBox_12: {},
  CheckBox_13: {},
  TextInput_15: { textAlign: "center" },
  TextInput_16: { textAlign: "center" },
  DateTimePicker_17: {},
  Text_18: {}
})
