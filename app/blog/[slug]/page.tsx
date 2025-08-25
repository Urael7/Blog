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
        Ever wondered what computer engineers actually do all day? It&apos;s not just typing lines of code in a dark room while chugging energy drinks. The reality is much more nuanced and, dare I say, fascinating.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Morning Ritual</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Contrary to popular belief, most developers don&apos;t start their day at 3 PM. Many of us are early risers, beginning our day with a ritual that involves more than just opening our laptops. There&apos;s the essential coffee run, the team stand-up meeting, and the careful review of yesterday&apos;s work.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The first hour is usually spent catching up on emails, reviewing code changes from the previous day, and planning the day&apos;s tasks. It&apos;s a time for reflection and preparation, not just diving headfirst into coding.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Myth of Solitary Coding</h2>
      <p class="mb-6 text-lg leading-relaxed">
        While coding is often portrayed as a solitary activity, the truth is that modern software development is highly collaborative. We spend significant time in meetings, pair programming sessions, and code reviews. The stereotype of the lone wolf programmer is largely outdated.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Collaboration tools like Slack, Microsoft Teams, and GitHub have transformed how we work. We&apos;re constantly communicating with team members, discussing solutions, and sharing knowledge. The best code often comes from collective brainstorming and peer review.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Reality of Problem Solving</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Coding is only about 30% of what we actually do. The rest is problem-solving, debugging, testing, and documentation. We spend hours researching solutions, reading documentation, and experimenting with different approaches.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        When we&apos;re not writing new code, we&apos;re often fixing bugs, optimizing performance, or refactoring existing code. The debugging process can be both frustrating and rewarding, requiring patience and systematic thinking.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Coffee Connection</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Yes, there is a connection between coffee and coding, but it&apos;s not what you might think. Coffee breaks are often when the best ideas happen. Stepping away from the screen, discussing problems with colleagues over a cup of coffee, can lead to breakthroughs that hours of staring at code couldn&apos;t achieve.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The coffee machine is often the unofficial meeting place where developers share knowledge, discuss new technologies, and build relationships. It&apos;s where junior developers learn from seniors, and where innovative ideas are born.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Continuous Learning</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Technology evolves rapidly, and staying current is a constant challenge. We spend time reading blogs, watching tutorials, attending conferences, and experimenting with new technologies. The learning never stops, and that&apos;s part of what makes this field exciting.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Whether it&apos;s learning a new programming language, exploring a new framework, or understanding emerging trends like AI and machine learning, continuous education is essential for career growth.
      </p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Satisfaction of Creation</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Despite the challenges, there&apos;s immense satisfaction in creating something from nothing. Watching an idea transform into working software that helps people is incredibly rewarding. It&apos;s this creative aspect that keeps many of us passionate about our work.
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
      ...
    `
  },
  'post-3': {
    title: 'Breaking the Myth: Coding Isn&apos;t Just for Geniuses',
    img: '/f4.jfif',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        Behind every app and website is a developer who started from scratch. Coding isn&apos;t about being a genius—it&apos;s about patience, practice, and persistence. Let me break down the myths and show you the reality of learning to code.
      </p>
      ...
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
