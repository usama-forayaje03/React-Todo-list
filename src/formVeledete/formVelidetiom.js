import * as yup from "yup";

export const schema = yup.object({
    title: yup.string().required().min(5).max(10),
    description: yup.string().required(),
    assignedTo: yup.string().required(),
    priority: yup.string(),
  }).required();