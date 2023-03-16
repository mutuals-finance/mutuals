import Link from "next/link";

export default function Footer() {
    const routes: Record<string, string> = {
        Home: "/",
        About: "/splits",
        App: "/splits",
        Feedback: "/splits",
        Help: "/splits",
        "Terms Of Service": "/splits",
        "Privacy Policy": "/splits",
    };
    return (
        <footer className={"bg-default md:h-64 w-full flex flex-col justify-end"}>
            <div className={"container !max-w-full space-y-8 py-12"}>
                <ul className={"flex items-center space-x-2"}>
                    <li>Copyright 2023 SplitFi</li>
                    <li>|</li>
                    <li>The easiest way to split your smart contract profits</li>
                </ul>

                <ul
                    className={
                        "flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-6"
                    }
                >
                    {Object.keys(routes).map((name: string) => (
                        <li key={name}>
                            <Link className={"link"} href={routes[name] || "/"}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
