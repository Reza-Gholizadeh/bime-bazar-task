import { z } from "zod";

const validateIranianNationalId = (value: string): boolean => {
  const nationalId = value.replace(/\D/g, "");

  if (nationalId.length !== 10) return false;

  if (/^(\d)\1+$/.test(nationalId)) return false;

  const check = +nationalId[9];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += +nationalId[i] * (10 - i);
  }

  const remainder = sum % 11;

  return (
    (remainder < 2 && remainder === check) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};

const validateIranianMobileNumber = (value: string): boolean => {
  return /^09\d{9}$/.test(value.replace(/\D/g, ""));
};

export const driverFormSchema = z.object({
  nationalId: z
    .string()
    .min(10, { message: "کدملی وارد شده معتبر نیست." })
    .max(10, { message: "کدملی وارد شده معتبر نیست." })
    .refine(validateIranianNationalId, {
      message: "کدملی وارد شده معتبر نیست.",
    }),

  phoneNumber: z
    .string()
    .min(10, { message: "شماره تلفن همراه معتبر نیست." })
    .max(11, { message: "شماره تلفن همراه معتبر نیست." })
    .refine(validateIranianMobileNumber, {
      message: "شماره تلفن همراه معتبر نیست.",
    }),

  addressId: z.string().optional().nullable(),
});

export type DriverFormData = z.infer<typeof driverFormSchema>;
