import * as yup from "yup";

export const inputSchema = yup.object().shape({
  task: yup.string().trim().required('Please enter a task')
})