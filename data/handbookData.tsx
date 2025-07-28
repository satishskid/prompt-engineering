import React from 'react';
import { SectionData, Quiz } from '../types';

const StyleWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="space-y-4">{children}</div>;
const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4 border-b border-slate-200 pb-2">{children}</h2>;
const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>;
const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>;
const P: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="text-base leading-relaxed">{children}</p>;
const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => <ul className="list-disc list-inside space-y-2 pl-4">{children}</ul>;
const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => <li>{children}</li>;
const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => <code className="bg-slate-100 text-slate-800 font-mono text-sm rounded-md px-2 py-1">{children}</code>;
const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-600 my-4">{children}</blockquote>;
const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => <table className="w-full my-6 border-collapse">{children}</table>;
const Th: React.FC<{ children: React.ReactNode }> = ({ children }) => <th className="border border-slate-300 bg-slate-100 p-2 text-left font-semibold">{children}</th>;
const Td: React.FC<{ children: React.ReactNode }> = ({ children }) => <td className="border border-slate-300 p-2 align-top">{children}</td>;


const quiz1: Quiz = {
    id: 1,
    title: 'The Four Pillars',
    questions: [
        {
            question: "Which of the 'Four Pillars' is considered the most critical part of any prompt?",
            options: ["Persona", "Task", "Context", "Format"],
            correctAnswerIndex: 1,
            explanation: "The 'Task' is the explicit instruction or command that directs the AI on what action to perform, making it the most critical part of any prompt."
        },
        {
            question: "Instructing an AI to 'Act as a travel guide' is an example of which pillar?",
            options: ["Persona", "Task", "Context", "Format"],
            correctAnswerIndex: 0,
            explanation: "Assigning a 'Persona' involves instructing the AI model to adopt a specific character or identity, such as a travel guide."
        },
        {
            question: "What is the primary value of the 'Format' pillar?",
            options: ["To make the AI more creative", "To provide background information", "To organize information for usability and automation", "To assign a personality to the AI"],
            correctAnswerIndex: 2,
            explanation: "The 'Format' pillar dictates the desired structure of the output, which helps organize information for better usability and can enable downstream automation."
        },
        {
            question: "Using '@file name' in a prompt to reference your own documents is a powerful way to leverage which pillar?",
            options: ["Persona", "Task", "Context", "Format"],
            correctAnswerIndex: 2,
            explanation: "Providing 'Context' involves furnishing the AI with specific details, and using your own files via '@file name' is a highly effective way to do this."
        }
    ]
};

const quiz2: Quiz = {
    id: 2,
    title: 'Essential Techniques',
    questions: [
        {
            question: "Which prompting technique involves giving the AI a task description without any examples?",
            options: ["One-Shot Prompting", "Few-Shot Prompting", "System Prompting", "Zero-Shot Prompting"],
            correctAnswerIndex: 3,
            explanation: "Zero-Shot prompting is the most straightforward approach, providing only a task description without any specific examples to guide the AI."
        },
        {
            question: "When is Few-Shot prompting particularly valuable?",
            options: ["For simple, direct tasks", "For tasks requiring a specific, complex output pattern or style", "When you want the shortest possible response", "When you want to set an overall purpose for the AI"],
            correctAnswerIndex: 1,
            explanation: "Few-Shot prompting, which provides multiple examples, is most effective for complex tasks where the AI needs to discern a consistent pattern or style."
        },
        {
            question: "What does 'System Prompting' primarily define?",
            options: ["A specific character for the AI to adopt", "The background information for a single query", "The overarching context and purpose for the language model", "The number of examples to provide"],
            correctAnswerIndex: 2,
            explanation: "'System Prompting' establishes the 'big picture' for the AI, defining its overall goal, output format requirements, or safety guidelines for the conversation."
        },
        {
            question: "Giving the AI an example like 'Translate 'hello' to French: Bonjour. Now, translate 'goodbye' to Spanish:' is an example of what?",
            options: ["Zero-Shot Prompting", "Role Prompting", "Contextual Prompting", "One-Shot Prompting"],
            correctAnswerIndex: 3,
            explanation: "'One-Shot Prompting' involves providing a single example to the AI, which it then uses as a template to imitate for the new task."
        }
    ]
};

const quiz3: Quiz = {
    id: 3,
    title: 'Advanced Strategies',
    questions: [
        {
            question: "What phrase is commonly added to a prompt to initiate 'Chain of Thought' (CoT) prompting?",
            options: ["'Explain yourself'", "'Show your work'", "'Let's think step by step'", "'Be more logical'"],
            correctAnswerIndex: 2,
            explanation: "Simply appending 'Let's think step by step' is a common and effective way to trigger Chain of Thought reasoning in an LLM."
        },
        {
            question: "What is the primary benefit of 'Step-Back Prompting'?",
            options: ["It makes the AI's response shorter.", "It forces the AI to use only its most recent training data.", "It encourages the AI to consider broader principles before solving a specific problem.", "It translates code from one language to another."],
            correctAnswerIndex: 2,
            explanation: "'Step-Back Prompting' works by having the AI first answer a more general question, which helps it activate relevant background knowledge and generate more insightful responses for the specific task."
        },
        {
            question: "Which of the following is NOT a way AI can assist with code, according to the handbook?",
            options: ["Writing new code from natural language prompts", "Explaining what existing code does", "Guaranteeing that generated code is always bug-free and secure", "Debugging and reviewing existing code for errors"],
            correctAnswerIndex: 2,
            explanation: "The handbook explicitly warns that AI-generated code should always be thoroughly reviewed and tested, as LLMs may replicate flaws from their training data and do not possess true reasoning."
        },
        {
            question: "Setting the AI's 'temperature' parameter to 0 is a best practice for which type of task?",
            options: ["Creative writing", "Brainstorming slogans", "Reasoning tasks with a single correct answer", "Generating humorous content"],
            correctAnswerIndex: 2,
            explanation: "For reasoning tasks like those using Chain of Thought, a temperature of 0 is recommended to ensure a deterministic output, as it makes the AI select the highest probability token at each step."
        }
    ]
};

const quiz4: Quiz = {
    id: 4,
    title: 'Best Practices',
    questions: [
        {
            question: "When guiding an AI, which approach is generally more effective?",
            options: ["Focusing on negative constraints (what not to do)", "Using complex jargon to be more precise", "Focusing on positive instructions (what to do)", "Writing the longest, most detailed prompt possible"],
            correctAnswerIndex: 2,
            explanation: "The handbook emphasizes that prioritizing positive instructions ('do this') over negative constraints ('don't do that') is generally more effective for guiding AI."
        },
        {
            question: "What is the main benefit of using variables (e.g., `{city}`) in prompts?",
            options: ["It makes the AI more creative", "It improves the AI's reasoning ability", "It makes the prompt reusable and dynamic", "It guarantees a shorter response"],
            correctAnswerIndex: 2,
            explanation: "Using variables allows you to create reusable prompt templates that can be applied to different inputs, saving time and effort."
        },
        {
            question: "Why is it crucial to document your prompt engineering attempts?",
            options: ["To make the AI run faster", "To create a knowledge base, avoid repeating failures, and track performance", "To receive a discount on AI usage", "To automatically fix bugs in the AI model"],
            correctAnswerIndex: 1,
            explanation: "Documentation creates an invaluable record for revisiting past work, debugging, testing across model versions, and sharing successful strategies with a team."
        },
        {
            question: "What does the principle 'Keep it Simple and Clear' primarily advise against?",
            options: ["Using action-oriented verbs", "Being specific about the desired output", "Using complex language, jargon, and non-essential information", "Iterating on your prompts"],
            correctAnswerIndex: 2,
            explanation: "This fundamental principle advises avoiding ambiguity and complexity. Prompts should be concise and direct, avoiding jargon or unnecessary details that could confuse the AI."
        }
    ]
};


export const handbookData: SectionData[] = [
    {
        id: 0,
        title: "Introduction: Your AI Superpower",
        shortTitle: "Introduction",
        content: (
            <StyleWrapper>
                <P>The advent of large language models (LLMs) has ushered in a new era of artificial intelligence, making sophisticated capabilities accessible to a broader audience. Within this landscape, prompt engineering emerges as a pivotal skill, empowering individuals across all professional domains to harness AI effectively. This discipline is not exclusive to data scientists or machine learning engineers; rather, it is a skill that can be acquired by anyone seeking to optimize their interaction with AI systems.</P>
                <P>Prompt engineering involves the meticulous design of high-quality inputs, known as prompts, to guide LLMs toward generating precise and desirable outputs. This process is inherently iterative, requiring careful adjustment to identify the most effective prompt, optimize its length, and refine its style and structure in relation to the specific task at hand.</P>
                <Blockquote>Empowering employees to discover and implement their own AI applications is often a more effective strategy for success than relying solely on large-scale, top-down AI initiatives.</Blockquote>
                <P>The proficiency in crafting effective prompts is paramount because poorly constructed prompts can lead to ambiguous or inaccurate responses, thereby impeding the AI's capacity to deliver meaningful results. Conversely, well-engineered prompts directly enhance AI output, significantly boosting productivity and fostering creativity across a diverse range of tasks.</P>
                <P>This handbook is designed to equip professionals with the foundational skills necessary for writing effective prompts. It offers a practical, quick-start guide for immediate application. The subsequent sections will introduce core concepts, essential techniques, and established best practices, complemented by real-world examples and hands-on exercises to facilitate practical mastery.</P>
            </StyleWrapper>
        )
    },
    {
        id: 1,
        title: 'The Four Pillars of an Effective Prompt',
        shortTitle: "The Four Pillars",
        quiz: quiz1,
        content: (
            <StyleWrapper>
                <P>To consistently achieve desirable outcomes from AI models, it is essential to understand the fundamental components that constitute an effective prompt. These components, often referred to as the four pillars, include Persona, Task, Context, and Format. While it is not always necessary to incorporate all four elements into every prompt, the strategic inclusion of even a few can significantly enhance the quality and relevance of the AI's response.</P>
                <H3>1. Persona: Defining the AI's Role</H3>
                <P>Assigning a persona involves instructing the AI model to adopt a specific character or identity. This directive guides the model to generate responses that are consistent with the assigned role, encompassing its associated knowledge, stylistic preferences, and behavioral patterns.</P>
                <Blockquote>Example: Instructing the AI to act as a <Code>travel guide</Code> or a <Code>program manager in a specific industry</Code> will elicit responses that reflect the expertise, tone, and focus characteristic of that role.</Blockquote>
                <H3>2. Task: Specifying the AI's Action</H3>
                <P>The task component of a prompt is the explicit instruction or command that directs the AI on what action to perform. This element is universally recognized as the most critical part of any prompt. To maximize effectiveness, it is recommended to employ strong, action-oriented verbs like "Analyze," "Create," "Summarize," or "Translate."</P>
                <Blockquote>Example: A prompt might clearly state, <Code>Draft an executive summary email</Code> or <Code>Classify movie reviews as POSITIVE, NEUTRAL or NEGATIVE</Code>.</Blockquote>
                <H3>3. Context: Providing Background Information</H3>
                <P>Context involves furnishing the AI with specific details or background information pertinent to the current conversation or task. A particularly powerful method is to integrate information from your own files by tagging relevant documents within the prompt, for example, by typing <Code>@file name</Code>.</P>
                <Blockquote>Example: <Code>Context: You are writing for a blog about retro 80's arcade video games. Suggest 3 topics to write an article about...</Code></Blockquote>
                <H3>4. Format: Structuring the AI's Response</H3>
                <P>The format component dictates the desired structure or presentation of the AI's generated output. This is about rendering the AI's output machine-readable and actionable for subsequent processing or integration with other software.</P>
                <Blockquote>Examples: <Code>Limit to bullet points</Code>, <Code>Organize this agenda in a table format</Code>, or <Code>Return valid JSON</Code>.</Blockquote>
                
                <div className="my-8 overflow-x-auto">
                    <Table>
                        <thead>
                            <tr>
                                <Th>Pillar Name</Th>
                                <Th>Brief Explanation</Th>
                                <Th>Simple Example</Th>
                                <Th>Why it Matters (Value)</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td><strong>Persona</strong></Td>
                                <Td>Defines the role or identity the AI should adopt.</Td>
                                <Td><Code>"You are a travel guide."</Code></Td>
                                <Td>Guides AI's tone, style, and knowledge focus for tailored responses.</Td>
                            </tr>
                            <tr>
                                <Td><strong>Task</strong></Td>
                                <Td>The explicit action or command the AI should perform.</Td>
                                <Td><Code>"Draft an executive summary email."</Code></Td>
                                <Td>Directs AI to the precise desired outcome, preventing ambiguity.</Td>
                            </tr>
                             <tr>
                                <Td><strong>Context</strong></Td>
                                <Td>Background information or specific details relevant to the request.</Td>
                                <Td><Code>"Based on @[program docs]."</Code></Td>
                                <Td>Ensures AI's response is relevant, accurate, and personalized.</Td>
                            </tr>
                             <tr>
                                <Td><strong>Format</strong></Td>
                                <Td>The desired structure or presentation of the AI's output.</Td>
                                <Td><Code>"Limit to bullet points."</Code></Td>
                                <Td>Organizes information for usability and enables automation.</Td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </StyleWrapper>
        ),
    },
    {
        id: 2,
        title: "Essential Prompting Techniques for Daily Tasks",
        shortTitle: "Essential Techniques",
        quiz: quiz2,
        content: (
            <StyleWrapper>
                 <P>The clarity of the prompt text directly correlates with the quality of the AI's prediction. Specific techniques can significantly enhance the relevance and utility of the generated outputs. This section introduces fundamental prompting techniques.</P>
                 <H3>Direct & Simple: Zero-Shot Prompting</H3>
                 <P>This is the most straightforward approach, involving only a description of the task without any specific examples. It's effective for direct tasks where the AI's training data provides a strong foundation.</P>
                 <Blockquote>Example: <Code>Classify movie reviews as POSITIVE, NEUTRAL or NEGATIVE</Code></Blockquote>
                 <H3>Learning from Examples: One-Shot & Few-Shot Prompting</H3>
                 <P>When zero-shot is insufficient, providing examples is a powerful strategy. <Code>One-shot</Code> provides a single example, while <Code>few-shot</Code> provides multiple examples to help the model discern a consistent pattern.</P>
                 <P>This technique empowers non-technical users to "program" the AI with specific behaviors without writing traditional code.</P>
                 <H3>Setting the Stage: System, Role, and Contextual Prompting</H3>
                 <UL>
                    <LI><strong>System Prompting:</strong> Establishes the overarching context and purpose, defining the "big picture." Can include format instructions like <Code>Only return the label in uppercase</Code>.</LI>
                    <LI><strong>Role Prompting:</strong> Assigns a specific character or identity to the AI, such as <Code>act as a travel guide</Code>. This defines the tone, style, and expertise.</LI>
                    <LI><strong>Contextual Prompting:</strong> Provides specific background information relevant to the current task to help the AI understand subtleties.</LI>
                 </UL>

                 <div className="my-8 overflow-x-auto">
                    <Table>
                        <thead>
                            <tr>
                                <Th>Technique Name</Th>
                                <Th>Brief Description</Th>
                                <Th>When to Use</Th>
                                <Th>Example</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td><strong>Zero-Shot</strong></Td>
                                <Td>Provides only the task description, no examples.</Td>
                                <Td>For straightforward tasks where AI has strong inherent understanding.</Td>
                                <Td><Code>"Classify movie reviews..."</Code></Td>
                            </tr>
                            <tr>
                                <Td><strong>One-Shot</strong></Td>
                                <Td>Provides a single input-output example.</Td>
                                <Td>When steering the AI to a specific output structure or pattern.</Td>
                                <Td><Code>"Translate 'hello' to French: Bonjour..."</Code></Td>
                            </tr>
                            <tr>
                                <Td><strong>Few-Shot</strong></Td>
                                <Td>Provides multiple input-output examples.</Td>
                                <Td>For complex tasks requiring a specific output pattern or style.</Td>
                                <Td>Parsing pizza orders to JSON with multiple examples.</Td>
                            </tr>
                            <tr>
                                <Td><strong>System</strong></Td>
                                <Td>Sets overall context and purpose for the AI.</Td>
                                <Td>To define AI's overarching goal or required output format.</Td>
                                <Td><Code>"Only return the label in uppercase."</Code></Td>
                            </tr>
                            <tr>
                                <Td><strong>Role</strong></Td>
                                <Td>Assigns a specific character or identity to the AI.</Td>
                                <Td>To define AI's tone, style, and focused expertise.</Td>
                                <Td><Code>"Act as a travel guide..."</Code></Td>
                            </tr>
                             <tr>
                                <Td><strong>Contextual</strong></Td>
                                <Td>Provides specific background information for the task.</Td>
                                <Td>To help AI understand nuances and tailor responses.</Td>
                                <Td><Code>"Context: You are writing for a blog..."</Code></Td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </StyleWrapper>
        )
    },
    {
        id: 3,
        title: "Unlocking Deeper Insights: Advanced Prompting Strategies",
        shortTitle: "Advanced Strategies",
        quiz: quiz3,
        content: (
            <StyleWrapper>
                <P>Advanced prompting strategies enable AI models to perform more complex reasoning, problem-solving, and even assist with specialized tasks such as code generation.</P>
                <H3>Thinking Step-by-Step: Chain of Thought (CoT) Prompting</H3>
                <P>CoT prompting enhances the reasoning capabilities of LLMs by compelling them to generate intermediate reasoning steps. This significantly improves accuracy for tasks requiring logical progression. The method often involves simply appending a phrase like <Code>Let's think step by step</Code> to the prompt.</P>
                <Blockquote>CoT transforms the AI from a black box into a transparent problem-solver. This is invaluable for tasks demanding accuracy and logical progression, such as data analysis or troubleshooting.</Blockquote>
                <H3>Taking a Step Back: Step-Back Prompting</H3>
                <P>This technique enhances performance by introducing a preliminary, more general question related to the specific task. The answer to this general question is then fed into the subsequent prompt. This "step back" allows the AI to activate relevant background knowledge before solving the immediate problem.</P>
                <P>This is about asking the right preliminary questions to obtain better final answers.</P>
                <H3>AI as Your Code Assistant</H3>
                <P>AI can serve as an exceptionally powerful assistant for generating, understanding, translating, and debugging code, even for those without extensive coding experience.</P>
                <UL>
                    <LI><strong>Writing Code:</strong> Generate Python scripts or SQL queries from natural language.</LI>
                    <LI><strong>Explaining Code:</strong> Ask the AI to explain the functionality of a code snippet.</LI>
                    <LI><strong>Translating Code:</strong> Convert code from one programming language to another.</LI>
                    <LI><strong>Debugging Code:</strong> Identify errors, explain the issue, and propose solutions.</LI>
                </UL>
                 <Blockquote><strong>Caution:</strong> AI-generated code should always be thoroughly reviewed and tested before deployment.</Blockquote>
            </StyleWrapper>
        )
    },
    {
        id: 4,
        title: "Best Practices: Crafting Prompts Like a Pro",
        shortTitle: "Best Practices",
        quiz: quiz4,
        content: (
            <StyleWrapper>
                <P>Developing effective prompts is an iterative process. This section consolidates key best practices for prompt engineering.</P>
                 <div className="my-8 overflow-x-auto">
                    <Table>
                        <thead>
                            <tr>
                                <Th>Best Practice</Th>
                                <Th>Brief Explanation</Th>
                                <Th>"Do" Example</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td><strong>Keep it Simple and Clear</strong></Td>
                                <Td>Use concise, unambiguous language; avoid jargon.</Td>
                                <Td><Code>"Act as a travel guide for New York with a 3 year old."</Code></Td>
                            </tr>
                            <tr>
                                <Td><strong>Be Specific About Output</strong></Td>
                                <Td>Clearly define the desired structure, length, and content.</Td>
                                <Td><Code>"Generate a 3 paragraph blog post..."</Code></Td>
                            </tr>
                             <tr>
                                <Td><strong>Instructions Over Constraints</strong></Td>
                                <Td>Tell the AI what to do rather than what not to do.</Td>
                                <Td><Code>"Only discuss the console, company, year, and sales."</Code></Td>
                            </tr>
                             <tr>
                                <Td><strong>Leverage Your Documents</strong></Td>
                                <Td>Use your own files/data as context via <Code>@file name</Code>.</Td>
                                <Td><Code>"Summarize key points from @[Meeting Notes]..."</Code></Td>
                            </tr>
                             <tr>
                                <Td><strong>Control Output Length</strong></Td>
                                <Td>Specify desired response length in the prompt.</Td>
                                <Td><Code>"Explain quantum physics in a tweet."</Code></Td>
                            </tr>
                             <tr>
                                <Td><strong>Use Variables for Reusability</strong></Td>
                                <Td>Employ placeholders for dynamic, repeatable use.</Td>
                                <Td><Code>{`"Tell me a fact about: {city}"`}</Code></Td>
                            </tr>
                            <tr>
                                <Td><strong>Iterate & Refine</strong></Td>
                                <Td>Continuously test, analyze, and adjust prompts.</Td>
                                <Td>Fine-tuning with follow-up questions until output is ideal.</Td>
                            </tr>
                            <tr>
                                <Td><strong>Document Your Journey</strong></Td>
                                <Td>Keep detailed records of prompt attempts, settings, and outputs.</Td>
                                <Td>Using a template to log prompt versions, goals, and results.</Td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </StyleWrapper>
        )
    },
    {
        id: 5,
        title: "A Doctor's Guide to Prompt Engineering",
        shortTitle: "Doctor's Guide",
        content: (
            <StyleWrapper>
                <P>Prompt engineering in healthcare is the art of crafting effective inputs for LLMs to achieve accurate, safe, and contextually relevant outputs. For medical professionals, this is a strategic imperative.</P>
                <Blockquote>AI is intended to assist human endeavors, with the final output remaining the responsibility of the human user. This collaborative dynamic elevates human work.</Blockquote>
                <H3>Core Principles for Clinical Prompting</H3>
                <UL>
                    <LI><strong>Specificity is Paramount:</strong> Use clear, concise language and define the desired response format (e.g., summary, chart, list).</LI>
                    <LI><strong>Context is King:</strong> Provide relevant patient-specific details like diagnosis, comorbidities, and medications.</LI>
                    <LI><strong>Learning from Examples:</strong> Use one-shot or few-shot prompting to demonstrate a desired output, like a clinical case presentation format.</LI>
                    <LI><strong>Assigning a Role:</strong> Instruct the AI to act as a specialist (e.g., <Code>Assume the role of an experienced infectious disease specialist</Code>) to leverage focused expertise.</LI>
                    <LI><strong>Asking for Explanation (CoT):</strong> Use "Let's think step by step" to make the AI articulate its reasoning for transparency and accuracy.</LI>
                </UL>
                 <H3>Practical Applications in Clinical Practice</H3>
                 <UL>
                    <LI><strong>Enhancing Diagnostic Accuracy:</strong> Generating differential diagnoses based on symptoms.</LI>
                    <LI><strong>Streamlining Documentation:</strong> Automating SOAP notes, referral letters, and discharge instructions.</LI>
                    <LI><strong>Medical Research:</strong> Summarizing research papers and comparing clinical guidelines.</LI>
                    <LI><strong>Patient Communication:</strong> Simplifying complex medical information into everyday language.</LI>
                 </UL>
                 <H3>Ethical Considerations and Human Oversight</H3>
                 <P>In healthcare, human oversight in high-risk decisions is paramount. AI should inform, not decide. Outputs must be tested and validated in real clinical settings before being deployed at scale.</P>
                 <div className="my-8 overflow-x-auto p-6 bg-amber-50 rounded-lg border border-amber-200">
                    <H4>Cheat Sheet: Prompt Engineering for Doctors</H4>
                    <UL>
                        <LI><strong>Be Specific:</strong> <Code>"Summarize three treatment plans for Type 2 diabetes, limit to 300 words each."</Code></LI>
                        <LI><strong>Provide Context:</strong> <Code>"Adjust treatment plan for immunocompromised patient..."</Code></LI>
                        <LI><strong>Give Examples:</strong> Provide a sample clinical case, then ask for a new one in the same format.</LI>
                        <LI><strong>Assign a Role:</strong> <Code>"Assume the role of an experienced infectious disease specialist..."</Code></LI>
                        <LI><strong>Ask for Explanation (CoT):</strong> <Code>"Walk me through the diagnostic process... explaining your reasoning..."</Code></LI>
                        <LI><strong>Human Oversight:</strong> Always review AI outputs for accuracy, relevance, and safety. AI informs, humans decide.</LI>
                    </UL>
                </div>
            </StyleWrapper>
        )
    }
];

export const finalAssessment: Quiz = {
    id: 99,
    title: "Final Assessment",
    questions: [
        // From Quiz 1
        {
            question: "When you instruct an AI to 'return valid JSON', which of the Four Pillars are you primarily using?",
            options: ["Persona", "Task", "Context", "Format"],
            correctAnswerIndex: 3,
            explanation: "Specifying the output structure, such as JSON, is a core function of the 'Format' pillar."
        },
        {
            question: "Which pillar defines the AI's tone, style, and area of expertise by giving it an identity like 'expert copywriter'?",
            options: ["Persona", "Task", "Context", "Format"],
            correctAnswerIndex: 0,
            explanation: "The 'Persona' pillar is used to assign a specific role or character to the AI to guide its response style and knowledge base."
        },
        // From Quiz 2
        {
            question: "You need the AI to parse unstructured text into a highly specific data structure. You provide several examples of input text and the desired structured output. Which technique are you using?",
            options: ["Zero-Shot Prompting", "Few-Shot Prompting", "System Prompting", "Contextual Prompting"],
            correctAnswerIndex: 1,
            explanation: "'Few-Shot Prompting' is the technique of providing multiple examples to guide the AI in complex tasks that require a specific output pattern."
        },
        {
            question: "A prompt that begins with 'You are a helpful assistant that always answers in a respectful and safe manner' is an example of...?",
            options: ["One-Shot Prompting", "System Prompting", "Zero-Shot Prompting", "Few-Shot Prompting"],
            correctAnswerIndex: 1,
            explanation: "'System Prompting' sets the overarching rules, purpose, or safety guidelines for the AI's behavior throughout a conversation."
        },
        // From Quiz 3
        {
            question: "What is the primary goal of using 'Chain of Thought' (CoT) prompting?",
            options: ["To get the fastest possible response", "To improve the AI's logical reasoning and make its process transparent", "To make the AI more creative and unpredictable", "To summarize very long documents"],
            correctAnswerIndex: 1,
            explanation: "CoT prompting forces the AI to break down a problem into steps, which improves its reasoning accuracy and provides a transparent look at how it reached a conclusion."
        },
        {
            question: "When should you be most cautious with AI-generated code?",
            options: ["Only when it's in Python", "Only when the code is very long", "Never, it's always perfect", "Always; it must be reviewed and tested before deployment"],
            correctAnswerIndex: 3,
            explanation: "The handbook stresses that all AI-generated code, regardless of language or length, must be treated with caution and be thoroughly reviewed and tested."
        },
        // From Quiz 4
        {
            question: "According to best practices, which prompt is better? A) 'Don't write about cars.' or B) 'Write about modes of public transportation.'",
            options: ["A is better because it's a clear constraint.", "B is better because it's a positive instruction.", "Both are equally effective.", "Neither is effective."],
            correctAnswerIndex: 1,
            explanation: "Focusing on positive instructions (what to do) is generally more effective than negative constraints (what not to do) because it provides clearer guidance to the AI."
        },
        {
            question: "The process of 'tinkering' with prompts, analyzing the output, and making adjustments is known as:",
            options: ["System Prompting", "Documentation", "Iteration", "Using Variables"],
            correctAnswerIndex: 2,
            explanation: "'Iteration' is the fundamental, cyclical process of testing, analyzing, and refining prompts to achieve the desired outcome."
        },
        // Mixed/Application
        {
            question: "A doctor wants an AI to draft a referral letter. To get the best result, what should they provide in the prompt?",
            options: ["Only the patient's name", "A request to 'write a letter'", "Specific patient details (context), a specialist role (persona), and a desired structure (format)", "A creative story to inspire the AI"],
            correctAnswerIndex: 2,
            explanation: "For a complex clinical task, combining the pillars is most effective: providing patient details (Context), assigning a specialist role (Persona), and specifying the letter format (Format)."
        },
        {
            question: "Why would a project manager use the '@' symbol in a prompt (e.g., 'Summarize @ProjectBrief.docx')?",
            options: ["To tag another user in the conversation", "To leverage their own documents and provide specific context", "To make the AI's response bold", "To start a new chat session"],
            correctAnswerIndex: 1,
            explanation: "The '@' symbol is used to tag and incorporate your own files, providing rich, specific 'Context' that goes beyond the AI's general training data."
        },
    ]
}