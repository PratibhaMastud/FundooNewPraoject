import React from "react";
import { Typography, Button } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';
//import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
//import axios from 'axios';
import Logooo from "../../Assets/fundologo.png";
import userServices from "../../Services/UserService";

//const useStyles = makeStyles((theme) => ({
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "50ch",
    marginTop: theme.spacing(2),
    height: "10ch",
  },
  textFieldsec: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "50ch",
    height: "10ch",
  },
  logLink: {
    color: "#1a73e8",
    fontWeight: "bold",
    textAlign: "left",
    width: "30ch",
    marginLeft: theme.spacing(2),
  },
  linkPass: {
    textAlign: "left",
    color: "#1a73e8",
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
    width: "30ch",
  },
  linkButton: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
    fontWeight: "bold",
  },
  logBtn: {
    backgroundColor: "#1a73e8",
    color: "#fff",
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
    // if (this.validationForm()) {
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
        errors["password"] = "* Please enter secure password.";
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
      let userLogin = {
        email: this.state.fields.email,
        password: this.state.fields.password,
      };
      userServices
        .login(userLogin)
        .then((response) => {
          localStorage.setItem("token",response.data.id);
          this.props.history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.submitLoginForm}>
          <div id="register">
            <div id="logo">
              <img src={Logooo} alt="booh" className="img" />
            </div>
            <div id="sign">
              <Typography variant="h6">SignIn</Typography>
            </div>
            <div id="head">
              <Typography variant="h7">Use Your Fundoo account</Typography>
            </div>

            <div className={classes.root}>
              <TextField
                label="Username"
                id="outlined-basic"
                className={classes.textField}
                variant="outlined"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
                helperText={this.state.errors.email}
                error={this.state.errors.email}
              />
            </div>
            <div className={classes.root}>
              <TextField
                label="Password"
                id="outlined-basic"
                className={classes.textFieldsec}
                variant="outlined"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
                helperText={this.state.errors.password}
                error={this.state.errors.password}
              />
            </div>
            <div className="linkpass">
              <Link className={classes.linkPass} to="/forgot">
                Forgot Password?
              </Link>
            </div>

            <div className="LogDivbutt">
              <div className="btnn2">
                <Link className={classes.logLink} to="/register">
                  Create account
                </Link>
              </div>
              <div className="Logbtn3">
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  className={classes.logBtn}
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
//export default withRouter((withStyles(Login)));
//export default connect()(withRouter(Login))(withStyles(styles)(Login));
export default withRouter(withStyles(styles)(Login));
//this export connects the component to the reduxStore as well as allowing us to use the history props
