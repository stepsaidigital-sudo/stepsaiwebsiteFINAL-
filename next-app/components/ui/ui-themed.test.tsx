import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

describe("themed Accordion", () => {
  it("accepts the site's faq-item/faq-q/faq-a classes", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a" className="faq-item">
          <AccordionTrigger className="faq-q">Question</AccordionTrigger>
          <AccordionContent className="faq-a">
            <p>Answer</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("Question").closest(".faq-item")).toBeInTheDocument()
  })
})

describe("themed Tabs", () => {
  it("accepts the site's sia-tabs classes", () => {
    render(
      <Tabs defaultValue="sales">
        <TabsList className="sia-tabs">
          <TabsTrigger value="sales" className="sia-tab">
            Sales
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sales">Sales panel</TabsContent>
      </Tabs>
    )
    expect(screen.getByText("Sales panel")).toBeInTheDocument()
  })
})
