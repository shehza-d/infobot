import { IFaqs } from "@/types";

const baseUrl =
  "https://faq-app-1-dot-learning-chatbot-393109.lm.r.appspot.com";

const getData = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/v1/faqs`);
    const data: any = await res.json();
    return data;
  } catch (error) {
    console.log("🚀 ~ file: AllFaqs.tsx:10 ~ getData ~ error:", error);
  }
};

export default async function AllFaqs() {
  const { data } = await getData(); // as IFaqs[];

  return (
    <div>
      <h2>All Faqs</h2>
      <div>
        {data?.map((faq:any) => (
          <>
            <p>{faq.question}</p>
            <p>{faq.answer}</p>
          </>
        ))}
      </div>
    </div>
  );
}
