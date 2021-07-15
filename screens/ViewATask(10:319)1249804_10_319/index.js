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
      <View style={styles.View_10_320}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f3/9a66/80b94bbff1c06ca229b71abba8a255b7"
          }}
          style={styles.ImageBackground_I10_320_2_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/144e/d1ac/f08c72793ff082a6d73dba7733214b5d"
          }}
          style={styles.ImageBackground_I10_320_2_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c38/4d2c/45d3c4bcdc3c5ce9f177de3cc53e55ea"
          }}
          style={styles.ImageBackground_I10_320_2_10}
        />
      </View>
      <View style={styles.View_10_321} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3749/53f6/3c7901e370566b795d5f5dc5c20c1ffe"
        }}
        style={styles.ImageBackground_10_322}
      />
      <View style={styles.View_10_323}>
        <Text style={styles.Text_10_323}>9:40</Text>
      </View>
      <View style={styles.View_10_324} />
      <View style={styles.View_10_353}>
        <View style={styles.View_10_354}>
          <View style={styles.View_I10_354_2_235} />
          <View style={styles.View_I10_354_2_237}>
            <Text style={styles.Text_I10_354_2_237}>Task Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_329}>
        <View style={styles.View_10_330}>
          <View style={styles.View_I10_330_2_235} />
          <View style={styles.View_I10_330_2_237}>
            <Text style={styles.Text_I10_330_2_237}>Task Date</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_332} />
      <View style={styles.View_10_334}>
        <View style={styles.View_I10_334_2_61} />
        <View style={styles.View_I10_334_2_62}>
          <Text style={styles.Text_I10_334_2_62}>Mark Complete</Text>
        </View>
      </View>
      <View style={styles.View_10_357}>
        <View style={styles.View_I10_357_2_61} />
        <View style={styles.View_I10_357_2_62}>
          <Text style={styles.Text_I10_357_2_62}>Delete Task</Text>
        </View>
      </View>
      <View style={styles.View_10_335}>
        <View style={styles.View_I10_335_2_61} />
        <View style={styles.View_I10_335_2_62}>
          <Text style={styles.Text_I10_335_2_62}>Return Home</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10_320: {
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
  ImageBackground_I10_320_2_2: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10_320_2_6: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("0%")
  },
  ImageBackground_I10_320_2_10: {
    flexGrow: 1,
    width: wp("6.66666259765625%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.4098360655737707%")
  },
  View_10_321: {
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
  ImageBackground_10_322: {
    width: wp("85.86666666666667%"),
    height: hp("37.704918032786885%"),
    top: hp("-15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_10_323: {
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
  Text_10_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_324: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("75.27322404371584%"),
    minHeight: hp("75.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_353: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("9.836065573770492%")
  },
  View_10_354: {
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
  View_I10_354_2_235: {
    flexGrow: 1,
    width: wp("68.87111002604168%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.595540364583334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I10_354_2_237: {
    flexGrow: 1,
    width: wp("63.361425781250006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.648177083333337%"),
    top: hp("2.142075502155908%"),
    justifyContent: "flex-start"
  },
  Text_I10_354_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_329: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("21.584699453551913%")
  },
  View_10_330: {
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
  View_I10_330_2_235: {
    flexGrow: 1,
    width: wp("68.87111002604168%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.595540364583334%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I10_330_2_237: {
    flexGrow: 1,
    width: wp("63.361425781250006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.648177083333337%"),
    top: hp("2.142075502155908%"),
    justifyContent: "flex-start"
  },
  Text_I10_330_2_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_332: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("32.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_334: {
    width: wp("69.06666666666666%"),
    minWidth: wp("69.06666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_334_2_61: {
    flexGrow: 1,
    width: wp("69.06666666666666%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_I10_334_2_62: {
    flexGrow: 1,
    width: wp("69.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_334_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_357: {
    width: wp("69.06666666666666%"),
    minWidth: wp("69.06666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("82.10382513661202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_357_2_61: {
    flexGrow: 1,
    width: wp("69.06666666666666%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_I10_357_2_62: {
    flexGrow: 1,
    width: wp("69.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_357_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_335: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("98.224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_335_2_61: {
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
  View_I10_335_2_62: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I10_335_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
