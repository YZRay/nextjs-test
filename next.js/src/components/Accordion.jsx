import { useState, createContext, useContext } from "react";

const AccordionContext = createContext();
const AccordionItemContext = createContext();

function Accordion({ children, className, defaultOpenItem }) {
  const [openItems, setOpenItems] = useState(
    defaultOpenItem ? [defaultOpenItem] : []
  );

  return (
    <AccordionContext.Provider value={{ openItems, setOpenItems }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ children, value }) {
  const { openItems, setOpenItems } = useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  const onClick = () => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <AccordionItemContext.Provider value={{ isOpen, onClick }}>
      <div className="border-b">{children}</div>
    </AccordionItemContext.Provider>
  );
}

function AccordionHead({ children }) {
  const { isOpen, onClick } = useContext(AccordionItemContext);
  return (
    <button
      type="button"
      className="p-4 flex items-center justify-between cursor-pointer w-full"
      onClick={onClick}
    >
      <h3 className="fw-bold text-2xl">{children}</h3>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
    </button>
  );
}

function AccordionContent({ children }) {
  const { isOpen } = useContext(AccordionItemContext);
  return isOpen && <div className="p-4">{children}</div>;
}

export { Accordion, AccordionItem, AccordionHead, AccordionContent };
