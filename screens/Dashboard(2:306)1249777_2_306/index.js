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
      <View style={styles.View_2_356} />
      <View style={styles.View_7_37}>
        <Text style={styles.Text_7_37}>Welcome Amigurumi Grogu</Text>
      </View>
      <View style={styles.View_2_307}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f3/9a66/80b94bbff1c06ca229b71abba8a255b7"
          }}
          style={styles.ImageBackground_I2_307_2_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/144e/d1ac/f08c72793ff082a6d73dba7733214b5d"
          }}
          style={styles.ImageBackground_I2_307_2_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c38/4d2c/45d3c4bcdc3c5ce9f177de3cc53e55ea"
          }}
          style={styles.ImageBackground_I2_307_2_10}
        />
      </View>
      <View style={styles.View_2_308} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3749/53f6/3c7901e370566b795d5f5dc5c20c1ffe"
        }}
        style={styles.ImageBackground_2_309}
      />
      <View style={styles.View_2_310}>
        <Text style={styles.Text_2_310}>9:40</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4769/dd0a/677cda2a0e02c94e7f93c58a0b0f74c9"
        }}
        style={styles.ImageBackground_2_358}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd8e/286c/bd822d71e3ffbeed2ff124ae421ea781"
        }}
        style={styles.ImageBackground_7_38}
      />
      <View style={styles.View_7_77}>
        <Text style={styles.Text_7_77}>Tasks List</Text>
      </View>
      <View style={styles.View_7_78} />
      <View style={styles.View_7_82}>
        <View style={styles.View_7_79}>
          <View style={styles.View_I7_79_2_235} />
          <View style={styles.View_I7_79_2_237}>
            <Text style={styles.Text_I7_79_2_237}>Task #1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_83}>
        <View style={styles.View_7_84}>
          <View style={styles.View_I7_84_2_235} />
          <View style={styles.View_I7_84_2_237}>
            <Text style={styles.Text_I7_84_2_237}>Task #3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_87}>
        <View style={styles.View_7_88}>
          <View style={styles.View_I7_88_2_235} />
          <View style={styles.View_I7_88_2_237}>
            <Text style={styles.Text_I7_88_2_237}>Task #2</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/294e/5bfa/53401d04e9416e3ce7d39d54c8b5183a"
        }}
        style={styles.ImageBackground_7_93}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_2_356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_7_37: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("30.601092896174865%"),
    justifyContent: "flex-start"
  },
  Text_7_37: {
    color: "rgba(240, 244, 243, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_307: {
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
  ImageBackground_I2_307_2_2: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_307_2_6: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("0%")
  },
  ImageBackground_I2_307_2_10: {
    flexGrow: 1,
    width: wp("6.66666259765625%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.4098360655737707%")
  },
  View_2_308: {
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
  ImageBackground_2_309: {
    width: wp("85.86666666666667%"),
    height: hp("37.704918032786885%"),
    top: hp("-15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_2_310: {
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
  Text_2_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_358: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("15.846994535519126%")
  },
  ImageBackground_7_38: {
    width: wp("60%"),
    height: hp("19.53551912568306%"),
    top: hp("40.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%")
  },
  View_7_77: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6%"),
    top: hp("63.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_7_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_78: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("33.60655737704918%"),
    minHeight: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("68.44262295081968%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_82: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("70.76502732240438%")
  },
  View_7_79: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_79_2_235: {
    flexGrow: 1,
    width: wp("68.87111002604168%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.595540364583332%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I7_79_2_237: {
    flexGrow: 1,
    width: wp("63.361425781250006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.648177083333334%"),
    top: hp("2.1420765444229204%"),
    justifyContent: "flex-start"
  },
  Text_I7_79_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_83: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("89.61748633879782%")
  },
  View_7_84: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_84_2_235: {
    flexGrow: 1,
    width: wp("68.87111002604168%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.595540364583332%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I7_84_2_237: {
    flexGrow: 1,
    width: wp("63.361425781250006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.648177083333334%"),
    top: hp("2.1420755021559046%"),
    justifyContent: "flex-start"
  },
  Text_I7_84_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_87: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("80.19125683060109%")
  },
  View_7_88: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_88_2_235: {
    flexGrow: 1,
    width: wp("68.87111002604168%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.595540364583332%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I7_88_2_237: {
    flexGrow: 1,
    width: wp("63.361425781250006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.648177083333334%"),
    top: hp("2.142075502155919%"),
    justifyContent: "flex-start"
  },
  Text_I7_88_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_93: {
    width: wp("6.458333333333334%"),
    height: hp("3.308572404371585%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
