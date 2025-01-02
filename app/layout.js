import "./globals.css";

export const metadata = {
  title: "The Quiz Application",
  description:
    "Engage, challenge, and entertain yourself with our dynamic Quiz App built on Next.js. Dive into a world of knowledge with a diverse range of quizzes spanning various topics, including science, history, literature, pop culture, and more. Test your wits, compete with friends, and track your progress as you explore captivating questions and unlock fascinating insights. Whether you're a trivia enthusiast or simply looking to learn something new, our Quiz App offers an immersive and interactive experience for users of all backgrounds and interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
