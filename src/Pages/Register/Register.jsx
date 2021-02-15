import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Register.css";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../Assets/fundologo.png";
import userServices from "../../Services/UserService";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  textField: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
    marginTop: theme.spacing(2),
    height: "5ch",
  },
  textFieldsec: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "62ch",
    height: "5ch",
  },
  linkPass: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
  },
  linkButton: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
    fontWeight: "bold",
    width: "30ch",
    color: "#1a73e8",
    height: "5ch",
  },
  loginBtn: {
    marginLeft: theme.spacing(20),
    backgroundColor: "#1a73e8",
    color: "#fff",
  },
});

class Register extends React.Component {
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

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your First Name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your Last Name.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]{3,}/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please enter your Confirm Password.";
    }

    if (typeof fields["confirmPassword"] !== "undefined") {
      if (
        !fields["confirmPassword"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["confirmPassword"] = "*Please enter secure and strong password.";
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
      let userData = {
        firstName: this.state.fields.firstName,
        lastName: this.state.fields.lastName,
        email: this.state.fields.email,
        password: this.state.fields.password,
        service: "advance",
      };
      this.props.history.push("/dashboard");
      userServices.register(userData).then((response) => {
        console.log(response);
        console.log(response.data);
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="register-main">
        <form onSubmit={this.submitLoginForm}>
          <div className="register-form">
            <div className="logo">
              <img src={Logo} alt="boohoo" className="img-responsive" />
            </div>
            <div className="trypto">
              <Typography variant="h7">Create your Fundoo Account</Typography>
            </div>
            <div>
              <div>
              <TextField
                label="FirstName"
                id="outlined-size-small"
                variant="outlined"
                name="firstName"
                size="small"
                value={this.state.fields.firstName}
                onChange={this.handleChange}
                className={classes.textField}
                helperText={this.state.errors.firstName}
                error={this.state.errors.firstName}
              />
              </div>
              <div>
              <TextField
                label="LastName"
                id="outlined-size-small"
                variant="outlined"
                name="lastName"
                size="small"
                value={this.state.fields.lastName}
                onChange={this.handleChange}
                className={classes.textField}
                helperText={this.state.errors.lastName}
                error={this.state.errors.lastName}
              />
              </div>
            </div>
            <div>
              <div>
              <TextField
                type="username"
                label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
               className={classes.textFieldsec}
                helperText={this.state.errors.email}
                error={this.state.errors.email}
              />
              </div>
              <div>
                  <div>
                  <TextField
                type="password"
                label="Password"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
               className={classes.textField}
                helperText={this.state.errors.password}
                error={this.state.errors.password}
              />
                  </div>
                  <div>
                  <TextField
                type="password"
                label="Confirm"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                name="confirmPassword"
                value={this.state.fields.confirmPassword}
                onChange={this.handleChange}
               className={classes.textField}
                helperText={this.state.errors.confirmPassword}
                error={this.state.errors.confirmPassword}
              />
                  </div>
              </div>
            </div>

            <div className="button">
              <div className="btn2">
                <Link
                  variant="body2"
                  to="/login"
                  className={classes.linkButton}
                  //onClick={this.handleLogin}
                >
                  Sign in instead..
                </Link>
              </div>
              <div className="btn3">
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  className={classes.loginBtn}
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
export default withRouter(withStyles(styles)(Register));
//this export connects the component to the reduxStore as well as allowing us to use the history props
