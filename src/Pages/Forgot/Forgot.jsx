import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Forgot.css";
import { Link, withRouter } from "react-router-dom";
import Logoo from "../../Assets/fundologo.png"
import userServices from "../../Services/UserService";
const styles = (theme) => ({
  roott: {
    display: "flex",
    flexWrap: "wrap",
  },
  textFields: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "50ch",
    marginTop: theme.spacing(2),
    height: "10ch",
  },
  linkButtonn: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
    fontWeight: "bold",
  },
  loginBtnn: {
    //marginLeft: theme.spacing(22),
    backgroundColor: "#1a73e8",
    marginRight: theme.spacing(2),
    color: "#fff",
  },
  logLik: {
    color: "#1a73e8",
    fontWeight: "bold",
    textAlign: "left",
    width: "30ch",
    marginLeft: theme.spacing(2),
  },
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
    // if (this.validationForm(fields.state)) {
    // }
  }

  validationForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  submitLoginForm = (e) => {
    e.preventDefault();
    if (this.validationForm()) {
      let userForgot = {
        email: this.state.fields.email,
      };
      userServices.forgot(userForgot).then((response) => {
        console.log(response);
        this.props.history.push("/login");
        console.log(response.data);
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.submitLoginForm}>
          <div id="forgot">
            <div id="forgot-logo">
              <img src={Logoo} alt="booh" className="img" />
            </div>
            <div id="signin">
              <Typography variant="h6">Find Your email</Typography>
            </div>
            <div id="heading">
              <Typography variant="h7">
                Enter your phone number or recovery email
              </Typography>
            </div>

            <div className={classes.roott}>
              <TextField
                label="Username"
                id="outlined-basic"
                className={classes.textFields}
                variant="outlined"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
                helperText={this.state.errors.email}
                error={this.state.errors.email}
              />
            </div>
            <div className="forgot-btn">
              <div className="forgot-btnn">
                <Link className={classes.logLik} to="/login">
                  Login instead..
                </Link>
              </div>
              <div className="Logbtn1">
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  className={classes.loginBtnn}
                >
                  next
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(Login));
