import Basket from "@/components/cart/components/step-one/components/basket";
import Resume from "@/components/cart/components/step-one/components/resume";

const StepOne = ({ games }) => (
  <div className="grid grid-cols-3 gap-4 py-5 pb-10">
    <Basket games={games} />

    <Resume games={games} />
  </div>
);

export default StepOne;
