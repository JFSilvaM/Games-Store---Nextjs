import { barTrustData } from "@/components/bar-trust/bar-trust.data";
import Container from "@/components/container";

const BarTrust = () => (
  <div className="mt-8 bg-neutral-900">
    <Container fluid className="flex justify-center py-8">
      {barTrustData.map((item) => (
        <div className="flex items-center gap-3 border-r border-neutral-400 px-8 last-of-type:border-0">
          {item.icon}

          <div>
            <h5 className="text-xl font-bold">{item.title}</h5>

            <span className="text-xs text-neutral-400">{item.description}</span>
          </div>
        </div>
      ))}
    </Container>
  </div>
);

export default BarTrust;
