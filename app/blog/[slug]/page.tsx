'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface BlogPageProps {
  params: { slug: string };
}

// Full blog content for each post
const blogContent = {
  'post-1': {
    title: 'From Code to Coffee: What It Really Looks Like Behind the Screens',
    img: '/f1.jfif',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        Ever wondered what computer engineers actually do all day? It's not just typing lines of code in a dark room while chugging energy drinks. The reality is much more nuanced and, dare I say, fascinating.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Morning Ritual</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Contrary to popular belief, most developers don't start their day at 3 PM. Many of us are early risers, beginning our day with a ritual that involves more than just opening our laptops. There's the essential coffee run, the team stand-up meeting, and the careful review of yesterday's work.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The first hour is usually spent catching up on emails, reviewing code changes from the previous day, and planning the day's tasks. It's a time for reflection and preparation, not just diving headfirst into coding.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Myth of Solitary Coding</h2>
      <p class="mb-6 text-lg leading-relaxed">
        While coding is often portrayed as a solitary activity, the truth is that modern software development is highly collaborative. We spend significant time in meetings, pair programming sessions, and code reviews. The stereotype of the lone wolf programmer is largely outdated.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Collaboration tools like Slack, Microsoft Teams, and GitHub have transformed how we work. We're constantly communicating with team members, discussing solutions, and sharing knowledge. The best code often comes from collective brainstorming and peer review.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Reality of Problem Solving</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Coding is only about 30% of what we actually do. The rest is problem-solving, debugging, testing, and documentation. We spend hours researching solutions, reading documentation, and experimenting with different approaches.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        When we're not writing new code, we're often fixing bugs, optimizing performance, or refactoring existing code. The debugging process can be both frustrating and rewarding, requiring patience and systematic thinking.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Coffee Connection</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Yes, there is a connection between coffee and coding, but it's not what you might think. Coffee breaks are often when the best ideas happen. Stepping away from the screen, discussing problems with colleagues over a cup of coffee, can lead to breakthroughs that hours of staring at code couldn't achieve.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The coffee machine is often the unofficial meeting place where developers share knowledge, discuss new technologies, and build relationships. It's where junior developers learn from seniors, and where innovative ideas are born.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Continuous Learning</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Technology evolves rapidly, and staying current is a constant challenge. We spend time reading blogs, watching tutorials, attending conferences, and experimenting with new technologies. The learning never stops, and that's part of what makes this field exciting.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Whether it's learning a new programming language, exploring a new framework, or understanding emerging trends like AI and machine learning, continuous education is essential for career growth.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Satisfaction of Creation</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Despite the challenges, there's immense satisfaction in creating something from nothing. Watching an idea transform into working software that helps people is incredibly rewarding. It's this creative aspect that keeps many of us passionate about our work.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The feeling of solving a complex problem, the joy of seeing users interact with your creation, and the pride in delivering quality software make all the debugging sessions and late nights worthwhile.
      </p>
    `
  },
  'post-2': {
    title: 'The Daily Routine of a Software Developer',
    img: '/f2.jfif',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        In the quiet hum of a dual-monitor setup, a developer dives deep into the world of code. But what does a typical day in the life of a software developer really look like? Let me take you through the reality behind the screens.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">9:00 AM - The Day Begins</h2>
      <p class="mb-6 text-lg leading-relaxed">
        The day typically starts with a morning stand-up meeting. This is where the team gathers to discuss what we accomplished yesterday, what we're working on today, and any blockers we might be facing. It's a quick, focused meeting that sets the tone for the day.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        After the stand-up, I usually spend 30 minutes reviewing emails, checking notifications from our project management tools, and planning my priorities for the day. This planning phase is crucial for maintaining focus and productivity.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">9:30 AM - Deep Work Begins</h2>
      <p class="mb-6 text-lg leading-relaxed">
        This is when the real coding begins. I try to tackle the most complex tasks during my peak productivity hours. Whether it's implementing a new feature, fixing a bug, or refactoring existing code, this is the time when I can focus deeply without interruptions.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The coding process involves much more than just typing. I'm constantly switching between writing code, reading documentation, testing my changes, and debugging issues. It's a dynamic process that requires both creativity and analytical thinking.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">11:00 AM - Coffee Break and Collaboration</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Around mid-morning, I take a break to recharge. This is often when I have informal discussions with colleagues about technical challenges, share knowledge, or simply catch up. These conversations often lead to new insights and solutions.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Collaboration is a key part of software development. Whether it's pair programming, code reviews, or brainstorming sessions, working with others helps improve code quality and fosters learning.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">12:30 PM - Lunch and Learning</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Lunch is not just about eating; it's often a time for learning and networking. Many developers use this time to read technical articles, watch tutorials, or discuss industry trends with colleagues.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The tech industry moves fast, and staying current requires continuous learning. Whether it's exploring new programming languages, understanding emerging technologies, or learning best practices, this ongoing education is essential.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">2:00 PM - Afternoon Focus</h2>
      <p class="mb-6 text-lg leading-relaxed">
        The afternoon is typically dedicated to more focused work. This might involve completing features, writing tests, or preparing for code reviews. It's also a good time for meetings and planning sessions.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Testing is a crucial part of the development process. Writing unit tests, integration tests, and performing manual testing ensures that our code works correctly and doesn't break existing functionality.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">4:00 PM - Code Reviews and Documentation</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Code reviews are an essential part of maintaining code quality. Reviewing other developers' code helps catch bugs, improve performance, and ensure consistency across the codebase. It's also a great way to learn from others and share knowledge.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Documentation is often overlooked but is crucial for maintaining and scaling software projects. Writing clear, comprehensive documentation helps future developers (including yourself) understand the code and makes onboarding new team members much easier.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">5:30 PM - Wrapping Up</h2>
      <p class="mb-6 text-lg leading-relaxed">
        As the day winds down, I focus on wrapping up tasks, committing code changes, and preparing for the next day. This includes updating project management tools, responding to any remaining emails, and planning tomorrow's priorities.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The end of the day is also a good time for reflection. What went well? What could be improved? What did I learn today? This reflection helps with continuous improvement and personal growth.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Beyond the 9-to-5</h2>
      <p class="mb-6 text-lg leading-relaxed">
        While the official workday might end at 5:30, many developers continue learning and experimenting outside of work hours. This might involve contributing to open-source projects, building personal projects, or exploring new technologies.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The passion for coding often extends beyond the workplace, and this continuous learning and experimentation is what keeps the field exciting and dynamic.
      </p>
    `
  },
  'post-3': {
    title: 'Breaking the Myth: Coding Isn\'t Just for Geniuses',
    img: '/f4.jfif',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        Behind every app and website is a developer who started from scratch. Coding isn't about being a genius—it's about patience, practice, and persistence. Let me break down the myths and show you the reality of learning to code.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Myth #1: You Need to Be a Math Genius</h2>
      <p class="mb-6 text-lg leading-relaxed">
        One of the biggest misconceptions about coding is that you need to be a mathematical genius. While some areas of programming (like data science or game development) require strong math skills, most web development and general programming requires basic arithmetic and logical thinking.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The truth is, you're more likely to use logic and problem-solving skills than advanced mathematics. Understanding how to break down problems into smaller, manageable pieces is far more important than calculus.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Myth #2: You Need a Computer Science Degree</h2>
      <p class="mb-6 text-lg leading-relaxed">
        While a computer science degree can be helpful, it's not a requirement for becoming a successful programmer. Many of the most successful developers are self-taught or learned through bootcamps, online courses, and practical experience.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The tech industry values skills and results over formal education. What matters most is your ability to solve problems, write clean code, and continuously learn. Many companies now focus on practical coding tests and portfolio projects rather than degrees.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Myth #3: You Need to Start Young</h2>
      <p class="mb-6 text-lg leading-relaxed">
        There's no age limit for learning to code. People successfully transition into programming careers at all stages of life. Whether you're 18 or 50, the key is dedication and consistent practice.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        In fact, older learners often bring valuable life experience, problem-solving skills, and work ethic to their coding journey. Many successful developers started their programming careers in their 30s, 40s, or even later.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Reality: It's About Practice, Not Genius</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Coding is a skill, and like any skill, it improves with practice. The "genius" developers you hear about have typically been coding for years, solving thousands of problems, and learning from countless mistakes.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Every expert was once a beginner. The difference between a novice and an expert isn't innate intelligence—it's the amount of time spent practicing, the quality of that practice, and the willingness to learn from failures.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Learning Journey</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Learning to code is a journey, not a destination. It starts with simple concepts like variables and loops, gradually building up to more complex topics like algorithms and system design. Each step builds upon the previous one.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The key is to start small and be patient with yourself. Your first programs might be simple, but every line of code you write is progress. Celebrate small victories and don't get discouraged by setbacks.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Power of Community</h2>
      <p class="mb-6 text-lg leading-relaxed">
        One of the best things about learning to code is the supportive community. There are countless forums, Discord servers, and meetup groups where beginners can ask questions and get help from more experienced developers.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Don't be afraid to ask questions or share your code. Most developers remember what it was like to be a beginner and are happy to help. The coding community is generally welcoming and supportive of newcomers.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Building Projects</h2>
      <p class="mb-6 text-lg leading-relaxed">
        The best way to learn coding is by building projects. Start with simple projects like a calculator or a to-do list, then gradually work your way up to more complex applications. Each project teaches you new skills and reinforces what you've learned.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Projects also give you something tangible to show potential employers. A portfolio of projects demonstrates your skills better than any certificate or degree. It shows that you can apply what you've learned to real-world problems.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Growth Mindset</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Perhaps the most important trait for a successful programmer is a growth mindset. Believe that your abilities can be developed through dedication and hard work. View challenges as opportunities to learn rather than obstacles to avoid.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        When you encounter bugs or difficult problems, see them as learning opportunities. Every error message is a chance to understand something new. Every debugging session makes you a better programmer.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Coding isn't about being a genius—it's about being curious, persistent, and willing to learn. It's about breaking down complex problems into manageable pieces and building solutions step by step.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Whether you're just starting your coding journey or you're already on your way, remember that every expert was once a beginner. Focus on progress, not perfection, and enjoy the journey of creating something from nothing.
      </p>
    `
  }
};

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const desc = searchParams.get('desc');
  const img = searchParams.get('img');

  // Get the full blog content for this slug
  const blogPost = blogContent[slug as keyof typeof blogContent];

  return (
    <main className="px-6 py-8 bg-gradient-to-b from-white via-gray-100 to-gray-300 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {blogPost?.title || title || slug.replace(/-/g, ' ')}
          </h1>

          {blogPost?.img && (
            <img
              src={blogPost.img}
              alt={blogPost.title}
              className="w-full max-w-3xl mx-auto rounded-lg mb-8 shadow-md"
            />
          )}

          {blogPost ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          ) : (
            <p className="text-gray-700 text-lg leading-relaxed">
              {desc || `This is the full detail page for the blog post: ${slug}.`}
            </p>
          )}

          <div className="mt-12 text-center">
            <Link 
              href="/featured-posts" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Featured Posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
