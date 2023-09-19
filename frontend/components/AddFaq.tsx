"use client";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";

const baseUrl =
  "https://faq-app-1-dot-learning-chatbot-393109.lm.r.appspot.com";

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
      const postData = async () => {
        try {
          setIsLoading(true);
          const res = await axios.post(`${baseUrl}/api/v1/faq`, {
            question,
            answer,
            topic: "Science",
          });
          console.log("🚀 ~ file: AddFaq.tsx:38 ~ postData ~ res:", res);

          toast.success("Post has been published!");
        } catch (error) {
          console.log(error);
        }
      };
      postData();
    },
  });
  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <label htmlFor="question">Question</label>
      <input
        className="ring-2 ring-green-400"
        id="question"
        name="question"
        type="question"
        onChange={formik.handleChange}
        value={formik.values.question}
      />
      <label htmlFor="answer">answer</label>
      <input
        className="ring-2 ring-green-400"
        id="answer"
        name="answer"
        type="answer"
        onChange={formik.handleChange}
        value={formik.values.answer}
      />

      <button className="bg-green-300 my-6" type="submit">
        Submit
      </button>
    </form>
  );
};

export default function AddFaq() {
  return (
    <div className="container mx-auto">
      <h2>Add Faq</h2>
      <Form />
    </div>
  );
}
