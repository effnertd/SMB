// challenges-content.js
// Content library for Business Needs Summary

const challengesContent = {

  // ============================================================================
  // STEP 1: DISCOVER - Challenge Identification Content
  // Used when user is selecting which challenges they face
  // ============================================================================

  discover: {
    "alignment": {
      id: "alignment",
      name: "Alignment & Getting on the Same Page",

      whatThisMeans: "Different teams or departments working toward different goals. Sales promises what operations can't deliver. Leadership can't agree on priorities for the quarter. Everyone works hard but toward different outcomes.",

      symptoms: [
        "Meetings where everyone nods but nothing changes afterward",
        "Same decisions getting re-litigated weeks later",
        "Different managers giving employees conflicting direction",
        "Teams duplicating work because nobody coordinated",
        "\"But I thought we agreed on...\" conversations"
      ],

      whyThisHappens: "Alignment breaks down when there's no shared mental model of how work flows through the organization. Different functions see different parts of the system and optimize for their piece without understanding dependencies."
    },

    "process": {
      id: "process",
      name: "Process Breakdowns & Bottlenecks",

      whatThisMeans: "Work gets stuck waiting for approvals, handoffs, or decisions. Simple tasks require too many steps. Things that should take hours take days. Bottlenecks form around specific people or approval points.",

      symptoms: [
        "Orders sitting in queue for days before anyone touches them",
        "\"I'm waiting on...\" as the most common status update",
        "Customer requests bouncing between three different people",
        "Reports that take hours to compile manually",
        "One person who \"has to touch everything\" creating delays"
      ],

      whyThisHappens: "Processes accumulate steps over time without anyone removing outdated requirements. Bottlenecks form when decision authority isn't distributed appropriately. Teams optimize their local process without seeing downstream impacts."
    },

    "handoffs": {
      id: "handoffs",
      name: "Handoffs & Communication Gaps",

      whatThisMeans: "Information gets lost when work moves between people or teams. Customer requests fall through cracks between departments. Nobody knows who's supposed to follow up. Same questions get asked over and over at each step.",

      symptoms: [
        "\"I didn't know I was supposed to...\" conversations",
        "Customer requests that disappear between departments",
        "Work delivered to the next team missing critical context",
        "Rework because the receiving team didn't understand requirements",
        "Email chains where people keep getting added because nobody knows who owns it"
      ],

      whyThisHappens: "Handoffs fail when there's no shared understanding of what the receiving team needs to succeed. Teams optimize for their own output without considering how it becomes someone else's input. Tribal knowledge sits in people's heads instead of being made explicit."
    },

    "workarounds": {
      id: "workarounds",
      name: "People Working Around the System",

      whatThisMeans: "Everyone has personal spreadsheets because the official system doesn't work. Informal phone calls to get things done faster than the official process. Shadow processes that bypass broken workflows. Personal workarounds that become unofficial procedure.",

      symptoms: [
        "\"I keep my own tracking spreadsheet because...\"",
        "Direct calls/texts to skip official channels",
        "Different people doing the same task completely differently",
        "Critical knowledge that only exists in someone's head",
        "New employees asking \"how do you really do this?\""
      ],

      whyThisHappens: "Systems fail to match how work actually happens. Official processes get designed without input from people doing the work. Technology gets implemented without understanding actual workflow. Workarounds emerge as rational responses to broken systems."
    },

    "scaling": {
      id: "scaling",
      name: "Scaling & Growth Pains",

      whatThisMeans: "Systems that worked for 10 people break at 30 people. What the founder used to handle personally now falls through cracks. Tribal knowledge that never got documented. Quality control that was informal is now inconsistent.",

      symptoms: [
        "\"We used to just know what to do, now new people are lost\"",
        "Key processes that only work if specific person does them",
        "Quality varies wildly depending on who does the work",
        "Training that's \"shadow me for a week\"",
        "Decisions that bottle up at the top because authority wasn't distributed"
      ],

      whyThisHappens: "Implicit coordination that worked at small scale doesn't scale. Knowledge concentrated in founders' heads needs to distribute. Systems designed for one context break when volume/complexity increases. Cultural transmission through proximity fails as teams grow."
    },

    "technology": {
      id: "technology",
      name: "Technology & System Integration",

      whatThisMeans: "Entering the same information in three different places. Data that doesn't sync between systems. New software nobody uses because it doesn't match workflow. Manual workarounds because systems don't talk to each other.",

      symptoms: [
        "\"Why do I have to enter this twice?\"",
        "Reports requiring manual data compilation from multiple sources",
        "Customer data living in spreadsheets instead of the CRM",
        "Systems bought to solve problems but creating new ones",
        "IT projects that don't deliver promised benefits"
      ],

      whyThisHappens: "Technology gets selected based on features without understanding actual workflow. Systems get implemented top-down without user input. Integration challenges underestimated. Process design happens after technology selection instead of before."
    },

    "priorities": {
      id: "priorities",
      name: "Priorities & Decision-Making",

      whatThisMeans: "Everything feels urgent, nothing gets finished. Not sure if you should invest in people, processes, or technology. Different stakeholders pushing for different priorities. Analysis paralysis when facing multiple good options. Constant priority shifting based on whoever spoke last.",

      symptoms: [
        "\"Everything is a priority\" (which means nothing is)",
        "Projects that start but never finish",
        "Teams thrashing between initiatives",
        "Decisions that get made but then reversed",
        "Lack of clear decision-making authority"
      ],

      whyThisHappens: "No shared framework for evaluating tradeoffs. Unclear decision-making authority. Reactive mode instead of strategic mode. Missing feedback loops to learn if decisions were good. Fear of committing to one path."
    },

    "quality": {
      id: "quality",
      name: "Customer or Quality Issues",

      whatThisMeans: "Customers complaining about the same thing over and over. Quality inconsistencies depending on who does the work. Mistakes that happen even though people know better. Gap between what you think you deliver and what customers receive.",

      symptoms: [
        "Same customer complaint appearing repeatedly",
        "\"That's not what I expected\" from customers",
        "Rework because quality wasn't right the first time",
        "Customer satisfaction scores trending down",
        "Defensive reactions when quality issues surface"
      ],

      whyThisHappens: "Gap between intention and execution. No feedback loops from customers to delivery teams. Quality standards not made explicit. Variation in execution without understanding why. Systems that make it hard to do the right thing."
    },

    "onboarding": {
      id: "onboarding",
      name: "New Hire Onboarding",

      whatThisMeans: "New people asking the same questions because nothing's written down. Taking months to learn things that should take weeks. Heavy reliance on one person to train everyone. New hires not knowing who to ask for what. High early turnover because people feel lost.",

      symptoms: [
        "\"Just ask Sarah, she'll show you\"",
        "New hires productive at 6 months when it should be 6 weeks",
        "Critical knowledge only existing in specific people's heads",
        "Same training questions over and over",
        "New employees saying \"I wish someone had told me that on day one\""
      ],

      whyThisHappens: "Tacit knowledge never made explicit. Training designed for exceptions instead of common path. No documented processes. Onboarding designed once and never updated. Experienced employees too busy to train properly."
    },

    "roles": {
      id: "roles",
      name: "Unclear Roles & Responsibilities",

      whatThisMeans: "Tasks fall through cracks because everyone assumes someone else will do it. Duplicate work because people don't know others are handling it. Conflicts over who has decision-making authority. Confusion about who owns which customer relationships. \"That's not my job\" versus \"I thought you were doing that.\"",

      symptoms: [
        "\"Who's supposed to handle this?\" conversations",
        "Work that doesn't get done because everyone thought someone else owned it",
        "Toe-stepping where two people do the same thing",
        "Unclear escalation paths",
        "New initiatives where nobody knows who's driving"
      ],

      whyThisHappens: "Roles designed when company was different size. Responsibilities accumulated organically without clarity. Reorganizations that didn't clarify new boundaries. Matrix structures without clear decision rights. Fast growth outpacing role definition."
    }
  },

  // ============================================================================
  // STEP 3: MAP - Intersection Patterns (Very Short)
  // Used when showing how challenges compound each other
  // ============================================================================

  intersections: {
    "alignment-process": {
      challenges: ["alignment", "process"],
      label: "Alignment × Process Breakdowns",
      impact: "Duplicated effort on the wrong things. Energy goes to fixing symptoms rather than root causes."
    },

    "alignment-handoffs": {
      challenges: ["alignment", "handoffs"],
      label: "Alignment × Handoffs",
      impact: "Teams pass work to each other without shared understanding of priorities or context."
    },

    "alignment-priorities": {
      challenges: ["alignment", "priorities"],
      label: "Alignment × Priorities",
      impact: "Constant reprioritization because no shared framework for making tradeoff decisions."
    },

    "alignment-roles": {
      challenges: ["alignment", "roles"],
      label: "Alignment × Unclear Roles",
      impact: "Nobody knows who decides, so decisions either don't get made or get made multiple times."
    },

    "process-handoffs": {
      challenges: ["process", "handoffs"],
      label: "Process Breakdowns × Handoffs",
      impact: "Work gets stuck at handoff points. Receiving teams don't know when to expect work or in what state."
    },

    "process-workarounds": {
      challenges: ["process", "workarounds"],
      label: "Process Breakdowns × Workarounds",
      impact: "Official process broken, everyone has their own way. Impossible to improve what you can't see."
    },

    "process-technology": {
      challenges: ["process", "technology"],
      label: "Process Breakdowns × Technology",
      impact: "Systems designed for ideal process, not actual process. Technology can't fix broken workflow."
    },

    "handoffs-quality": {
      challenges: ["handoffs", "quality"],
      label: "Handoffs × Quality Issues",
      impact: "Information loss at handoffs leads to rework and customer-facing errors."
    },

    "handoffs-roles": {
      challenges: ["handoffs", "roles"],
      label: "Handoffs × Unclear Roles",
      impact: "Work falls through cracks when nobody knows who owns the receiving end of a handoff."
    },

    "workarounds-technology": {
      challenges: ["workarounds", "technology"],
      label: "Workarounds × Technology",
      impact: "Data integrity lost. Multiple versions of truth. Systems you paid for become useless."
    },

    "workarounds-onboarding": {
      challenges: ["workarounds", "onboarding"],
      label: "Workarounds × Onboarding",
      impact: "New hires learn the workaround, not the system. Knowledge doesn't transfer cleanly."
    },

    "scaling-onboarding": {
      challenges: ["scaling", "onboarding"],
      label: "Scaling × Onboarding",
      impact: "Vicious cycle: grow faster, train worse, quality drops, experienced staff overwhelmed."
    },

    "scaling-roles": {
      challenges: ["scaling", "roles"],
      label: "Scaling × Unclear Roles",
      impact: "Old roles don't fit new size. Authority concentrated at top creates bottlenecks."
    },

    "scaling-quality": {
      challenges: ["scaling", "quality"],
      label: "Scaling × Quality Issues",
      impact: "Informal quality control that worked small doesn't scale. Variation increases with team size."
    },

    "technology-quality": {
      challenges: ["technology", "quality"],
      label: "Technology × Quality Issues",
      impact: "Systems that don't match workflow make it harder to do quality work consistently."
    },

    "priorities-process": {
      challenges: ["priorities", "process"],
      label: "Priorities × Process Breakdowns",
      impact: "Can't prioritize improvements because you don't know where the real bottlenecks are."
    },

    "priorities-roles": {
      challenges: ["priorities", "roles"],
      label: "Priorities × Unclear Roles",
      impact: "Everyone has different priorities because nobody knows who has authority to set them."
    },

    "quality-onboarding": {
      challenges: ["quality", "onboarding"],
      label: "Quality Issues × Onboarding",
      impact: "New hires don't learn quality standards. Variation increases as team grows."
    },

    "onboarding-roles": {
      challenges: ["onboarding", "roles"],
      label: "Onboarding × Unclear Roles",
      impact: "New hires don't know who to ask for what. Learn by trial and error instead of clear guidance."
    }
  },

  // ============================================================================
  // STEP 4: RECOMMENDATIONS - Service Design Starting Points
  // Used in final summary to provide actionable next steps
  // ============================================================================

  recommendations: {
    "alignment": {
      approaches: [
        {
          name: "Get in the Same Room",
          description: "Bring the right people together for a focused 90-minute session. Put your priorities on the table, have an honest conversation about where things stand, and leave with a written summary of what you agreed on. Simple, but surprisingly rare."
        },
        {
          name: "Map One Process Together",
          description: "Pick one cross-functional process that's causing friction and walk through it together — step by step, across teams. You'll surface where people have different assumptions about the same work. The act of mapping it together usually solves half the problem."
        },
        {
          name: "Build a Shared Rhythm",
          description: "Misalignment often isn't a one-time fix — it creeps back. Establish a regular check-in (monthly or quarterly) where leadership reviews priorities, surfaces conflicts, and makes decisions before they become problems."
        }
      ],

      firstSteps: [
        "Pick one area where teams seem to be pulling in different directions",
        "Schedule a 90-minute working session with the people who need to be aligned",
        "Capture what you agree on in writing — even a half-page summary helps",
        "Set a date to revisit it"
      ]
    },

    "process": {
      approaches: [
        {
          name: "Walk the Process with the People Who Do It",
          description: "Don't map processes from memory in a conference room — walk through them with the people who actually do the work. You'll find wait times, redundant steps, and approval chains that nobody questions anymore. That's where the time is being lost."
        },
        {
          name: "Find the One Thing Slowing Everything Else Down",
          description: "Most process problems trace back to one or two real bottlenecks — a person, an approval, a handoff point. Identify what that is before you try to fix anything. Solving the wrong step won't move the needle."
        },
        {
          name: "Pick One Process and Fix It Completely",
          description: "Don't try to improve everything at once. Pick the one process causing the most pain, redesign it with input from the people involved, pilot it for a few weeks, and refine it. A fully fixed process is worth more than five partially improved ones."
        }
      ],

      firstSteps: [
        "Pick the one process your team complains about most",
        "Sit with two or three people who actually do it and time how long each step takes",
        "Find the step where work consistently gets stuck or lost",
        "Ask: is this a people issue, a process issue, or a system issue?",
        "Design a simple fix, test it for two weeks, and adjust"
      ]
    },

    "handoffs": {
      approaches: [
        {
          name: "Define What a Good Handoff Looks Like",
          description: "Most handoff problems happen because the sending team and receiving team have different ideas of what \"done\" means. Get both sides in the room, agree on what information needs to transfer and in what format, and write it down. That agreement alone eliminates most of the friction."
        },
        {
          name: "Ask the Receiving Team What They Actually Need",
          description: "The team handing off work optimizes for their own process. The team receiving it often gets what's easy to send, not what they need to succeed. Interview the downstream team — what are they missing? What slows them down? Design the handoff around their needs."
        },
        {
          name: "Create a Simple Handoff Checklist",
          description: "You don't need a complex system. A one-page checklist that both sides reference before and after a handoff catches most of the common gaps. Start with your highest-volume, most-broken handoff and build from there."
        }
      ],

      firstSteps: [
        "Identify the handoff that causes the most rework or complaints",
        "Talk to both sides: what do you expect to receive? what do you actually get?",
        "Write down the gap between those two answers",
        "Create a simple checklist or template for that handoff",
        "Run it for two weeks and refine based on what still falls through"
      ]
    },

    "workarounds": {
      approaches: [
        {
          name: "Surface the Workarounds — Without Judgment",
          description: "Ask your team how work really gets done. Not how it's supposed to get done — how it actually happens. Most people have built their own systems because the official ones don't work. Understanding why they did that tells you exactly what's broken."
        },
        {
          name: "Decide: Fix the System or Formalize the Workaround",
          description: "Sometimes the workaround is actually better than the official process. If it is, make it the official process. If it isn't, fix what's driving people to avoid the system in the first place. Either way, the goal is one consistent way of working — not compliance for its own sake."
        },
        {
          name: "Redesign with the People Who Built the Workarounds",
          description: "The people who created workarounds did it for a reason. They're your best source of insight into what's broken — and they're also the most important people to have on board when you fix it. Involve them in the solution."
        }
      ],

      firstSteps: [
        "Ask three or four people: \"walk me through how you actually do this\"",
        "List the most common workarounds and what problem each one solves",
        "For each workaround, decide: is the official process fixable, or is the workaround actually better?",
        "Pick one to formalize or fix, pilot it with the people involved",
        "Don't try to eliminate all workarounds at once — start with the one causing the most risk"
      ]
    },

    "scaling": {
      approaches: [
        {
          name: "Get the Knowledge Out of People's Heads",
          description: "Most scaling problems are knowledge problems. When your best people are the only ones who know how something works, you have a bottleneck and a risk. Sit with them, ask them to walk you through what they do, and capture it in a format others can actually use — not a 40-page manual, but something clear and practical."
        },
        {
          name: "Redistribute Decision-Making",
          description: "When a business grows, decisions that used to flow through one or two people need to move closer to where the work happens. Identify which decisions are creating bottlenecks at the top, and deliberately push authority down to the people who have the context to make them well."
        },
        {
          name: "Standardize the Core, Leave Room for Judgment",
          description: "You don't need to script everything — you need consistency in the parts that matter most. Identify the handful of processes where variation is actually hurting you, standardize those, and give people latitude in everything else. Over-engineering at this stage creates its own problems."
        }
      ],

      firstSteps: [
        "List the three processes that break most often as you add people or volume",
        "Identify who holds the knowledge those processes depend on",
        "Schedule time with those people to document what they actually do",
        "Identify two or three decisions that consistently come back to you that shouldn't",
        "Define who should be making those calls and give them the authority to do it"
      ]
    },

    "technology": {
      approaches: [
        {
          name: "Fix the Process Before Buying More Technology",
          description: "Most technology problems are process problems in disguise. Adding a new system to a broken workflow just makes the workflow faster and more complicated. Before evaluating any technology, document how the work actually flows today — then decide what a system needs to do to support it."
        },
        {
          name: "Follow One Transaction Through All Your Systems",
          description: "Pick one thing — a policy, a claim, a customer request — and trace every step it takes from start to finish, including every system it touches. You'll find re-entry points, data gaps, and handoffs that nobody intended but everyone lives with. That map tells you where to start."
        },
        {
          name: "Audit What You're Actually Using",
          description: "Most organizations are paying for systems they've outgrown, underusing tools they own, or running parallel systems for the same job. Take stock of what you have, what people actually use it for, and where the real gaps are. That's a more useful starting point than a technology search."
        }
      ],

      firstSteps: [
        "Pick the workflow where technology friction is causing the most problems",
        "Map the current state — every system, every manual step, every re-entry point",
        "Talk to three to five people who use those systems daily: what slows them down most?",
        "Determine whether the problem is a missing tool, a broken integration, or a process that needs redesigning",
        "Don't add new technology until you've answered that question"
      ]
    },

    "priorities": {
      approaches: [
        {
          name: "Force the Conversation About What Actually Matters",
          description: "When everything is a priority, nothing is. The most valuable thing you can do is get the right people in a room and force a real ranking — not a list where everything lands in the top tier. A simple exercise with clear criteria usually breaks the logjam faster than another strategy document."
        },
        {
          name: "Clarify Who Has the Authority to Decide",
          description: "Most priority conflicts aren't really about priorities — they're about unclear decision-making authority. Who has the final call when two things compete for the same resources or attention? Answering that question explicitly is often more valuable than the prioritization itself."
        },
        {
          name: "Make Fewer Commitments and Finish Them",
          description: "Organizations that struggle with priorities usually have too many active initiatives, not too few ideas. Pick the three things that matter most right now, resource them properly, and hold the line. Finishing things creates momentum that a long list of in-progress work never does."
        }
      ],

      firstSteps: [
        "List everything currently being treated as a priority",
        "Get the decision-makers together and force-rank the list — not group it into tiers",
        "Identify the top three and confirm they have the resources to actually move",
        "Explicitly defer or kill the things that didn't make the cut",
        "Set a 30-day check-in to hold the line and catch drift early"
      ]
    },

    "quality": {
      approaches: [
        {
          name: "Start with the Complaints You Keep Hearing",
          description: "You don't need a formal audit to know where quality is breaking down — your team and your customers are already telling you. Collect the top five recurring complaints and trace each one back to where in the process it's actually created. Surface symptoms point to underlying causes."
        },
        {
          name: "Look at the Experience from the Customer's Side",
          description: "The gap between what you intend to deliver and what customers actually experience is often wider than you think. Walk through the process as a customer — or talk to real customers about it. What you find will almost always surprise you, and it will point you toward the right fixes."
        },
        {
          name: "Create a Feedback Loop That Closes",
          description: "Quality problems persist when there's no consistent way for frontline staff to hear what customers are experiencing. Build a simple mechanism to surface issues early, route them to the people who can fix them, and confirm when they've been resolved. The feedback loop matters more than the format."
        }
      ],

      firstSteps: [
        "List the five customer complaints or quality issues that come up most often",
        "For each one, trace it back to where in your process it originates — not just where it shows up",
        "Determine if the root cause is a process gap, a training gap, or a system limitation",
        "Fix the most common and most fixable one first",
        "Build in a way to know if the fix is actually working"
      ]
    },

    "onboarding": {
      approaches: [
        {
          name: "Ask Your Recent Hires What Was Actually Confusing",
          description: "The best source of information about your onboarding gaps is the people who just went through it. Talk to anyone who joined in the last six months — what took too long to figure out? What do they wish someone had told them on day one? That conversation alone will surface your biggest gaps."
        },
        {
          name: "Document the Five Things Every New Hire Needs to Know",
          description: "You don't need a comprehensive training program to start. Identify the five to ten things that new hires consistently struggle with or ask about, and create simple, practical guides for those. A short video or a one-page reference often works better than a formal manual."
        },
        {
          name: "Give New Hires a Real Point of Contact",
          description: "New employees learn faster and feel more confident when they have one person they can ask questions without feeling like a burden. Assign a peer — not a manager — to each new hire for their first 60 to 90 days. It's low-cost and high-impact."
        }
      ],

      firstSteps: [
        "Talk to the last two or three people who joined: what was the hardest part of getting started?",
        "List the five processes or systems new hires need to use most in their first month",
        "Create a simple guide or quick-reference for each one",
        "Assign a peer contact for each new hire going forward",
        "Add a 30-day and 60-day check-in to catch issues while they're still small"
      ]
    },

    "roles": {
      approaches: [
        {
          name: "Name Who Owns What — Out Loud",
          description: "Most role confusion doesn't require a reorganization — it requires an explicit conversation. Get the relevant people together, go through the areas where ownership is unclear, and make a decision. Write it down, share it broadly, and revisit it when things change. The clarity matters more than the format."
        },
        {
          name: "Clarify Who Decides When Things Conflict",
          description: "Unclear roles are most painful at the decision points — when two people think they own the same call, or when nobody does. Map out the decisions that most often create conflict or confusion, and get explicit agreement on who has authority to make each one. That alone removes a lot of daily friction."
        },
        {
          name: "Match Roles to How Work Actually Flows",
          description: "Role confusion often happens because the org chart reflects the past, not how work actually gets done today. Map the real workflow — who does what, who hands off to whom — and see where the formal roles match up and where they don't. Use that to have a practical conversation about adjustments."
        }
      ],

      firstSteps: [
        "Identify the three areas where \"who owns this?\" comes up most often",
        "Get the relevant people together and make explicit decisions about ownership for each one",
        "Write it down and share it — even a simple email or shared doc helps",
        "Identify the two or three decisions that most often stall because authority is unclear",
        "Revisit the role clarity conversation in 60 days to see what's still creating confusion"
      ]
    }
  },

  // ============================================================================
  // QUADRANT GUIDANCE - For interpreting priority matrix placements
  // ============================================================================

  quadrants: {
    "high-risk-high-pain": {
      label: "High Risk / High Pain",
      action: "ACT NOW",
      interpretation: "This issue threatens your core operations AND causes daily friction. Addressing it creates immediate relief and prevents larger problems.",
      color: "#e53e3e"
    },

    "high-risk-low-pain": {
      label: "High Risk / Low Pain",
      action: "MONITOR & PREVENT",
      interpretation: "Not hurting much yet, but poses significant risk if ignored. Schedule time to address before it becomes urgent.",
      color: "#dd6b20"
    },

    "low-risk-high-pain": {
      label: "Low Risk / High Pain",
      action: "QUICK WINS",
      interpretation: "Causing daily frustration but won't sink the business. Great candidates for quick wins that boost morale.",
      color: "#d69e2e"
    },

    "low-risk-low-pain": {
      label: "Low Risk / Low Pain",
      action: "DEFER",
      interpretation: "Not urgent and not critical. Address after higher-priority items are resolved.",
      color: "#718096"
    }
  }
};
