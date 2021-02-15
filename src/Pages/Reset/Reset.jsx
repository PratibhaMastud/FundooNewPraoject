import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Reset.css";
import { withRouter, useParams } from "react-router-dom";
import Loog from "../../Assets/fundologo.png";
import userServices from "../../Services/UserService";

const styles = (theme) => ({
  roottt: {
    display: "flex",
    flexWrap: "wrap",
  },
  textFieldss: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "50ch",
    marginTop: theme.spacing(1),
    height: "10ch",
  },
  linkButton: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
    fontWeight: "bold",
  },
  // loginBtnnn: {
  //   marginLeft: theme.spacing(22),
  //   backgroundColor: "#1a73e8",
  //   ,
  // },
  btnstyle: {
    //marginLeft: theme.spacing(22),
    backgroundColor: "#1a73e8",
    color: "#fff",
    marginRight: theme.spacing(2),
  },
});

class Resett extends React.Component {
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
  }

  validationForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["newPassword"]) {
      formIsValid = false;
      errors["newPassword"] = "*Please enter your password.";
    }

    if (typeof fields["newPassword"] !== "undefined") {
      if (
        !fields["newPassword"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["newPassword"] = "* Please enter secure password.";
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
      let userReset = {
        //email: this.state.fields.email,
        newPassword: this.state.fields.newPassword,
      };
      const token = this.props.match.params.token;
      console.log(token);
      userServices.reset(userReset, token).then((response) => {
        console.log(response);
        //console.log(token);
        console.log(this.props);
        console.log(response.data);
        this.props.history.push("/login");
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.submitLoginForm}>
          <div id="reset">
            <div id="reset-logo">
              <img src={Loog} alt="booh" className="img" />
            </div>
            <div id="reset-in">
              <Typography variant="h5">What's your name?</Typography>
            </div>
            <div id="reset-heading">
              <Typography variant="h8">
                Enter the name on Google Account
              </Typography>
            </div>

            <div className={classes.roottt}>
              <TextField
                label="password"
                id="outlined-basic"
                className={classes.textFieldss}
                variant="outlined"
                name="newPassword"
                value={this.state.fields.newPassword}
                onChange={this.handleChange}
                helperText={this.state.errors.newPassword}
                error={this.state.errors.newPassword}
              />
            </div>
            <div className="button">
              <Button
                variant="contained"
                size="medium"
                type="submit"
                className={classes.btnstyle}
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(Resett));
