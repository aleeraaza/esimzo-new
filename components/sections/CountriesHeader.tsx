import { capitalize } from "@/lib/constants";
import { Wifi } from "lucide-react";

type Props = {
  slug: string;
};

export default function CountriesHeader({ slug }: Props) {
  const countryName = capitalize(slug.replace(/-/g, " "));

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background via-secondary/40 to-background">
      {/* Inline keyframes */}
      <style>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(-350px) translateY(0) rotate(-2deg) scale(0.9);
            opacity: 0;
          }
          4% {
            opacity: 0.7;
          }
          8% {
            opacity: 1;
            transform: translateX(2vw) translateY(-15px) rotate(-5deg) scale(0.95);
          }
          20% {
            transform: translateX(14vw) translateY(-45px) rotate(-6deg) scale(1);
          }
          35% {
            transform: translateX(30vw) translateY(-15px) rotate(1deg) scale(1.02);
          }
          50% {
            transform: translateX(48vw) translateY(-50px) rotate(-4deg) scale(1);
          }
          65% {
            transform: translateX(62vw) translateY(-20px) rotate(2deg) scale(1.01);
          }
          80% {
            transform: translateX(78vw) translateY(-45px) rotate(-3deg) scale(1);
          }
          92% {
            opacity: 1;
            transform: translateX(90vw) translateY(-25px) rotate(-1deg) scale(0.98);
          }
          100% {
            transform: translateX(calc(100vw + 350px)) translateY(-35px) rotate(-2deg) scale(0.9);
            opacity: 0;
          }
        }
        @keyframes contrailDash {
          to { stroke-dashoffset: -800; }
        }
        @keyframes engineGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes cloudDrift1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }
        @keyframes cloudDrift2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-150px); }
        }
        @keyframes pulseRing {
          0% { r: 4; opacity: 0.5; }
          100% { r: 20; opacity: 0; }
        }
      `}</style>

      {/* Animated SVG Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle dot grid */}
          <defs>
            <pattern
              id="dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" className="fill-primary/6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />

          {/* Drifting clouds (layer 1 — slower, larger) */}
          <g style={{ animation: "cloudDrift1 35s linear infinite" }}>
            {[
              { cx: 200, cy: "25%", rx: 60, ry: 18 },
              { cx: 600, cy: "65%", rx: 45, ry: 14 },
              { cx: 1000, cy: "35%", rx: 55, ry: 16 },
              { cx: 1400, cy: "55%", rx: 50, ry: 15 },
            ].map((c, i) => (
              <g key={`cloud1-${i}`}>
                <ellipse
                  cx={c.cx}
                  cy={c.cy}
                  rx={c.rx}
                  ry={c.ry}
                  className="fill-primary/3"
                />
                <ellipse
                  cx={c.cx - c.rx * 0.4}
                  cy={c.cy}
                  rx={c.rx * 0.6}
                  ry={c.ry * 0.8}
                  className="fill-primary/3"
                />
                <ellipse
                  cx={c.cx + c.rx * 0.35}
                  cy={c.cy}
                  rx={c.rx * 0.55}
                  ry={c.ry * 0.75}
                  className="fill-primary/3"
                />
              </g>
            ))}
          </g>

          {/* Drifting clouds (layer 2 — faster, smaller) */}
          <g style={{ animation: "cloudDrift2 22s linear infinite" }}>
            {[
              { cx: 300, cy: "40%", rx: 35, ry: 10 },
              { cx: 750, cy: "20%", rx: 30, ry: 9 },
              { cx: 1100, cy: "70%", rx: 38, ry: 11 },
            ].map((c, i) => (
              <ellipse
                key={`cloud2-${i}`}
                cx={c.cx}
                cy={c.cy}
                rx={c.rx}
                ry={c.ry}
                className="fill-primary/4"
              />
            ))}
          </g>

          {/* Curved flight path (dashed) */}
          <path
            d="M -100,55% Q 25%,30% 50%,50% T 110%,40%"
            fill="none"
            className="stroke-primary/6"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />

          {/* Pulsing waypoint dots */}
          {[
            { cx: "20%", cy: "38%" },
            { cx: "50%", cy: "50%" },
            { cx: "80%", cy: "43%" },
          ].map((dot, i) => (
            <g key={`waypoint-${i}`}>
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r="3"
                className="fill-primary/12"
              />
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r="4"
                fill="none"
                className="stroke-primary/8"
                strokeWidth="1"
                style={{
                  animation: `pulseRing 2.5s ease-out ${i * 0.8}s infinite`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* ── Big animated airplane ── */}
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: 0,
            animation: "flyAcross 9s cubic-bezier(0.42, 0, 0.58, 1) infinite",
            willChange: "transform, opacity",
          }}
        >
          <svg
            width="280"
            height="140"
            viewBox="-200 -55 350 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xl"
            style={{ overflow: "visible" }}
          >
            {/* Triple contrail lines */}
            <line
              x1="-40"
              y1="-5"
              x2="-400"
              y2="-5"
              className="stroke-primary/15"
              strokeWidth="2.5"
              strokeDasharray="10 16"
              strokeLinecap="round"
              style={{ animation: "contrailDash 6s linear infinite" }}
            />
            <line
              x1="-40"
              y1="0"
              x2="-400"
              y2="0"
              className="stroke-primary/10"
              strokeWidth="1.5"
              strokeDasharray="6 18"
              strokeLinecap="round"
              style={{ animation: "contrailDash 6s linear 0.4s infinite" }}
            />
            <line
              x1="-40"
              y1="5"
              x2="-400"
              y2="5"
              className="stroke-primary/8"
              strokeWidth="1"
              strokeDasharray="4 20"
              strokeLinecap="round"
              style={{ animation: "contrailDash 6s linear 0.8s infinite" }}
            />

            {/* Airplane body */}
            <g>
              {/* Drop shadow */}
              <ellipse
                cx="4"
                cy="4"
                rx="52"
                ry="10"
                className="fill-foreground/3"
              />

              {/* Main fuselage */}
              <ellipse rx="50" ry="9" className="fill-primary/30" />
              {/* Fuselage belly highlight */}
              <ellipse rx="46" ry="5.5" className="fill-primary/15" />
              {/* Top fuselage line */}
              <line
                x1="-42"
                y1="-5"
                x2="35"
                y2="-5"
                className="stroke-primary/5"
                strokeWidth="0.5"
              />

              {/* Window row */}
              {[-30, -23, -16, -9, -2, 5, 12, 19, 26].map((wx) => (
                <rect
                  key={wx}
                  x={wx}
                  y={-2.2}
                  width="4"
                  height="3.5"
                  rx="1.5"
                  className="fill-primary/8"
                />
              ))}

              {/* Wings */}
              {/* Top wing */}
              <path
                d="M-8,-8 L-24,-42 L8,-42 L14,-8 Z"
                className="fill-primary/22"
              />
              {/* Wing highlight */}
              <path
                d="M-4,-12 L-16,-36 L4,-36 L10,-12 Z"
                className="fill-primary/12"
              />
              {/* Wing tip */}
              <rect
                x="-24"
                y="-44"
                width="32"
                height="2"
                rx="1"
                className="fill-primary/6"
              />

              {/* Bottom wing */}
              <path
                d="M-8,8 L-24,42 L8,42 L14,8 Z"
                className="fill-primary/22"
              />
              <path
                d="M-4,12 L-16,36 L4,36 L10,12 Z"
                className="fill-primary/12"
              />
              <rect
                x="-24"
                y="42"
                width="32"
                height="2"
                rx="1"
                className="fill-primary/6"
              />

              {/* Engine pods */}
              <ellipse
                cx="-10"
                cy="-28"
                rx="7"
                ry="4.5"
                className="fill-primary/20"
              />
              <ellipse
                cx="-5"
                cy="-28"
                rx="3"
                ry="3.5"
                className="fill-primary/6"
              />
              <circle
                cx="-17"
                cy="-28"
                r="3"
                className="fill-primary/10"
                style={{ animation: "engineGlow 1.5s ease-in-out infinite" }}
              />

              <ellipse
                cx="-10"
                cy="28"
                rx="7"
                ry="4.5"
                className="fill-primary/20"
              />
              <ellipse
                cx="-5"
                cy="28"
                rx="3"
                ry="3.5"
                className="fill-primary/6"
              />
              <circle
                cx="-17"
                cy="28"
                r="3"
                className="fill-primary/10"
                style={{
                  animation: "engineGlow 1.5s ease-in-out 0.3s infinite",
                }}
              />

              {/* Tail section */}
              <path
                d="M-44,-6 L-62,-20 L-48,-20 L-40,-6 Z"
                className="fill-primary/16"
              />
              <path
                d="M-44,6 L-62,20 L-48,20 L-40,6 Z"
                className="fill-primary/16"
              />
              {/* Vertical stabilizer */}
              <path
                d="M-40,-7 L-56,-30 L-44,-30 L-36,-7 Z"
                className="fill-primary/25"
              />
              <path
                d="M-42,-10 L-52,-26 L-46,-26 L-38,-10 Z"
                className="fill-primary/12"
              />

              {/* Nose cone */}
              <ellipse
                cx="40"
                cy="0"
                rx="12"
                ry="7.5"
                className="fill-primary/35"
              />
              <ellipse
                cx="46"
                cy="0"
                rx="6"
                ry="4.5"
                className="fill-primary/20"
              />
              {/* Cockpit windshield */}
              <path
                d="M46,-3 Q52,-3 52,0 Q52,3 46,3 Z"
                className="fill-primary/8"
              />
              <ellipse
                cx="49"
                cy="-1"
                rx="2"
                ry="1"
                className="fill-primary/5"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Soft glow blurs */}
      <div className="absolute top-0 left-1/4 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-secondary/30 blur-3xl" />

      {/* Content */}
      <div className="container relative py-16 sm:py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-sm">
            <Wifi className="h-3.5 w-3.5 text-primary" />
            Compare eSIM Plans
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the best eSIM for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">{countryName}</span>
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-accent" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Compare plans from top providers and find the perfect data package
            for your trip.
          </p>
        </div>
      </div>
    </section>
  );
}
