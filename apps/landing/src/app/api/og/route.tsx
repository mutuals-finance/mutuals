import type { NextRequest } from "next/server";

import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource && resource.length >= 1 && resource[1]) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

type OGType = "blog" | "docs" | "guides";

export async function GET(req: NextRequest): Promise<ImageResponse> {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "";
    const titlePerWord = title?.trim()?.split(" ");
    const hasTopic = searchParams.has("topic");
    const topic = hasTopic
      ? searchParams.get("topic")?.slice(0, 100).replace("-", " ")
      : "";
    const hasType = searchParams.has("type");
    const ogType = (hasType ? searchParams.get("type") : "blog") as OGType;

    const ogTypeLabel: Record<OGType, string> = {
      blog: "Blog Post",
      docs: "Documentation",
      guides: "Guides & Tutorials",
    };

    // Collect all text that will be rendered
    const allText = [title || "", topic || "", ogTypeLabel[ogType]].join("");

    // Load Inter fonts with only the characters we need
    const [interRegular, interMedium] = await Promise.all([
      loadGoogleFont("Inter:wght@400", allText),
      loadGoogleFont("Inter:wght@500", allText),
    ]);

    return new ImageResponse(
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          height: "100%",
          padding: 75,
          position: "relative",
          width: "100%",
        }}
      >
        {/* BG lines */}
        {Array.from({ length: 6 }).map((_, i) => {
          const linePositions = [
            { bottom: 0, left: 75, top: 0, width: 1 },
            { bottom: 0, left: "50%", top: 0, width: 1 },
            { bottom: 0, right: 75, top: 0, width: 1 },
            { height: 1, left: 0, right: 0, top: 75 },
            { height: 1, left: 0, right: 0, top: "50vh" },
            { bottom: 75, height: 1, left: 0, right: 0 },
          ];

          return (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                position: "absolute",
                ...linePositions[i],
              }}
            />
          );
        })}
        <div
          style={{
            backgroundColor: "#000",
            backgroundImage: `url(${process.env.NEXT_PUBLIC_SITE_URL}/images/scanline-light.png)`,
            backgroundRepeat: "repeat",
            bottom: 0,
            color: "#fff",
            display: "flex",
            left: 0,
            opacity: 0.08,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />
        <div
          style={{
            backgroundColor: "#000",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Inter",
            height: "100%",
            justifyContent: "space-between",
            padding: 65,
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 28,
              letterSpacing: "-0.56px",
              lineHeight: 1.2,
              textTransform: "capitalize",
            }}
          >
            {topic && topic}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 72,
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                marginTop: 20,
              }}
            >
              {titlePerWord?.map((word, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      display: "flex",
                      paddingRight: "15px",
                      position: "relative",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <img
              alt="Mutuals"
              height="40"
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/icon/1024`}
              width="40"
            />
            <div
              style={{
                fontSize: 20,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              {ogTypeLabel[ogType]}
            </div>
          </div>

          {/* Crosshairs */}
          {Array.from({ length: 2 }).map((_, i) => {
            const crosshairPosition =
              i === 0
                ? { left: 0, top: 0, transform: "translate(-50%, -50%)" }
                : { bottom: 0, right: 0, transform: "translate(50%, 50%)" };

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  opacity: 0.5,
                  position: "absolute",
                  ...crosshairPosition,
                }}
              >
                <svg
                  fill="none"
                  height="21"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 20 21"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0.332031V20.332" />
                  <path d="M0 10.332L20 10.332" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>,
      {
        fonts: [
          {
            name: "Inter",
            data: interRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: interMedium,
            weight: 500,
            style: "normal",
          },
        ],
        height: 630,
        width: 1200,
      },
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return NextResponse.error();
  }
}
