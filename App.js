import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      inputValue: 0,
    };
  }

  handleInput = (value) => {
    let inputLenght = this.state.inputValue.length;
    if (this.state.inputValue == 0) {
      this.setState({ inputValue: value });
    } else if (inputLenght == 36) {
      alert("Your input is too long");
    } else {
      this.setState({ inputValue: this.state.inputValue + "" + value });
    }
  };

  handleDelete = (value) => {
    let inputLenght = this.state.inputValue.length;
    if (inputLenght >= 2) return this.setState({ inputValue: this.state.inputValue.slice(0, -1) });
    else return this.setState({ inputValue: 0 });
  };

  handleCalculate = () => {
    let result = eval(this.state.inputValue);
    this.setState({ inputValue: result });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#212121" }}>
        <StatusBar backgroundColor='#212121' barStyle='light-content' />
        <View style={{ flex: 0.5, justifyContent: "flex-end", marginRight: 40 }}>
          <Text style={{ color: "#fff", fontSize: 50, textAlign: "right", paddingBottom: 50 }}>{this.state.inputValue}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {/* Row 1 */}
          <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={{ color: "white", fontSize: 24, textAlign: "right", marginRight: 40 }} onPress={() => this.setState({ inputValue: 0 })}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
          {/* Row 2 */}
          <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput("(")}>
                (
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput(")")}>
                )
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput("/")}>
                /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput("*")}>
                x
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
          {/* Row 3 */}
          <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(7)}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(8)}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(9)}>
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput("+")}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
          {/* Row 4 */}
          <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(4)}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(5)}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(6)}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleInput("-")}>
                -
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
          {/* Row 5 */}
          <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(1)}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(2)}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(3)}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.operatorNumber} onPress={() => this.handleCalculate()}>
                =
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
          {/* Row 6 */}
          <View style={{ flexDirection: "row", justifyContent: "flex-start", paddingVertical: 20 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.numberButton} onPress={() => this.handleInput(0)}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={{ color: "white", fontSize: 24, textAlign: "center", fontWeight: "bold" }} onPress={() => this.handleInput(".")}>
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 2 }}>
              <Text style={{ color: "red", fontSize: 24, textAlign: "center" }} onPress={() => this.handleDelete()}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Row */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberButton: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  operatorNumber: {
    color: "orange",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default App;
