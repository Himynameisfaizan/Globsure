import React from "react";
import Landing_page from "../contact-page/Landing_page";
import Blog_contain from "./Blog_contain";

const Blog_five = () => {
  return (
    <>
      <Landing_page
        bg_image="/image/landing-page/finance2.jpg"
        landing_title={"Retirement-planning"}
      />
      <Blog_contain
        image={"image/landing-page/aboutbg2.jpg"}
        date="17 DEC 2025"
        admin="admin"
        title={"Retirement Planning: The Power of Starting Early"}
        desc={`When you are in your 20s or 30s, retirement feels like a lifetime away. You might think, "I’ll start saving for it when I’m 40." This is the biggest financial mistake you can make. The magic of Compound Interest works best when you give it time.

Let’s look at an example. If you start investing ₹5,000 per month at age 25, you will end up with a significantly larger corpus by age 60 than someone who starts investing ₹10,000 per month at age 40. This is because your money earns interest, and then that interest earns more interest over a longer period.

Retirement planning isn't just about survival; it's about maintaining your lifestyle when your regular income stops. With inflation rising every year, the cost of groceries, medical care, and travel will be much higher 30 years from now. Relying solely on a pension or children is risky.

Key Takeaway: The best time to plant a tree was 20 years ago. The second best time is now. Start your retirement fund today, no matter how small the amount is.`}
      />
    </>
  );
};

export default Blog_five;
