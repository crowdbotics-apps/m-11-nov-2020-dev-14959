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

  state = { Switch_10: true }

  render = () => (
    <View>
      <View style={styles.View_2}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Switch
            style={styles.Switch_10}
            value={this.state.Switch_10}
            onValueChange={nextChecked =>
              this.setState({ Switch_10: nextChecked })
            }
          />
        </View>
      </View>
    </View>
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
  Switch_10: { alignSelf: "flex-start" }
})
