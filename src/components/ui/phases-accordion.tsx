import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type PhasesAccordionItemProps = {
  index?: number;
  title: string;
  description: string;
};

type PhasesAccordionItemElement = React.ReactElement<PhasesAccordionItemProps>;

type PhasesAccordionProps = {
  children: PhasesAccordionItemElement | PhasesAccordionItemElement[];
};

type PhasesStepIndicatorProps = {
  index?: number;
};

function PhasesStepIndicator({ index }: PhasesStepIndicatorProps) {
  const wrapperClasses = cn(
    "group relative mb-4 last:mb-0 md:mb-0 [&:nth-last-child(2)]:mb-0",
    "[&:nth-last-child(2)>.line-decoration]:h-1/2",
  );

  const lineClasses =
    "line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:h-[calc(100%+2rem)] ";

  const numberCircleClasses =
    "flex-center bg-primary-300 text-neutral-25 text-sm-semibold md:text-md-semibold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full";

  const glowClasses =
    "flex-center absolute insex-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] blur-3xl";

  return (
    <div className={wrapperClasses}>
      <div className={lineClasses} />
      <span className={numberCircleClasses}>{index}</span>
      <div className={glowClasses}>{index}</div>
    </div>
  );
}

// main component

const PhasesAccordion: React.FC<PhasesAccordionProps> = ({ children }) => {
  return (
    <Accordion type="single" collapsible>
      <div className="grid grid-cols-[2.5rem_auto] gap-x-4 md:grid-cols-[3rem_auto] md:gap-x-6">
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, { index: idx + 1 }),
        )}
      </div>
    </Accordion>
  );
};

export const PhasesAccordionItem: React.FC<PhasesAccordionItemProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <>
      <PhasesStepIndicator index={index} />
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </>
  );
};

export default PhasesAccordion;
