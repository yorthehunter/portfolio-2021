import modeImg from './mode-2.png';
import modeImg2 from './mode-3.png';
import weaveImg from './weave-1.png';

export const workExamples = [
  {
    heading: "Mode Design System",
    overview:
      "The Mode Design System is a set of design and coded tools, automation, and guidelines built to enable a framework for scalable UI at Stitch Fix. Mode is my most ambitious and influential product at Stitch Fix, currently supporting the entire customer-facing experience and those product teams. We are currently in the process of applying the design system to expert use (internal) tools at Stitch Fix, too.",
    highlights: [
      "Created and led the Design Platform team at Stitch Fix responsible for scoping and developing the design system, as well as systemic guidance, tooling, automation, and process improvements for the full product design team",
      "In partnership with Brand & Marketing, Engineering, and Product teams’ to create and maintain strategic roadmap for the design system and Design Platform team",
      "Designed and helped develop a shared style library, a single-source proprietary system for designing customer-facing web apps",
      "Created the early system of design tokens enabling a simpler, design-led process for managing cross-platform UI",
      "Launched the design system of shared UI to 8 teams (~80 engineers and managers, 8+ PMs, 12 designers)",
    ],
    images: [
      {
        url: modeImg,
        caption: "A screen shot of the Mode style system documentation site"
      },
      {
        url: modeImg2,
        caption: "A screen shot of the Mode Figma library"
      },
    ]
  },
  {
    heading: "Weave UI framework",
    overview:
      "Weave is a UI framework, built for software engineers and product designers, that enables rapid UI creation for internal / expert-use products at Stitch Fix.It consists of a shared Sketch component library(later ported to Figma), a UI CSS kit, and a React component library.",
    highlights: [
      "A framework for consistent design",
      "Geared especially towards non-UI engineers: full-stack and backend engineers who built user-facing software",
      "Used by multiple expert use teams, helping speed development time and helping create a design unity across products, even when management or ownership is entirely different",
      "A variable-based, simple, and extensible framework, consisting of a UI library (CSS) and a component library (React)",
    ],
    images: [
      {
        url: weaveImg,
        caption: "A screen shot of the Weave React library documentation site"
      },
    ]
  }
]
