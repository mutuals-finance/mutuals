import React from 'react';
import { ButtonPrimary } from '@/components/Button';

export function HomeFeatures() {
  return (
    <section>
      <div className={'container grid max-w-6xl grid-cols-2 gap-6 lg:gap-12'}>
        <div className={'flex flex-col items-start space-y-6'}>
          <h2 className={'text-5xl font-semibold'}>
            You do the business, we&apos;ll handle the money.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
          <ButtonPrimary rounded={'base'} size={'lg'}>
            Get Started
          </ButtonPrimary>
        </div>
        <div>
          <ul className={'flex flex-col space-y-2'}>
            <li className={'rounded border p-4'}>
              <h3 className={'font-bold'}>Everything in your control</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt.
              </p>
            </li>
            <li className={'rounded border p-4'}>
              <h3 className={'font-bold'}>100% Secured</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt.
              </p>
            </li>
            <li className={'rounded border p-4'}>
              <h3 className={'font-bold'}>
                Built-in support for ETH and ERC-20 tokens
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
