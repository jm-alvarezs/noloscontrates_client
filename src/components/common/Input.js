import React, { Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import ReactDOM from "react-dom";
import InfiniteCalendar from "react-infinite-calendar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-infinite-calendar/styles.css";

moment.locale("es", {
  monthsShort: "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_")
});

class Input extends Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.state = {
      value: this.getValue(),
      file: "",
      showPicker: false
    };
  }

  getValue() {
    if (this.props.value) {
      return this.props.value;
    }
    if (this.props.type === "date" && !this.props.value) {
      return moment(new Date()).format("DD MMM YYYY");
    }
    return "";
  }

  getDate() {
    return this.props.value
      ? moment(this.props.value, "DD MMM YYYY").toDate()
      : new Date();
  }

  //Modifier: An action to make changes in the parent component or through Redux
  handleChange(evt) {
    let value;
    if (this.props.as === "select") {
      value = ReactDOM.findDOMNode(this.select).value;
    } else {
      value = evt.target.value;
    }
    this.setState({ value });
    if (this.props.type === "file") {
      let data = document.querySelector("[type=file]").files;
      if (!this.props.multiple) {
        data = data[0];
      }
      value = data;
    }
    this.handleModifier(value);
  }

  handleModifier(value) {
    if (this.props.modifier) {
      if (this.props.args !== undefined) {
        if (Array.isArray(this.props.args)) {
          this.props.modifier(...this.props.args, value);
        } else this.props.modifier(this.props.args, value);
      } else this.props.modifier(value);
    }
  }

  selectDate(date) {
    this.setDate(date);
    this.togglePicker();
  }

  setDate(date) {
    let value = date;
    this.setState({ value });
    this.handleModifier(value);
  }

  togglePicker() {
    this.setState({
      showPicker: !this.state.showPicker
    });
  }

  componentDidMount() {
    if (this.props.type === "date" && this.props.value === "") {
      let date = this.getDate();
      this.setDate(date);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.setState({ value: this.getValue() });
  }

  renderCalendar() {
    if (this.state.showPicker)
      return (
        <InfiniteCalendar
          selected={this.getDate()}
          minDate={new Date(2000, 0, 1)}
          width={285}
          height={285}
          className="mt-2"
          locale={{
            blank: "Selecciona una fecha...",
            headerFormat: "DD MMM 20YY",
            todayLabel: { long: "Hoy" },
            weekdays: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            weekStartsOn: 0
          }}
          theme={{
            selectionColor: "#FC6767",
            textColor: {
              default: "#333",
              active: "#FFF"
            },
            weekdayColor: "#fff",
            headerColor: "#FC6767",
            floatingNav: {
              background: "#FC6767",
              color: "#FFF",
              chevron: "#FFA726"
            }
          }}
          displayOptions={{
            showTodayHelper: false
          }}
          onSelect={this.selectDate}
        />
      );
    return null;
  }

  renderLabel() {
    if (this.props.label)
      return <Form.Label className="mt-3">{this.props.label}</Form.Label>;
  }

  render() {
    if (this.props.type !== "date")
      return (
        <Fragment>
          {this.renderLabel()}
          <Form.Control
            className={this.props.className}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={this.state.value}
            style={this.props.styles}
            onKeyPress={this.props.onKeyPress ? this.props.onKeyPress : null}
            multiple={this.props.multiple ? this.props.multiple : false}
            accept={this.props.accept}
          />
        </Fragment>
      );
    return (
      <>
        <Row className="ml-0 mr-0">
          <Col xs={3} xl={2} className="pl-0 text-right">
            <Button
              variant="outline-secondary"
              className="d-inline-block"
              onClick={this.togglePicker}
            >
              <i className="fas fa-calendar" />
            </Button>
          </Col>
          <Col xs={9} xl={10}>
            <Form.Control              
              className={
                (this.props.className ? this.props.className : "") +
                " ml-2 d-inline-block"
              }
              type="text"
              disabled={true}
              value={this.state.value}
            />
          </Col>
        </Row>
        {this.renderCalendar()}
      </>
    );
  }
}

export default Input;
