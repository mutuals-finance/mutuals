import { Card, Cards } from "fumadocs-ui/components/card";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  BookIcon,
  CableIcon,
  CodeXmlIcon,
  GithubIcon,
  HammerIcon,
  HandshakeIcon,
  LifeBuoyIcon,
  ReceiptTextIcon,
  RssIcon,
  SquarePlayIcon,
} from "lucide-react";
import { baseOptions } from "@/lib/layout.shared";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="w-full pb-16 lg:pb-32">
        <div className="relative bg-dots-gradient-blue py-16 lg:py-32">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h1 className="my-6 px-2 font-medium text-5xl sm:px-0 sm:text-6xl">
              Mutuals Documentation
            </h1>
            <p className="px-2 text-base text-fd-muted-foreground text-lg sm:px-0">
              Build custom payment rails using Mutuals' unopinionated and
              powerful developer tooling, deep dive into the protocol, use the
              API, or get support.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6">
          <div className="">
            <h2 className="mb-2 font-medium text-base sm:text-xl">
              Get Familiar with Mutuals
            </h2>

            <Cards className="w-full grid-cols-1 lg:grid-cols-2">
              <Card
                href="/concepts/introduction"
                icon={<BookIcon />}
                title="Concepts"
              >
                Learn the fundamental concepts and principles behind Mutuals.
                This is the best place to start if you're new or want to
                understand the core ideas that drive the protocol.
              </Card>
              <Card
                href="/smart-contracts/overview"
                icon={<ReceiptTextIcon />}
                title="Smart Contracts"
              >
                Get detailed information about the smart contracts that power
                Mutuals. Explore their functionalities, interactions, and
                deployment details.
              </Card>
              <Card
                href="/sdk-reference/overview"
                icon={<CodeXmlIcon />}
                title="SDK Reference"
              >
                Explore our SDKs to see how you can integrate Mutuals into your
                applications. Find guides, references, and examples to help you
                get started quickly.
              </Card>
              <Card
                className="sm:col-span-2 lg:col-span-1"
                href="/api-reference/overview"
                icon={<CableIcon />}
                title="API Reference"
              >
                Explore the endpoints, request/response formats, and
                authentication methods you need to know to integrate Mutuals
                into your application.
              </Card>
            </Cards>
          </div>

          <div>
            <h2
              className="mb-2 font-medium text-base sm:text-xl"
              id="open-source-tools"
            >
              Resources
            </h2>

            <Cards>
              <Card
                href="https://github.com/mutuals-finance"
                icon={<GithubIcon />}
                title="Source Code"
              >
                Our GitHub repository is the central hub for all development
                activity. Learn how the protocol works under the hood, report
                issues, or contribute to the project.
              </Card>
              <Card
                href="https://mutuals.finance/blog"
                icon={<RssIcon />}
                title="Blog"
              >
                Read the latest updates, announcements, and insights from the
                Mutuals team. Stay informed about new features, improvements,
                and industry news related to Mutuals.
              </Card>
              <Card
                href="https://app.mutuals.finance"
                icon={<SquarePlayIcon />}
                title="App"
              >
                Start using the Mutuals app. Create and manage your payment
                rails, monitor activity, and access powerful features for
                building on top of the protocol.
              </Card>
              <Card
                href="mailto:hello@mutuals.finance"
                icon={<HandshakeIcon />}
                title="Request Sales"
              >
                Click here to schedule a demo or reach out at
                hello@mutuals.finance
              </Card>
            </Cards>
          </div>

          <div>
            <div className="mb-4 sm:mb-6">
              <h2 className="mb-2 font-medium text-base sm:text-xl">
                Community &amp; Support
              </h2>
              <p className="text-muted-foreground text-sm">
                Connect with the community for technical discussions and support
              </p>
            </div>

            <Cards>
              <Card
                href="/support/overview"
                icon={<LifeBuoyIcon />}
                title="Support"
              >
                Need help? Visit our support page to find FAQs, contact
                information, and resources to assist you with any questions or
                issues you may have while using Mutuals.
              </Card>
              <Card
                href="https://github.com/mutuals-finance"
                icon={<HammerIcon />}
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
