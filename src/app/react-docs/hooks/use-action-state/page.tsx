import { PageStyle } from "@/styles/layout/page.css";
import ExampleForm from "./ExampleForm";
import AddToCartForm from "./ActionErrorForm";
import StructuredErrorForm from "./StructuredErrorFrom";

export default function UseActionStatePage() {
  return (
    <div className={PageStyle}>
      <ExampleForm />

      <section className="info">
        <h2>useActionState</h2>
        <h3>Example one : Error on Form with Action</h3>
        <AddToCartForm
          itemID="1"
          itemTitle="JavaScript: The Definitive Guide"
        />
        <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
      </section>

      <section className="action-error-with-structured-form-data">
        <h3>Example two : Error on Form with Structured Data</h3>
        <StructuredErrorForm
          itemID="1"
          itemTitle="JavaScript: The Good Parts"
        />
        <StructuredErrorForm
          itemID="2"
          itemTitle="JavaScript: The Definitive Guide"
        />
      </section>
    </div>
  );
}
