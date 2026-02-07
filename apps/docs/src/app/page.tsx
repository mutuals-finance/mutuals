import {
  CableIcon,
  CodeXmlIcon,
  GithubIcon,
  HammerIcon,
  HandshakeIcon,
  HomeIcon,
  LifeBuoyIcon,
  PiIcon,
  ReceiptTextIcon,
  RssIcon,
  ScrollTextIcon,
  SquarePlayIcon,
} from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Card, Cards } from "fumadocs-ui/components/card";
import { baseOptions } from "@/lib/layout.shared";
import Link from "next/link";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="w-full pb-16 lg:pb-32">
        <div className="relative bg-dots-gradient-blue py-16 lg:py-32">
          <div className="text-center mx-auto max-w-2xl px-4 sm:px-6">
            <h1 className="text-4xl font-medium my-6 px-2 sm:px-0">
              Mutuals Documentation
            </h1>
            <p className="text-base sm:text-lg text-fd-muted-foreground px-2 sm:px-0">
              Build custom payment rails using Mutuals' unopinionated and
              powerful developer tooling, deep dive into the protocol, use the
              API, or get support.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-12 sm:gap-16">
          <div className="">
            <h2 className="text-base sm:text-xl font-medium mb-2">
              Get Familiar with Mutuals
            </h2>

            <Cards className="grid-cols-1 lg:grid-cols-3 w-full">
              <Card
                icon={<PiIcon />}
                href="/concepts/overview"
                title="Concepts"
                className={"lg:col-span-3"}
              >
                Learn the fundamental concepts and principles behind Mutuals.
                This is the best place to start if you're new or want to
                understand the core ideas that drive the protocol.
              </Card>
              <Card
                icon={<ReceiptTextIcon />}
                href="/smart-contracts/overview"
                title="Smart Contracts"
              >
                Get detailed information about the smart contracts that power
                Mutuals. Explore their functionalities, interactions, and
                deployment details.
              </Card>
              <Card
                icon={<CodeXmlIcon />}
                href="/sdk-reference/overview"
                title="SDK Reference"
              >
                Explore our SDKs to see how you can integrate Mutuals into your
                applications. Find guides, references, and examples to help you
                get started quickly.
              </Card>
              <Card
                icon={<CableIcon />}
                href="/api-reference/overview"
                title="API Reference"
                className="sm:col-span-2 lg:col-span-1"
              >
                Explore the endpoints, request/response formats, and
                authentication methods you need to know to integrate Mutuals
                into your application.
              </Card>
            </Cards>
          </div>

          <div>
            <h2
              id="open-source-tools"
              className="text-base sm:text-xl font-medium mb-2"
            >
              Resources
            </h2>

            <Cards>
              <Card
                icon={<GithubIcon />}
                href="https://github.com/mutuals-finance"
                title="Source Code"
              >
                Our GitHub repository is the central hub for all development
                activity. Learn how the protocol works under the hood, report
                issues, or contribute to the project.
              </Card>
              <Card
                icon={<RssIcon />}
                href="https://mutuals.finance/blog"
                title="Blog"
              >
                Read the latest updates, announcements, and insights from the
                Mutuals team. Stay informed about new features, improvements,
                and industry news related to Mutuals.
              </Card>
              <Card
                icon={<SquarePlayIcon />}
                href="https://app.mutuals.finance"
                title="App"
              >
                Start using the Mutuals app. Create and manage your payment
                rails, monitor activity, and access powerful features for
                building on top of the protocol.
              </Card>
              <Card
                icon={<HandshakeIcon />}
                href="mailto:hello@mutuals.finance"
                title="Request Sales"
              >
                Click here to schedule a demo or reach out at
                hello@mutuals.finance
              </Card>
            </Cards>
          </div>

          <div>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-xl font-medium mb-2">
                Community &amp; Support
              </h2>
              <p className="text-sm text-muted-foreground">
                Connect with the community for technical discussions and support
              </p>
            </div>

            <Cards>
              <Card
                icon={<LifeBuoyIcon />}
                href="/support/overview"
                title="Support"
              >
                Need help? Visit our support page to find FAQs, contact
                information, and resources to assist you with any questions or
                issues you may have while using Mutuals.
              </Card>
              <Card
                icon={<HammerIcon />}
                href="https://github.com/mutuals-finance"
                title="Contribute"
              >
                Check out our GitHub repository to find open issues, contribute
                code, or get involved in the development of the protocol. We
                welcome contributions from the community!
              </Card>
            </Cards>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
