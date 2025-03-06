"use client";
import { SubmissionFormProvider } from "@/store/context/submitionFormContext";

const FormProviders = ({ children }: { children: React.ReactNode }) => {
  return <SubmissionFormProvider>{children}</SubmissionFormProvider>;
};

export default FormProviders;
