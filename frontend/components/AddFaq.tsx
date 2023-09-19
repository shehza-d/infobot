"use client";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "./layout/Input";
import { serverUrl } from "@/utils";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  //   const getData = async () => {
  //     try {
  //       setIsLoading(true);

  //       const { data } = await axios.get(`${baseUrl}/api/v1/posts`);
  //       setData(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    onSubmit: ({ answer, question }) => {
      if (!answer || !question) return;
      const postData = async () => {
        try {
          setIsLoading(true);
          const res = await axios.post(`${serverUrl}/api/v1/faq`, {
            question,
            answer,
            topic: "Science",
          });
          console.log("🚀 ~ file: AddFaq.tsx:38 ~ postData ~ res:", res);

          toast.success("Post has been published!");
          formik.resetForm();
        } catch (err: any) {
          console.log("error", err);
          toast.error(
            err?.response?.data?.message || "Post has been published!"
          );
        }
      };
      postData();
    },
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
      <Input
        id="question"
        placeholder="Question"
        onChange={formik.handleChange}
        value={formik.values.question}
      />
      <Input
        id="answer"
        placeholder="Answer"
        onChange={formik.handleChange}
        value={formik.values.answer}
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New Faq
      </button>
    </form>
  );
};

export default function AddFaq() {
  return (
    <div className="lg:w-[70%] mx-auto">
      <h2 className="text-5xl text-blue-500 font-bold text-center">Add Faq</h2>
      <Form />
    </div>
  );
}
