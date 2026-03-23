import type { Props } from "astro";
import type { GiscusProps } from "@giscus/react";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconRss from "@/assets/icons/IconRss.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconReddit from "@/assets/icons/IconReddit.svg";
import IconSignal from "@/assets/icons/IconSignal.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/kopfrechner",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christoph-kopf-9b7a74b2",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title} RSS Feed`,
    icon: IconRss,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Post teilen auf X`,
    icon: IconBrandX,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Post teilen auf Bluesky`,
    icon: IconBluesky,
  },
  {
    name: "Mastodon",
    href: "https://toot.kytta.dev/?text=",
    linkTitle: `Post teilen auf Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/submit?url=",
    linkTitle: `Post teilen auf Reddit`,
    icon: IconReddit,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Post teilen auf LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Post teilen via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Post teilen via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Signal",
    href: "signal://send?text=",
    linkTitle: `Post teilen via Signal`,
    icon: IconSignal,
  },
] as const;

export const GISCUS: GiscusProps = {
  repo: "kopfrechner/kopfarbeit",
  repoId: "R_kgDOQ0ON2A",
  category: "Giscus",
  categoryId: "DIC_kwDOQ0ON2M4C0oo5",
  mapping: "pathname",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "de",
  loading: "lazy",
};
