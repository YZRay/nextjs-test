import CountdownTimer from "@/components/CountdownTimer";
import {
  Accordion,
  AccordionItem,
  AccordionHead,
  AccordionContent,
} from "@/components/Accordion";

export default function Home() {
  return (
    <div className="container mx-auto my-8">
      <CountdownTimer initialTime={360000} />
      <CountdownTimer initialTime={3600} />
      <CountdownTimer initialTime={300} />
      <CountdownTimer initialTime={30} />

      <Accordion className="w-full" defaultOpenItem="item-1">
        <AccordionItem value="item-1">
          <AccordionHead>Lorem, ipsum dolor.</AccordionHead>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHead>Lorem, ipsum.</AccordionHead>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, est!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHead>Lorem ipsum dolor sit amet.</AccordionHead>
          <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
