import { Section } from "@/components/ui/Section";
import { masterConfig } from "@/config/master";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";
import {
    AwsIcon,
    NextjsIcon,
    ReactIcon,
    ShopifyIcon,
    TypescriptIcon,
    ViteIcon,
    VercelIcon,
    FigmaIcon,
    GoogleAdsIcon,
    MetaAdsIcon,
    HubspotIcon,
    ZohoIcon,
    AdobeIllustratorIcon,
    AdobePhotoshopIcon,
    AdobeIndesignIcon,
    AfterEffectsIcon,
    SplineIcon,
    TailwindCssIcon,
    FramerMotionIcon,
    NodeJsIcon,
    PostgresqlIcon,
    AppwriteIcon,
    SanityCmsIcon,
    SupabaseIcon,
    CloudflareIcon,
    DockerIcon,
    NetlifyIcon,
    RazorpayIcon,
    ResendIcon,
    GithubActionsIcon,
    GoogleAnalyticsIcon,
    UmamiIcon,
    HotjarIcon,
    PowerBiIcon,
    MailchimpIcon,
    SendgridIcon,
    MixpanelIcon,
    PaytmIcon,
    MicrosoftIcon
} from "@/components/icons/BrandIcons";

const TECHNOLOGIES = masterConfig.sections.techStackStrip;

const MARQUEE_TECHNOLOGIES =
    TECHNOLOGIES.length < 12 ? [...TECHNOLOGIES, ...TECHNOLOGIES] : TECHNOLOGIES;

const TECH_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    "NEXT.JS": NextjsIcon,
    "VITE": ViteIcon,
    REACT: ReactIcon,
    VERCEL: VercelIcon,
    AWS: AwsIcon,
    SHOPIFY: ShopifyIcon,
    TYPESCRIPT: TypescriptIcon,
    FIGMA: FigmaIcon,
    "GOOGLE ADS": GoogleAdsIcon,
    "META ADS": MetaAdsIcon,
    HUBSPOT: HubspotIcon,
    ZOHO: ZohoIcon,
    "ADOBE ILLUSTRATOR": AdobeIllustratorIcon,
    "ADOBE PHOTOSHOP": AdobePhotoshopIcon,
    "ADOBE INDESIGN": AdobeIndesignIcon,
    "AFTER EFFECTS": AfterEffectsIcon,
    "SPLINE": SplineIcon,
    "TAILWIND CSS": TailwindCssIcon,
    "FRAMER MOTION": FramerMotionIcon,
    "NODE.JS": NodeJsIcon,
    "POSTGRESQL": PostgresqlIcon,
    "APPWRITE": AppwriteIcon,
    "SANITY CMS": SanityCmsIcon,
    "SUPABASE": SupabaseIcon,
    "CLOUDFLARE": CloudflareIcon,
    "DOCKER": DockerIcon,
    "NETLIFY": NetlifyIcon,
    "RAZORPAY": RazorpayIcon,
    "RESEND": ResendIcon,
    "GITHUB ACTIONS": GithubActionsIcon,
    "GOOGLE ANALYTICS": GoogleAnalyticsIcon,
    "MICROSOFT CLARITY": MicrosoftIcon,
    "UMAMI": UmamiIcon,
    "HOTJAR": HotjarIcon,
    "POWER BI": PowerBiIcon,
    "MAILCHIMP": MailchimpIcon,
    "SENDGRID": SendgridIcon,
    "MIXPANEL": MixpanelIcon,
    "PAYTM": PaytmIcon
};

function getTechAbbreviation(tech: string) {
    const tokens = tech.split(/[\s./_-]+/).filter(Boolean);
    const abbreviation = tokens.map((token) => token[0]).join("");
    return (abbreviation || tech.slice(0, 2)).toUpperCase().slice(0, 2);
}

function TechIcon({ tech }: { tech: string }) {
    const Icon = TECH_ICONS[tech];
    if (!Icon) {
        return (
            <span className="h-6 w-6 border border-grid/20 bg-white/90 grid place-items-center font-mono text-[8px] leading-none text-ink-muted">
                {getTechAbbreviation(tech)}
            </span>
        );
    }

    return (
        <span className="h-6 w-6 grid place-items-center text-ink">
            <Icon className="h-5 w-5" />
        </span>
    );
}

export function TrustStrip() {
    const { autoScroll, durationSeconds } = masterConfig.ui.motion.trustStrip;

    return (
        <Section className="py-7 md:py-8 bg-transparent overflow-hidden border-b border-grid/15 flex flex-col items-center cursor-default select-none">
            <div className="text-[10px] font-mono tracking-[0.3em] text-ink-muted uppercase mb-4 text-center">
                Powered by enterprise-grade infrastructure
            </div>
            <div className="relative flex w-full">
                <div className="w-full overflow-hidden">
                    <div
                        className={cn("flex w-max whitespace-nowrap", autoScroll && "trust-strip-track")}
                        style={{ "--truststrip-duration": `${durationSeconds}s` } as React.CSSProperties}
                    >
                        {[0, 1].map((i) => (
                            <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0}>
                                {MARQUEE_TECHNOLOGIES.map((tech, idx) => (
                                    <div
                                        key={`${i}-${tech}-${idx}`}
                                        className="mx-8 flex items-center gap-3 opacity-55 hover:opacity-100 transition-opacity grayscale cursor-default"
                                    >
                                        <TechIcon tech={tech} />
                                        <span className="font-mono font-semibold text-lg tracking-tight">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
