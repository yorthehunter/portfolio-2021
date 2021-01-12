import modeImg from './mode-2.png';
import modeImg2 from './mode-3.png';
import weaveImg from './weave-1.png';
import gozerImg from './gozer-2.png';
import returnsImg from './returns-1.jpg';

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
      "Built for software engineers and product designers, the Weave framework  enables rapid UI creation for internal / expert-use products at Stitch Fix. It consists of a shared Figma library (originally a Sketch library), a UI kit, and a React component library.",
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
  },
  {
    heading: "Gozer: a modern and customized picking application",
    overview:
      "Gozer is the web app that enabled pickers in Stitch Fix warehouses to scale up from picking one Fix (5 items) to 6+ Fixes on a single algorithmically-optimized path.",
    highlights: [
      "UI design, physical cart redesign, matching real world ergonomics to the digital UI",
      "Employed guerilla-style user testing, using a head-mounted GoPro to experience several users' picking perspectives, paper prototypes, more",
      "Led a design team of two while mentoring a designer",
      "Employed animation and visual hierarchy to accommodate a variety of users and conditions (low light, tall user, walking with a chrome book, etc)",
    ],
    images: [
      {
        url: gozerImg,
        caption: "Final design from the Gozer picking app"
      },
    ]
  },
  {
    heading: "Redesigning returns management",
    overview:
      "The returns manager handles all returns at Stitch Fix. The business model at Stitch Fix is unique: Fixes assume returns, unlike traditional retail. Since returns are built in to the model, it's extremely important that the process is accurate and very fast. Processing returns is very physical, so this project involved a redesign of a physical space as well as a digital space.",
    highlights: [
      "Hands-on user testing, involving prototyping a physical redesign of a space, and prototyping a newly designed keypad system",
      "nvolved testing the hand scanner so I set up a mock returns space in my home office which allowed for realistic physical space testing alongside UI testing",
      "My second version of returns management at Stitch Fix; my first design was the original UI for returns processing",
    ],
    images: [
      {
        url: returnsImg,
        caption: "Final design from the Returns v2 app"
      },
    ]
  }
]
