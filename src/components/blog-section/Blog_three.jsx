import React from "react";
import Blog_contain from "./Blog_contain";
import Landing_page from "../contact-page/Landing_page";

const Blog_three = () => {
  return (
    <>
      <Landing_page
        bg_image="/image/life_bg1.jpg"
        landing_title={"Term-vs-life-insurance"}
      />
      <Blog_contain
        image={"image/landing-page/whyneed.png"}
        date="10 DEC 2025"
        admin="admin"
        title={"Term Insurance vs. Life Insurance: Right Choice?"}
        desc={`One of the most common questions people ask is: "Should I buy Term Insurance or a traditional Endowment/Life Insurance plan?" The confusion arises because both deal with life cover, but their purposes are very different.
            Term Insurance is the purest form of insurance. It offers high life cover (Sum Assured) for a very low premium. For example, you might get a cover of ₹1 Crore for just a few thousand rupees a year. However, if you survive the policy term, you usually get nothing back. Its sole purpose is to protect your family financially if you are not around.
            Traditional Life Insurance (Endowment/Money Back) combines insurance with investment. You get a maturity benefit if you survive the term. However, the premiums are much higher, and the life cover is usually much lower compared to Term Insurance.
            Which one should you pick? If your primary goal is to ensure your family can pay off loans and maintain their lifestyle in your absence, Term Insurance is the winner. Financial experts always recommend separating insurance and investment. Buy a Term Plan for protection and invest the rest of your money in mutual funds or PPF for better returns.`}
      />
    </>
  );
};

export default Blog_three;
