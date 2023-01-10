import React, { useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
}
