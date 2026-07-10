import { Section } from "@/components/layouts/section";
import PhasesAccordion, {
  PhasesAccordionItem,
} from "@/components/ui/phases-accordion";
import { serviceProcessData } from "@/constant/services-process-data";

const ServicessProcess = () => {
  return (
    <Section
      id="services-process"
      subtitle="A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs"
      title="How We Work"
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};

export default ServicessProcess;
