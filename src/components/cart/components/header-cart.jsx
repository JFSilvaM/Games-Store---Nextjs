"use client";

import { CheckIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const HeaderCart = () => {
  const currentStep = Number(useSearchParams().get("step")) || 1;

  const steps = [
    { number: 1, title: "Cesta" },
    { number: 2, title: "Pago" },
    { number: 3, title: "Confirmación" },
  ];

  return (
    <div className="fixed z-10 flex w-full items-center justify-between bg-neutral-900 p-5">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Gaming"
          width={120}
          height={120}
          loading="eager"
          className="h-auto w-auto"
        />
      </Link>

      <div className="flex gap-2">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-2">
            <div
              className={`flex gap-2 ${currentStep === step.number ? "" : "text-neutral-400"}`}
            >
              <div
                className={`text flex h-5 w-5 items-center justify-center rounded-full border-2 text-sm ${
                  currentStep <= step.number
                    ? ""
                    : "bg-orange-600 text-orange-600"
                } ${currentStep === step.number ? "text-orange-600" : ""}`}
              >
                {currentStep <= step.number ? (
                  <span
                    className={
                      currentStep === step.number ? "text-foreground" : ""
                    }
                  >
                    {step.number}
                  </span>
                ) : (
                  <CheckIcon className="text-foreground size-5" />
                )}
              </div>

              <span>{step.title}</span>
            </div>

            {steps.length !== step.number && (
              <span
                className={currentStep > step.number ? "text-orange-600" : ""}
              >
                ·
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <LockClosedIcon className="size-5 text-green-500" />

        <div className="flex flex-col">
          <span>Pago seguro</span>

          <span className="text-sm text-neutral-400">256-bit SSL Secure</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
