import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
// formik
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Profile() {
  let theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    conatctnumber: Yup.string()
      .matches(/^[0-9]+$/, "Contact Number must be digits only")
      .required("Contact Number is required"),
    adress1: Yup.string().required("Address One is required"),
    adderss2: Yup.string(),
  });

  const handleClick = () => {
    setOpen(true);
  };
  let formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      conatctnumber: "",
      adress1: "",
      adderss2: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleClick();
    },
    validationSchema,
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Box>
        <Box sx={{ padding: 1 }}>
          <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
            CREATE USER
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
            }}
          >
            Create a New User Profile
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                sx={{ flex: 1, marginBottom: "20px" }}
                label="First Name"
                variant="outlined"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.name}
                </Alert>
              ) : (
                ""
              )}
              <TextField
                sx={{ flex: 1, marginBottom: "20px" }}
                label="Last Name"
                variant="outlined"
                id="lastname"
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.lastname}
                </Alert>
              ) : (
                ""
              )}
            </Box>
            <Stack spacing={2}>
              <TextField
                label="Emile"
                variant="outlined"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.email}
                </Alert>
              ) : (
                ""
              )}
              <TextField
                label="Contact Number"
                variant="outlined"
                id="conatctnumber"
                name="conatctnumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.conatctnumber && formik.touched.conatctnumber ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.conatctnumber}
                </Alert>
              ) : (
                ""
              )}
              <TextField
                label="Address One"
                variant="outlined"
                id="adress1"
                name="adress1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.adress1 && formik.touched.adress1 ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.adress1}
                </Alert>
              ) : (
                ""
              )}
              <TextField
                label="Address Two"
                variant="outlined"
                id="adderss2"
                name="adderss2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.adderss2 && formik.touched.adderss2 ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBlock: "20px" }}
                >
                  {formik.errors.adderss2}
                </Alert>
              ) : (
                ""
              )}
            </Stack>
            <FormControl fullWidth sx={{ marginTop: "40px" }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Role
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"Admin"}>Admin</option>
                <option value={"Manger"}>Manger</option>
                <option value={"User"}>User</option>
              </NativeSelect>
            </FormControl>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              sx={{ marginTop: "40px" }}
            >
              <Button
                type="submit"
                variant="text"
                sx={{
                  backgroundColor: "#90CAF9",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                Create New User
              </Button>

              <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Account Created Successfully
                </Alert>
              </Snackbar>
            </Stack>
          </Box>
        </form>
      </Box>
    </>
  );
}
