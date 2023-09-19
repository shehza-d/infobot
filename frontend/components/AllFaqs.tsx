import { IFaqs } from "@/types";
import { serverUrl } from "@/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const getFaqData = async () => {
  try {
    const res = await fetch(`${serverUrl}/api/v1/faqs`, {
      next: { revalidate: 2600 },
    });
    const { data } = await res.json();
    return data as IFaqs[];
  } catch (error) {
    console.log("🚀 ~ file: AllFaqs.tsx:10 ~ getData ~ error:", error);
  }
};

export default async function AllFaqs() {
  const faqs = await getFaqData();

  return (
    <div>
      <h2 className="text-5xl my-6 text-blue-500 font-bold text-center">
        All Faqs
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((faq) => (
          <AccordionItem key={faq._id} value={`item-${faq._id}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
