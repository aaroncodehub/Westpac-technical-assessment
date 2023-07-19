import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./formStyles";
import LayoutContainer from "../layout/LayoutContainer";
import ResetPasswordText from "../../constants/string";

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .oneOf([ResetPasswordText.oldPassword], "the old password is not correct")
    .required("Old password is required"),
  newPassword: yup
    .string()
    .test(
      "verify-new-password-rules",
      (d) =>
        `${d.path} must contain at least 8 characters, including one number and two special characters or be greater than 15 characters with no restriction`,
      (value) => {
        const passwordRules =
          /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (value && (value.length >= 15 || passwordRules.test(value))) {
          return true;
        }
        return false;
      },
    )
    .required("New Password is required"),
  retypeNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "New passwords must match")
    .required("Re-type new Password is required"),
});

function ResetPassword() {
  const classes = useStyles();
  const [openSuccessMessage, setOpenSuccessMessage] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      retypeNewPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setOpenSuccessMessage(true);
      console.log("validated values ->", values);
    },
  });

  return (
    <LayoutContainer>
      <div>
        {openSuccessMessage && (
          <MuiAlert severity="success">
            {ResetPasswordText.changedPasswordMessage}
          </MuiAlert>
        )}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <TextField
            fullWidth
            type="password"
            id="old-password"
            name="oldPassword"
            label="old password"
            variant="outlined"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
          />
          <TextField
            type="password"
            id="new-password"
            name="newPassword"
            label="new password"
            variant="outlined"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            type="password"
            id="retype-new-password"
            name="retypeNewPassword"
            label="re-type new password"
            variant="outlined"
            value={formik.values.retypeNewPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.retypeNewPassword &&
              Boolean(formik.errors.retypeNewPassword)
            }
            helperText={
              formik.touched.retypeNewPassword &&
              formik.errors.retypeNewPassword
            }
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          aria-label="submit new password"
        >
          Submit
        </Button>
      </form>
    </LayoutContainer>
  );
}

export default React.memo(ResetPassword);
