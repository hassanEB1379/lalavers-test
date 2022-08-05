import React from "react";
import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";

const Register: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

Register.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Register;
