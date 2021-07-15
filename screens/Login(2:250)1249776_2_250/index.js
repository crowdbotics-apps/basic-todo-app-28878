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
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_251}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f3/9a66/80b94bbff1c06ca229b71abba8a255b7"
          }}
          style={styles.ImageBackground_I2_251_2_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/144e/d1ac/f08c72793ff082a6d73dba7733214b5d"
          }}
          style={styles.ImageBackground_I2_251_2_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c38/4d2c/45d3c4bcdc3c5ce9f177de3cc53e55ea"
          }}
          style={styles.ImageBackground_I2_251_2_10}
        />
      </View>
      <View style={styles.View_2_252} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3749/53f6/3c7901e370566b795d5f5dc5c20c1ffe"
        }}
        style={styles.ImageBackground_2_253}
      />
      <View style={styles.View_2_254}>
        <Text style={styles.Text_2_254}>9:40</Text>
      </View>
      <View style={styles.View_2_255}>
        <Text style={styles.Text_2_255}>Welcome Back!</Text>
      </View>
      <View style={styles.View_2_256}>
        <View style={styles.View_I2_256_2_61} />
        <View style={styles.View_I2_256_2_62}>
          <Text style={styles.Text_I2_256_2_62}>Log In</Text>
        </View>
      </View>
      <View style={styles.View_2_257}>
        <Text style={styles.Text_2_257}>
          First task is to sign up, then you can check that off your ToDo list
          and feel accomplished
        </Text>
      </View>
      <View style={styles.View_2_305}>
        <Text style={styles.Text_2_305}>
          First task is to sign up, then you can check that off your ToDo list
          and feel accomplished
        </Text>
      </View>
      <View style={styles.View_2_304}>
        <Text style={styles.Text_2_304}>Forgot Password</Text>
      </View>
      <View style={styles.View_2_261}>
        <View style={styles.View_I2_261_2_235} />
        <View style={styles.View_I2_261_2_237}>
          <Text style={styles.Text_I2_261_2_237}>Enter your email</Text>
        </View>
      </View>
      <View style={styles.View_2_262}>
        <View style={styles.View_I2_262_2_235} />
        <View style={styles.View_I2_262_2_237}>
          <Text style={styles.Text_I2_262_2_237}>Password</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b2/e33c/31c17d4560c4136780621b21d4455ea3"
        }}
        style={styles.ImageBackground_2_280}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_2_251: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.551912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_251_2_2: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_251_2_6: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("0%")
  },
  ImageBackground_I2_251_2_10: {
    flexGrow: 1,
    width: wp("6.66666259765625%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.4098360655737707%")
  },
  View_2_252: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("42.69125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_253: {
    width: wp("85.86666666666667%"),
    height: hp("37.704918032786885%"),
    top: hp("-15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_2_254: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "flex-start"
  },
  Text_2_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_255: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("18.579234972677597%"),
    justifyContent: "flex-start"
  },
  Text_2_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_256: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("89.07103825136612%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_256_2_61: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_I2_256_2_62: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_256_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_257: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("25.683060109289617%"),
    justifyContent: "flex-start"
  },
  Text_2_257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_305: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("25.683060109289617%"),
    justifyContent: "flex-start"
  },
  Text_2_305: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_304: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("82.24043715846994%"),
    justifyContent: "flex-start"
  },
  Text_2_304: {
    color: "rgba(31, 116, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_261: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.466666666666668%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_261_2_235: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I2_261_2_237: {
    flexGrow: 1,
    width: wp("79.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("2.2295081550306293%"),
    justifyContent: "flex-start"
  },
  Text_I2_261_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_262: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.466666666666668%"),
    top: hp("72.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_262_2_235: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I2_262_2_237: {
    flexGrow: 1,
    width: wp("79.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("2.229509197297645%"),
    justifyContent: "flex-start"
  },
  Text_I2_262_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_280: {
    width: wp("41.333333333333336%"),
    height: hp("21.85792349726776%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
