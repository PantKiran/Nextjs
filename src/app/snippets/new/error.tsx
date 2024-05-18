"use client";
import React from "react";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error }: ErrorProps) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
