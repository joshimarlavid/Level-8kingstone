import { VocabularyItem, GrammarPoint, RoleCard, PerformanceScenario } from './types';

export const MOTIVATIONAL_QUOTES = [
  "Leadership is not about being in charge. It is about taking care of those in your charge.",
  "Communication works for those who work at it.",
  "The art of conversation is the art of hearing as well as of being heard.",
  "A meeting is an event where minutes are taken and hours are wasted... unless you facilitate well.",
  "To handle yourself, use your head; to handle others, use your heart."
];

export const VOCABULARY: VocabularyItem[] = [
  {
    term: "to facilitate",
    definition: "To make an action or process easier; to help a meeting run smoothly.",
    example: "My role is to facilitate the discussion, not to dominate it."
  },
  {
    term: "to monopolize",
    definition: "To take control of the conversation and prevent others from speaking.",
    example: "We need to ensure one person doesn't monopolize the entire meeting."
  },
  {
    term: "receptive",
    definition: "Willing to consider or accept new suggestions and ideas.",
    example: "The team was very receptive to the changes in the project scope."
  },
  {
    term: "nonthreatening",
    definition: "Not aggressive; creating an environment where people feel safe to speak.",
    example: "Use a nonthreatening tone when asking shy colleagues for their opinion."
  },
  {
    term: "off track",
    definition: "Deviating from the main subject or agenda.",
    example: "We are getting a bit off track; let's return to the budget issue."
  },
  {
    term: "to hand the floor",
    definition: "To give someone else the opportunity to speak during a meeting.",
    example: "I'd like to hand the floor over to Sarah to explain the marketing data."
  }
];

export const MAKE_COLLOCATIONS: GrammarPoint[] = [
  {
    collocation: "make sense",
    meaning: "To be intelligible, justifiable, or practical.",
    example: "It doesn't make sense to start the project without a budget."
  },
  {
    collocation: "make up (one's) mind",
    meaning: "To make a decision.",
    example: "He needs to make up his mind about the vendor by tomorrow."
  },
  {
    collocation: "make a suggestion",
    meaning: "To offer an idea for consideration.",
    example: "Can I make a suggestion regarding the timeline?"
  },
  {
    collocation: "make yourself comfortable",
    meaning: "To relax and feel at ease.",
    example: "Please, sit down and make yourself comfortable while we wait."
  }
];

export const SCENARIOS: PerformanceScenario[] = [
  {
    id: 1,
    title: "The Distopia Partnership",
    context: "Strategic alignment meeting before a foreign delegation arrives from 'Distopia'. Cultural sensitivity is key.",
    duration: 300,
    roles: [
      {
        role: "The Facilitator",
        description: "You are leading the meeting.",
        objective: "Get information about 'Distopia'. Ensure everyone speaks. Stop the Monopolizer. Encourage the Shy One."
      },
      {
        role: "The Monopolizer",
        description: "You have strong opinions and love to talk.",
        objective: "Try to dominate the conversation. Interrupt others. You think you know best."
      },
      {
        role: "The Shy One",
        description: "You have critical information but are afraid to speak.",
        objective: "Only speak if directly asked and encouraged. You suspect cultural differences might be an issue."
      },
      {
        role: "The Confused One",
        description: "You've been away and don't know the context.",
        objective: "Ask clarifying questions that might seem 'foolish'. You need to 'make up your mind' about the deal."
      }
    ]
  },
  {
    id: 2,
    title: "The Emergency Cut",
    context: "The company lost a major client. You must decide which department loses 20% of their budget. Tensions are high.",
    duration: 300,
    roles: [
      {
        role: "The Facilitator",
        description: "Neutral party. Must reach a decision.",
        objective: "Prevent fighting. Use 'make sense' and 'hand the floor' to keep order. Get a signed agreement."
      },
      {
        role: "The Defender (Sales)",
        description: "You refuse to cut the travel budget.",
        objective: "Argue that sales trips bring money. Monopolize the floor to defend your team."
      },
      {
        role: "The Victim (HR)",
        description: "You feel your department is always targeted.",
        objective: "Take things personally. Go 'off track' by complaining about past unfairness."
      },
      {
        role: "The Strategist (Ops)",
        description: "You see the big picture but are arrogant.",
        objective: "Make suggestions that hurt others. Try to take over the facilitator's role."
      }
    ]
  },
  {
    id: 3,
    title: "The Crisis Response",
    context: "A new product launched yesterday and crashed immediately. Clients are furious. A public statement is needed now.",
    duration: 300,
    roles: [
      {
        role: "The Facilitator",
        description: "Focus on the solution, not the blame.",
        objective: "Stop the blame game. Create a 3-step action plan. Make sure the team is 'receptive'."
      },
      {
        role: "The Blamer (Dev)",
        description: "You worked all night. You blame Marketing.",
        objective: "Refuse to accept fault. Claim Marketing 'made up' features that don't exist."
      },
      {
        role: "The Deflector (Mktg)",
        description: "You sold the dream. Tech failed you.",
        objective: "Interrupt the Dev. Say their code 'doesn't make sense'. Demand a fix immediately."
      },
      {
        role: "The Fixer (Support)",
        description: "You are fielding angry calls.",
        objective: "Ignore the fighting. Just demand what to tell customers. Be impatient."
      }
    ]
  }
];

// Fallback for types compatibility if needed elsewhere, though we should use SCENARIOS
export const ROLES: RoleCard[] = SCENARIOS[0].roles;