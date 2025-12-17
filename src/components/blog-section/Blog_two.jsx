import React from "react";
import Landing_page from "../contact-page/Landing_page";
import Blog_contain from "./Blog_contain";

const Blog_two = () => {
  return (
    <>
      <Landing_page
        bg_image="/image/car_bg2.jpg"
        landing_title={"Car-insurance-mistakes"}
      />
      <Blog_contain
      image={'image/landing-page/insurance2.jpg'}
        date="10 DEC 2025"
        admin="admin"
        title={"5 Mistakes to Avoid When Buying Car Insurance"}
        desc={`Buying car insurance often feels like a chore that we just want to get over with. Most people simply look for the policy with the lowest premium and click "Buy." However, this approach can backfire heavily when you actually need to file a claim.
        Here are the top 5 mistakes you must avoid:

Ignoring the IDV (Insured Declared Value): This is the maximum amount you get if your car is stolen or totaled. Don't lower your IDV just to reduce the premium; you will regret it during a major loss.

Skipping Third-Party Liability: While comprehensive cover is good, third-party cover is mandatory by law in India. Ensure your policy covers legal liabilities adequately.

Overlooking Add-ons: Features like 'Zero Depreciation' and 'Roadside Assistance' cost a little extra but provide immense value. Without Zero Dep, you will have to pay a large chunk of repair costs from your pocket.

Not Reading the Fine Print: Always check what is not covered (exclusions) to avoid nasty surprises later.

Letting the Policy Lapse: Driving with an expired policy is illegal and also means you lose your 'No Claim Bonus' (NCB).`}
      />
    </>
  );
};

export default Blog_two;
